import { OrbitControls } from "@react-three/drei";
import { useContext, useEffect, useRef, type ComponentRef } from "react";
import { useLocation } from "react-router";
import { Fragment } from "react/jsx-runtime";
import * as THREE from "three";
import { ABOUT_ROUTE, CONTACT_ROUTE, HOME_ROUTE, PROJECTS_ROUTE, SKILLS_ROUTE } from "../../routes";
import { degToRad, lerp } from "three/src/math/MathUtils.js";
import { useFrame } from "@react-three/fiber";
import { CAMERA_INITIAL_POSITION, ORBIT_TARGET } from "../../data/constants";
import { sceneState } from "../../data/sceneState";
import { SceneStateContext } from "../../context";

const CAM_ROUTE_CONFIG: { [key: string]: { position: THREE.Vector3; lookAt: THREE.Vector3 } } = {
	[ABOUT_ROUTE]: {
		position: new THREE.Vector3(3, 6, -1),
		lookAt: new THREE.Vector3(-10, 6, -1),
	},
	[SKILLS_ROUTE]: {
		position: new THREE.Vector3(0, 6, 3),
		lookAt: new THREE.Vector3(0, 6, -10),
	},
	[PROJECTS_ROUTE]: {
		position: new THREE.Vector3(-3, 6, 0),
		lookAt: new THREE.Vector3(10, 6, 0),
	},
	[CONTACT_ROUTE]: {
		position: new THREE.Vector3(-1, 6, -3),
		lookAt: new THREE.Vector3(-1, 6, 10),
	},
};
const SCENE_RIGHT_SHIFT = 0.2;
const SCENE_UP_SHIFT = 0.1;
const PARALLAX_STRENGTH = 1;
const PARALLAX_LERP_SPEED = 1;

const REFERENCE_SIZE = 1500;
const CAMERA_MIN_ZOOM = 0.6;
const CAMERA_MAX_ZOOM = 1.2;

const easeInOutCubic = (t: number): number => {
	return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};

