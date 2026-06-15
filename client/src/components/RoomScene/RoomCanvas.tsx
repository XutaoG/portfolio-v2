import { Canvas } from "@react-three/fiber";
import { Fragment, useState } from "react";
import { RoomScene } from "./RoomScene";
import * as THREE from "three";
import { CAMERA_INITIAL_POSITION } from "../../data/constants";
import { Environment, Preload } from "@react-three/drei";
import { CameraControl } from "./CameraControl";
import { CanvasLoader } from "./CanvasLoader";
import { SceneStateContext } from "../../context";

export const RoomCanvas = () => {
	const [isSceneLoading, setIsSceneLoading] = useState(true);

	return (
		<Fragment>
			<SceneStateContext.Provider value={{ isLoading: isSceneLoading, setIsLoading: setIsSceneLoading }}>
				<CanvasLoader />
				<Canvas
					camera={{ position: CAMERA_INITIAL_POSITION, fov: 30 }}
					shadows={{ type: THREE.PCFShadowMap }}
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
