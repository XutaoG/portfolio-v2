import { Fragment, useRef } from "react";
import { Environment, OrbitControls, OrthographicCamera, useGLTF } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useEffect } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { degToRad } from "three/src/math/MathUtils.js";

const wallNames: { [key: string]: string } = {
	bedWall: "Bed_Wall",
	closetWall: "Closet_Wall",
	windowWall: "Window_Wall",
	deskWall: "Desk_Wall",
};

type WallFadeState = { meshes: THREE.Mesh[]; opacity: number; targetOpacity: number };

export const RoomScene = () => {
	const { scene } = useGLTF("/isometric-room.glb");
	const cameraRef = useRef<THREE.OrthographicCamera>(null);
	const modelQuadrantRef = useRef(-1);
	const wallFadeRef = useRef<Map<string, WallFadeState>>(new Map());

	const roomPosition = new THREE.Vector3(0, 0, 0);
	const orbitTarget = new THREE.Vector3(0, 7, 0);

	useEffect(() => {
		const cam = cameraRef.current;
		if (cam) {
			const fultrumShift = 2;
			cam.left -= fultrumShift;
			cam.right -= fultrumShift;
			cam.updateProjectionMatrix();
		}
	}, []);

	useEffect(() => {
		scene.traverse((obj) => {
			// Enable shadow for all objects
			obj.castShadow = true;
			obj.receiveShadow = true;

			const setNotVisible = obj.name === wallNames.bedWall || obj.name === wallNames.closetWall;

			// Populate wall fade objects
			if (Object.values(wallNames).includes(obj.name)) {
				const meshes: THREE.Mesh[] = [];
				obj.traverse((child) => {
					if (child instanceof THREE.Mesh) {
						const mats = Array.isArray(child.material) ? child.material : [child.material];
						const cloned = mats.map((mat: THREE.Material) => {
							const clonedMat = mat.clone();
							clonedMat.transparent = true;

							if (setNotVisible) {
								child.visible = false;
								clonedMat.opacity = 0;
							}

							return clonedMat;
						});
						child.material = Array.isArray(child.material) ? cloned : cloned[0];
						meshes.push(child);
					}
				});

				if (setNotVisible) {
					wallFadeRef.current.set(obj.name, { meshes, opacity: 0, targetOpacity: 0 });
				} else {
					wallFadeRef.current.set(obj.name, { meshes, opacity: 1, targetOpacity: 1 });
				}
			}
		});
	}, [scene]);

	useFrame(({ camera }, delta) => {
		const offset = new THREE.Vector3().subVectors(camera.position, orbitTarget);
		const angle = Math.atan2(offset.x, offset.z);

		const getCurrentQuadrant = (angleRad: number): number => {
			if (angleRad >= 0 && angleRad < Math.PI / 2) {
				return 0;
			} else if (angleRad >= Math.PI / 2 && angleRad < Math.PI) {
				return 1;
			} else if (angleRad <= -Math.PI / 2 && angleRad > -Math.PI) {
				return 2;
			} else {
				return 3;
			}
		};

		const updateWallVisibility = (quadrant: number) => {
			wallFadeRef.current.forEach((entry, name) => {
				let shouldBeVisible = true;
				if (quadrant === 0 && (name === wallNames.bedWall || name === wallNames.closetWall))
					shouldBeVisible = false;
				else if (quadrant === 1 && (name === wallNames.bedWall || name === wallNames.windowWall))
					shouldBeVisible = false;
				else if (quadrant === 2 && (name === wallNames.windowWall || name === wallNames.deskWall))
					shouldBeVisible = false;
				else if (quadrant === 3 && (name === wallNames.deskWall || name === wallNames.closetWall))
					shouldBeVisible = false;
				entry.targetOpacity = shouldBeVisible ? 1 : 0;
			});
		};

		const currentQuadrant = getCurrentQuadrant(angle);
		if (currentQuadrant != modelQuadrantRef.current) {
			modelQuadrantRef.current = currentQuadrant;
			updateWallVisibility(currentQuadrant);
		}

		wallFadeRef.current.forEach((entry) => {
			if (entry.opacity === entry.targetOpacity) {
				return;
			}

			// Instantly hide mesh
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
				mats.forEach((m) => (m.opacity = entry.opacity));
			});
		});
	});

	const secondaryLightsPositions = [
		new THREE.Vector3(10, 7, 0),
		new THREE.Vector3(-10, 7, 0),
		new THREE.Vector3(0, 7, 10),
		new THREE.Vector3(0, 7, -10),
	];
	const secondaryLightsElements = secondaryLightsPositions.map((lightPos, i) => (
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

	return (
		<Fragment>
			<primitive object={scene} position={roomPosition} />
			<OrthographicCamera ref={cameraRef} makeDefault position={[20, 20, 20]} zoom={50} />
			<OrbitControls
				enablePan={false}
				minPolarAngle={degToRad(10)}
				maxPolarAngle={degToRad(80)}
				minZoom={30}
				maxZoom={70}
				target={orbitTarget}
				domElement={document.body}
			/>
			<Environment preset="studio" backgroundIntensity={0.2} environmentIntensity={0.2} />
			{/* <ambientLight intensity={0.5} color="white" /> */}
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