export const CameraControl = () => {
	const pendingCamTransitionRef = useRef(false);
	const camTransitionConfigRef = useRef<{
		endPos: THREE.Vector3;
		lookAt: THREE.Vector3;
		endFov: number;
		toOrbit: boolean;
	}>(null);

	const camTransitionRef = useRef<{
		startPos: THREE.Vector3;
		endPos: THREE.Vector3;
		startFov: number;
		endFov: number;
		startLookAt: THREE.Vector3;
		endLookAt: THREE.Vector3;
		progress: number;
		toOrbit: boolean;
	} | null>(null);

	const cameraStateRef = useRef<{ lookAt: THREE.Vector3 }>({ lookAt: ORBIT_TARGET });

	const mouseTargetRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
	const enableParallaxRef = useRef(false);
	const parallaxCameraTargetRef = useRef<THREE.Vector3>(ORBIT_TARGET);

	const orbitControlsRef = useRef<ComponentRef<typeof OrbitControls> | null>(null);
	const lastViewStateRef = useRef({ width: 0, height: 0, cameraId: -1 });

	const location = useLocation();
	const topLevelPath = location.pathname.split("/")[1];

	const { isLoading } = useContext(SceneStateContext)!;

	useEffect(() => {
		pendingCamTransitionRef.current = true;

		if (topLevelPath === HOME_ROUTE) {
			camTransitionConfigRef.current = {
				endPos: CAMERA_INITIAL_POSITION,
				lookAt: ORBIT_TARGET,
				endFov: 30,
				toOrbit: true,
			};
		} else if (Object.keys(CAM_ROUTE_CONFIG).includes(topLevelPath)) {
			camTransitionConfigRef.current = {
				endPos: CAM_ROUTE_CONFIG[topLevelPath].position.clone(),
				lookAt: CAM_ROUTE_CONFIG[topLevelPath].lookAt.clone(),
				endFov: 50,
				toOrbit: false,
			};
		} else {
			pendingCamTransitionRef.current = false;
			camTransitionConfigRef.current = null;
		}
	}, [topLevelPath]);

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			mouseTargetRef.current = {
				x: (e.clientX / window.innerWidth) * 2 - 1,
				y: (e.clientY / window.innerHeight) * 2 - 1,
			};
		};

		if (!isLoading) {
			enableParallaxRef.current = true;
			window.addEventListener("mousemove", handleMouseMove);

			return () => window.removeEventListener("mousemove", handleMouseMove);
		}
	}, [isLoading]);

	useFrame(({ camera, size }, delta) => {
		if (!(camera instanceof THREE.PerspectiveCamera)) {
			return;
		}

		const camTransitionConfig = camTransitionConfigRef.current;
		const camTransition = camTransitionRef.current;

		// Initiate camera transition
		if (pendingCamTransitionRef.current && camTransitionConfig && sceneState.introAnimDone) {
			const forward = new THREE.Vector3(0, 0, -1).applyQuaternion(camera.quaternion);
			camTransitionRef.current = {
				startPos: camera.position.clone(),
				endPos: camTransitionConfig.endPos.clone(),
				startFov: camera.fov,
				endFov: camTransitionConfig.endFov,
				startLookAt: camera.position.clone().add(forward.multiplyScalar(10)),
				endLookAt: camTransitionConfig.lookAt.clone(),
				progress: 0,
				toOrbit: camTransitionConfig.toOrbit,
			};

			enableParallaxRef.current = false;
			cameraStateRef.current.lookAt = camTransitionConfig.lookAt.clone();
			parallaxCameraTargetRef.current = camTransitionConfig.lookAt.clone();

			// Disable orbit controls if transitioning to inside the room
			if (orbitControlsRef.current && !camTransitionConfig.toOrbit) {
				orbitControlsRef.current.enabled = false;
			}

			pendingCamTransitionRef.current = false;
			camTransitionConfigRef.current = null;
			return;
		}

		// Animate camera transition
		if (camTransition) {
			camTransition.progress = Math.min(camTransition.progress + delta * 0.5, 1);
			const eased = easeInOutCubic(camTransition.progress);
			camera.position.lerpVectors(camTransition.startPos, camTransition.endPos, eased);
			camera.fov = lerp(camTransition.startFov, camTransition.endFov, eased);
			const lerpedLookAt = new THREE.Vector3().lerpVectors(
				camTransition.startLookAt,
				camTransition.endLookAt,
				eased,
			);
			camera.lookAt(lerpedLookAt);
			camera.updateProjectionMatrix();

			if (camTransition.progress >= 1) {
				// Enable orbit controls if transitioning to outside the room after transition animation is finished
				if (orbitControlsRef.current && camTransition.toOrbit) {
					orbitControlsRef.current.enabled = true;
				}

				// Enable parallax once the camera has finished transitioning
				enableParallaxRef.current = true;

				camTransitionRef.current = null;
			}
			return;
		}

		// Add parallax effect
		if (enableParallaxRef.current) {
			const baseLookAt = cameraStateRef.current.lookAt;

			const forward = new THREE.Vector3().subVectors(baseLookAt, camera.position).normalize();
			const right = new THREE.Vector3().crossVectors(forward, new THREE.Vector3(0, 1, 0)).normalize();

			const target = baseLookAt
				.clone()
				.addScaledVector(right, mouseTargetRef.current.x * PARALLAX_STRENGTH)
				.addScaledVector(new THREE.Vector3(0, 1, 0), -mouseTargetRef.current.y * PARALLAX_STRENGTH * 0.4);

			parallaxCameraTargetRef.current.lerp(target, Math.min(delta * PARALLAX_LERP_SPEED, 1));
			camera.lookAt(parallaxCameraTargetRef.current);
		}

		// Adjust camera configuration based on canvas size
		const { width, height } = size;
		const lastViewState = lastViewStateRef.current;
		if (lastViewState.width !== width || lastViewState.height !== height || lastViewState.cameraId !== camera.id) {
			lastViewStateRef.current = { width, height, cameraId: camera.id };
			camera.aspect = width / height;
			// Shift scene to the right by updating perspective camera view offset
			camera.setViewOffset(width * (1 + SCENE_RIGHT_SHIFT), height * (1 - SCENE_UP_SHIFT), 0, 0, width, height);

			// Adjust camera zoom based on screen size
			camera.zoom = THREE.MathUtils.clamp(
				Math.sqrt(width * height) / REFERENCE_SIZE,
				CAMERA_MIN_ZOOM,
				CAMERA_MAX_ZOOM,
			);
			camera.updateProjectionMatrix();
		}
	});

	return (
		<Fragment>
			<OrbitControls
				ref={(instance) => {
					orbitControlsRef.current = instance;
				}}
				enablePan={false}
				enableZoom={false}
				minPolarAngle={degToRad(10)}
				maxPolarAngle={degToRad(80)}
				target={ORBIT_TARGET}
				domElement={document.body}
			/>
		</Fragment>
	);
};
