import { Fragment, useCallback, useContext, useMemo, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useEffect } from "react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { ORBIT_TARGET } from "../../data/constants";
import { sceneState } from "../../data/sceneState";
import { KTX2Loader } from "three-stdlib";
import { SceneStateContext } from "../../context";

const WALL_NAMES: { [key: string]: string } = {
	bedWall: "Bed_Wall",
	closetWall: "Closet_Wall",
	windowWall: "Window_Wall",
	deskWall: "Desk_Wall",
};

type WallFadeState = { meshes: THREE.Mesh[]; opacity: number; targetOpacity: number };

const easeOutCubic = (t: number) => {
	return 1 - Math.pow(1 - t, 3);
};

export const RoomScene = () => {
	const gl = useThree((state) => state.gl);
	const { scene } = useGLTF("/isometric-room-ktx2.glb", true, undefined, (loader) => {
		const ktx2loader = new KTX2Loader();
		ktx2loader.setTranscoderPath("https://cdn.jsdelivr.net/gh/pmndrs/drei-assets/basis/");
		ktx2loader.detectSupport(gl);
		loader.setKTX2Loader(ktx2loader);
	});

	const modelQuadrantRef = useRef(-1);
	const wallFadeRef = useRef<Map<string, WallFadeState>>(new Map());
	const cameraInsideRoomRef = useRef(false);

	const sceneGroupRef = useRef<THREE.Group>(null);
	const initAnimProgressRef = useRef(0);

	const getQuadrant = useCallback((angleRad: number): number => {
		if (angleRad >= 0 && angleRad < Math.PI / 2) return 0;
		if (angleRad >= Math.PI / 2 && angleRad < Math.PI) return 1;
		if (angleRad <= -Math.PI / 2 && angleRad > -Math.PI) return 2;
		return 3;
	}, []);

	const wallShouldBeVisible = useCallback((wallName: string, quadrant: number): boolean => {
		if (quadrant === 0 && (wallName === WALL_NAMES.bedWall || wallName === WALL_NAMES.closetWall)) return false;
		if (quadrant === 1 && (wallName === WALL_NAMES.bedWall || wallName === WALL_NAMES.windowWall)) return false;
		if (quadrant === 2 && (wallName === WALL_NAMES.windowWall || wallName === WALL_NAMES.deskWall)) return false;
		if (quadrant === 3 && (wallName === WALL_NAMES.deskWall || wallName === WALL_NAMES.closetWall)) return false;
		return true;
	}, []);

	const sceneContextState = useContext(SceneStateContext);

	useEffect(() => {
		initAnimProgressRef.current = 0;

		scene.traverse((obj) => {
			// Enable shadow for all meshes
			obj.castShadow = true;
			obj.receiveShadow = true;

			// For all meshes associated with a wall, clone its material and add to wallFadeRef
			if (Object.values(WALL_NAMES).includes(obj.name)) {
				const meshes: THREE.Mesh[] = [];

				obj.traverse((child) => {
					if (child instanceof THREE.Mesh) {
						const mats = Array.isArray(child.material) ? child.material : [child.material];
						const cloned = mats.map((mat: THREE.Material) => {
							const clonedMat = mat.clone();
							clonedMat.transparent = true;
							return clonedMat;
						});
						child.material = Array.isArray(child.material) ? cloned : cloned[0];
						meshes.push(child);
					}
				});

				wallFadeRef.current.set(obj.name, { meshes, opacity: 1, targetOpacity: 1 });
			}
		});
	}, [scene]);

	useEffect(() => {
		sceneContextState?.setIsLoading(false);
	}, [scene, sceneContextState]);

	useFrame(({ camera }, delta) => {
		// Check if camera is within the room (XZ distance from origin < 4.5)
		const xzDist = camera.position.x ** 2 + camera.position.z ** 2;
		const insideRoomRadius = 4.5;
		const isInsideRoom = xzDist < insideRoomRadius ** 2;

		if (isInsideRoom !== cameraInsideRoomRef.current) {
			cameraInsideRoomRef.current = isInsideRoom;
			if (isInsideRoom) {
				wallFadeRef.current.forEach((entry) => {
					entry.targetOpacity = 1;
				});
			} else {
				// Re-evaluation quadrant when leaving the room
				modelQuadrantRef.current = -1;
			}
		}

		// Check if camera quadrant has changed (only when outside the room)
		if (!isInsideRoom) {
			const offset = new THREE.Vector3().subVectors(camera.position, ORBIT_TARGET);
			const currentQuadrant = getQuadrant(Math.atan2(offset.x, offset.z));
			if (wallFadeRef.current.size !== 0 && currentQuadrant !== modelQuadrantRef.current) {
				modelQuadrantRef.current = currentQuadrant;
				wallFadeRef.current.forEach((entry, name) => {
					entry.targetOpacity = wallShouldBeVisible(name, currentQuadrant) ? 1 : 0;
				});
			}
		}

		// Animate room scale pop-in and spin on first load
		// Only start animating when FPS >= 30
		if (initAnimProgressRef.current < 1 && 1 / delta >= 30) {
			initAnimProgressRef.current = Math.min(initAnimProgressRef.current + delta / 0.8, 1);
			const eased = easeOutCubic(initAnimProgressRef.current);
			sceneGroupRef.current?.scale.setScalar(eased);
			if (sceneGroupRef.current) {
				sceneGroupRef.current.rotation.y = (1 - eased) * Math.PI * 2;
			}
			if (initAnimProgressRef.current >= 1) {
				sceneState.introAnimDone = true;
			}
		}

		// Animate wall opacity changes
		wallFadeRef.current.forEach((entry) => {
			if (entry.opacity === entry.targetOpacity) {
				return;
			}

			// Instantly hide mesh if target opacity is 0
			if (entry.targetOpacity === 0) {
				entry.meshes.forEach((mesh) => {
					mesh.visible = false;
					const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
					mats.forEach((mat) => (mat.opacity = 0));
					entry.opacity = 0;
				});
				return;
			}

			// Linearly interpolate from current opacity to target opacity
			const fadeInSpeed = 3;
			entry.opacity = THREE.MathUtils.lerp(entry.opacity, entry.targetOpacity, delta * fadeInSpeed);

			if (Math.abs(entry.opacity - entry.targetOpacity) < 0.01) {
				entry.opacity = entry.targetOpacity;
			}

			entry.meshes.forEach((mesh) => {
				mesh.visible = entry.opacity > 0.001;
				const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
				mats.forEach((mat) => (mat.opacity = entry.opacity));
			});
		});
	});

	const secondaryLightsElements = useMemo(() => {
		const secondaryLightsPositions = [
			new THREE.Vector3(10, 7, 0),
			new THREE.Vector3(-10, 7, 0),
			new THREE.Vector3(0, 7, 10),
			new THREE.Vector3(0, 7, -10),
		];

		return secondaryLightsPositions.map((lightPos, i) => (
			<pointLight
				key={i}
				intensity={20}
				color="#e6994e"
				position={lightPos}
				castShadow
				shadow-bias={-0.005}
				shadow-mapSize={[2048, 2048]}
				shadow-radius={20}
			/>
		));
	}, []);

	return (
		<Fragment>
			<group ref={sceneGroupRef} scale={0}>
				<primitive object={scene} position={[0, 0, 0]} />
			</group>
			{/* Primary light */}
			<pointLight
				intensity={100}
				color="#e6994e"
				position={[0, 7, 0]}
				castShadow
				shadow-bias={-0.005}
				shadow-mapSize={[2048, 2048]}
				shadow-radius={20}
			/>

			{/* Secondary lights */}
			{secondaryLightsElements}

			{/* Post processing */}
			<EffectComposer>
				<Bloom intensity={0.5} luminanceThreshold={0.8} luminanceSmoothing={0.9} />
			</EffectComposer>
		</Fragment>
	);
};
