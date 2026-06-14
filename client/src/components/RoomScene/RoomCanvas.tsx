import { Canvas } from "@react-three/fiber";
import { Fragment, Suspense } from "react";
import { RoomLoader } from "./RoomLoader";
import { RoomScene } from "./RoomScene";
import * as THREE from "three";
import { CAMERA_INITIAL_POSITION } from "../../data/constants";
import { Environment } from "@react-three/drei";
import { CameraControl } from "./CameraControl";

export const RoomCanvas = () => {
	return (
		<Fragment>
			<Canvas
				camera={{ position: CAMERA_INITIAL_POSITION, fov: 30 }}
				shadows={{ type: THREE.PCFShadowMap }}
				gl={{
					toneMapping: THREE.ACESFilmicToneMapping,
					toneMappingExposure: 1,
					outputColorSpace: THREE.SRGBColorSpace,
				}}
			>
				<Environment preset="studio" backgroundIntensity={0.2} environmentIntensity={0.2} />
				<Suspense fallback={null}>
					<CameraControl />
					<RoomScene />
				</Suspense>
			</Canvas>
			<RoomLoader />
		</Fragment>
	);
};
