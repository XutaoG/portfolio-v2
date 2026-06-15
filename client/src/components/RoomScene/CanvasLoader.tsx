import { CircleNotchIcon } from "@phosphor-icons/react";
import { useContext } from "react";
import { SceneStateContext } from "../../context";
import { useProgress } from "@react-three/drei";

export const CanvasLoader = () => {
	const { progress } = useProgress();
	const sceneStateContext = useContext(SceneStateContext);

	return (
		sceneStateContext?.isLoading && (
			<div className="fixed right-4 top-(--sidenav-top) z-200 flex items-center justify-center pointer-events-none">
				<div className="font-semibold text-nowrap flex items-center gap-4 p-4 rounded-lg bg-accent/10">
					<CircleNotchIcon size={24} weight="bold" className="animate-spin" />
					Loading Model ({Math.round(progress)}%)...
				</div>
			</div>
		)
	);
};
