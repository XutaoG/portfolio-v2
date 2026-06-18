import { useCallback, useContext, useMemo, useRef, useState } from "react";
import { useGLTF, PerformanceMonitor, AdaptiveDpr } from "@react-three/drei";
import { EffectComposer, Bloom, HueSaturation } from "@react-three/postprocessing";
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

	const directionalLightRef = useRef<THREE.DirectionalLight>(null);
	const modelQuadrantRef = useRef(-1);
	const wallFadeRef = useRef<Map<string, THREE.Object3D>>(new Map());
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
		if (quadrant === 0 && (wallName === WALL_NAMES.closetWall || wallName === WALL_NAMES.bedWall)) return false;
		if (quadrant === 1 && (wallName === WALL_NAMES.bedWall || wallName === WALL_NAMES.windowWall)) return false;
		if (quadrant === 2 && (wallName === WALL_NAMES.windowWall || wallName === WALL_NAMES.deskWall)) return false;
		if (quadrant === 3 && (wallName === WALL_NAMES.deskWall || wallName === WALL_NAMES.closetWall)) return false;
		return true;
	}, []);

	const [lowPerf, setLowPerf] = useState(false);

	const sceneContextState = useContext(SceneStateContext);

	useEffect(() => {
		initAnimProgressRef.current = 0;

		scene.traverse((obj) => {
			// Enable shadow for all meshes
			obj.castShadow = true;
			obj.receiveShadow = true;

			if (Object.values(WALL_NAMES).includes(obj.name)) {
				wallFadeRef.current.set(obj.name, obj);
			}
		});
	}, [scene]);

	useEffect(() => {
		sceneContextState?.setIsLoading(false);
	}, [scene, sceneContextState]);

	useFrame(({ camera, invalidate }, delta) => {
		// Check if camera is within the room (XZ distance from origin < 4.5)
		const xzDist = camera.position.x ** 2 + camera.position.z ** 2;
		const insideRoomRadius = 4.5;
		const isInsideRoom = xzDist < insideRoomRadius ** 2;

		if (isInsideRoom !== cameraInsideRoomRef.current) {
			cameraInsideRoomRef.current = isInsideRoom;
			if (isInsideRoom) {
				// Show all walls when the camera moves within the room
				wallFadeRef.current.forEach((wall) => {
					wall.visible = true;
				});

				// Disable directional light when the camera moves within the room
				if (directionalLightRef.current) {
					directionalLightRef.current.intensity = 0;
				}
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
				wallFadeRef.current.forEach((wall, name) => {
					wall.visible = wallShouldBeVisible(name, currentQuadrant);
				});

				// Disable directional light when window wall is not visible
				if (directionalLightRef.current) {
					if (currentQuadrant === 1 || currentQuadrant === 2) {
						directionalLightRef.current.intensity = 0;
					} else {
						directionalLightRef.current.intensity = 10;
					}
				}
			}
		}

		// Animate room scale pop-in and spin on first load
		if (initAnimProgressRef.current < 1) {
			// Only advance animation when FPS >= 30, but always request the next frame
			if (1 / delta >= 30) {
				initAnimProgressRef.current = Math.min(initAnimProgressRef.current + delta * 0.5, 1);
				const eased = easeOutCubic(initAnimProgressRef.current);
				sceneGroupRef.current?.scale.setScalar(eased);
				if (sceneGroupRef.current) {
					sceneGroupRef.current.rotation.y = (1 - eased) * Math.PI * 2;
				}
				if (initAnimProgressRef.current >= 1) {
					sceneState.introAnimDone = true;
				}
			}
			// Keep requesting frames
			invalidate();
		}
	});

	const secondaryLightsElements = useMemo(() => {
		const secondaryLightsPositions = [
			new THREE.Vector3(10, 7, 0),
			new THREE.Vector3(-10, 7, 0),
			new THREE.Vector3(0, 7, 10),
			new THREE.Vector3(0, 7, -10),
		];

		return secondaryLightsPositions.map((lightPos, i) => (
			<pointLight key={i} intensity={14} color="#ebb87a" position={lightPos} castShadow={false} />
		));
	}, []);

	return (
		<PerformanceMonitor onDecline={() => setLowPerf(true)} onIncline={() => setLowPerf(false)}>
			<AdaptiveDpr pixelated />
			<group ref={sceneGroupRef} scale={0}>
				<primitive object={scene} position={[0, 0, 0]} />
			</group>

			{/* Ambient fill — sky warm, ground very dark */}
			<hemisphereLight args={["#ffd6a0", "#0d0500", 0.7]} />

			{/* Primary light */}
			<pointLight
				intensity={70}
				color="#e6994e"
				position={[0, 7, 0]}
				castShadow
				shadow-bias={-0.005}
				shadow-mapSize={[2048, 2048]}
				shadow-radius={30}
			/>

			{/* Secondary fill lights — no shadows */}
			{secondaryLightsElements}

			{/* Cool directional accent to simulate daylight from the window side */}
			<directionalLight
				ref={directionalLightRef}
				intensity={10}
				color="#d4e8ff"
				position={[-2, 6, -13]}
				target={scene}
				castShadow
				shadow-bias={-0.003}
				shadow-mapSize={[1024, 1024]}
			/>

			{/* Post processing */}
			{!lowPerf && (
				<EffectComposer>
					<Bloom intensity={0.05} luminanceThreshold={0.3} luminanceSmoothing={0.5} />
					<HueSaturation saturation={0.1} />
				</EffectComposer>
			)}
		</PerformanceMonitor>
	);
};
