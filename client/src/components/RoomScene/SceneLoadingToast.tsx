import { CircleNotchIcon } from "@phosphor-icons/react";
import { useContext } from "react";
import { createPortal } from "react-dom";
import { SceneStateContext } from "../../context";
import { useProgress } from "@react-three/drei";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router";

export const SceneLoadingToast = () => {
	const location = useLocation();
	const topLevelPath = location.pathname.split("/")[1];

	const { progress } = useProgress();
	const sceneStateContext = useContext(SceneStateContext)!;

	return createPortal(
		<div
			className="fixed right-(--page-container-margin-size) top-(--sidenav-top) z-60 
			flex items-center justify-center pointer-events-none"
		>
			<AnimatePresence>
				{sceneStateContext.isLoading && topLevelPath !== "" && (
					<motion.div
						initial={{ y: -200 }}
						animate={{ y: 0 }}
						exit={{ y: -200 }}
						transition={{ duration: 0.3, ease: "easeOut" }}
						className="font-semibold text-nowrap flex items-center gap-4 p-4 rounded-lg bg-accent/20 backdrop-blur-sm"
					>
						<CircleNotchIcon size={24} weight="bold" className="animate-spin" />
						Loading Model ({Math.round(progress)}%)...
					</motion.div>
				)}
			</AnimatePresence>
		</div>,
		document.body,
	);
};
