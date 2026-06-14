import { CircleNotchIcon } from "@phosphor-icons/react";
import { useProgress } from "@react-three/drei";

export const RoomLoader = () => {
	const { active, progress } = useProgress();

	if (!active) return null;

	return (
		<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
			<div className="font-semibold text-nowrap flex items-center gap-4">
				<CircleNotchIcon size={24} weight="bold" className="animate-spin" /> {Math.round(progress)}%...
			</div>
		</div>
	);
};
