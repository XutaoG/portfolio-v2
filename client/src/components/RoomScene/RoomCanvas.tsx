import { Canvas } from "@react-three/fiber";
import { Fragment, useEffect, useRef, useState } from "react";
import { RoomScene } from "./RoomScene";
import * as THREE from "three";
import { CAMERA_INITIAL_POSITION } from "../../data/constants";
import { Environment, Preload } from "@react-three/drei";
import { CameraControl } from "./CameraControl";
import { SceneLoadingToast } from "./SceneLoadingToast";
import { SceneStateContext } from "../../context";
import { SceneBackgroundGradient } from "./SceneBackgroundGradient";
import { useWebGLSupport } from "../../hooks/useWebGLSupport";

const RESIZE_DEBOUNCE_TIME = 150;

export const RoomCanvas = () => {
	const webGLSupported = useWebGLSupport();
	const [isSceneLoading, setIsSceneLoading] = useState(true);
	const [isResizing, setIsResizing] = useState(false);
	const resizeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	useEffect(() => {
		const handleResize = () => {
			setIsResizing(true);
			if (resizeTimerRef.current !== null) {
				clearTimeout(resizeTimerRef.current);
			}
			resizeTimerRef.current = setTimeout(() => {
				setIsResizing(false);
				resizeTimerRef.current = null;
			}, RESIZE_DEBOUNCE_TIME);
		};

		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
			if (resizeTimerRef.current !== null) {
				clearTimeout(resizeTimerRef.current);
			}
		};
	}, []);

	if (!webGLSupported) {
		return (
			<div className="absolute inset-0 flex justify-center items-end pb-6">
				<p className="text-content/80">
					3D scene unavailable — WebGL is not supported or is disabled in your browser.
				</p>
			</div>
		);
	}

	return (
		<Fragment>
			<SceneStateContext.Provider value={{ isLoading: isSceneLoading, setIsLoading: setIsSceneLoading }}>
				<SceneBackgroundGradient />
				<SceneLoadingToast />
				<Canvas
					camera={{ position: CAMERA_INITIAL_POSITION, fov: 30 }}
					shadows={{ type: THREE.PCFShadowMap }}
					frameloop={isResizing ? "never" : "always"}
					gl={{
						toneMapping: THREE.ACESFilmicToneMapping,
						toneMappingExposure: 1.15,
						outputColorSpace: THREE.SRGBColorSpace,
					}}
				>
					<Environment preset="studio" environmentIntensity={0.12} />
					<CameraControl />
					<RoomScene />
					<Preload all />
				</Canvas>
			</SceneStateContext.Provider>
		</Fragment>
	);
};
