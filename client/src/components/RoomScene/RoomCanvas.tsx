import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { RoomLoader } from "./RoomLoader";
import { RoomScene } from "./RoomScene";
import * as THREE from "three";
import { CAMERA_INITIAL_POSITION } from "../../data/constants";
import { Environment } from "@react-three/drei";

export const RoomCanvas = () => {
	return (
		<Canvas
			orthographic
			camera={{ position: CAMERA_INITIAL_POSITION, zoom: 50 }}
			shadows={{ type: THREE.PCFShadowMap }}
			gl={{
				toneMapping: THREE.ACESFilmicToneMapping,
				toneMappingExposure: 1,
				outputColorSpace: THREE.SRGBColorSpace,
			}}
		>
			<Environment preset="studio" backgroundIntensity={0.2} environmentIntensity={0.2} />
			<Suspense fallback={<RoomLoader />}>
				<RoomScene />
			</Suspense>
		</Canvas>
	);
};
