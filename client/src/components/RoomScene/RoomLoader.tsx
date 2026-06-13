import { CircleNotchIcon } from "@phosphor-icons/react";
import { Html, useProgress } from "@react-three/drei";

export const RoomLoader = () => {
	const { progress } = useProgress();

	return (
		<Html center>
			<div className="font-semibold text-nowrap flex items-center gap-4">
				<CircleNotchIcon size={24} weight="bold" className="animate-spin" /> {Math.round(progress)}%...
			</div>
		</Html>
	);
};
