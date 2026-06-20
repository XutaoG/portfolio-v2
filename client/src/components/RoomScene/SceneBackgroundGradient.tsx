import { Fragment, useContext } from "react";
import { SceneStateContext } from "../../context";
import { useLocation } from "react-router";
import { useProgress } from "@react-three/drei";
import { AnimatePresence, motion } from "framer-motion";
import { HOME_ROUTE } from "../../routes";
import { ArrowsOutCardinalIcon } from "@phosphor-icons/react";
import { useMinWidth } from "../../hooks/useMinWidth";

export const SceneBackgroundGradient = () => {
	const location = useLocation();
	const topLevelPath = location.pathname.split("/")[1];
	const isMd = useMinWidth("md");

	const { progress } = useProgress();
	const sceneStateContext = useContext(SceneStateContext)!;

	return (
		<Fragment>
			{sceneStateContext.isLoading || (
				<motion.div
					initial={{ opacity: 0, width: 0 }}
					animate={{ opacity: 0.5, width: "50%" }}
					transition={{ duration: 1, ease: "easeOut" }}
					className="bg-primary/50 absolute top-1/2 left-3/5 -translate-1/2 aspect-square rounded-full blur-[256px]"
				/>
			)}
			<AnimatePresence>
				{sceneStateContext.isLoading && topLevelPath === HOME_ROUTE && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3, ease: "easeOut" }}
						className="absolute top-1/2 left-3/5 -translate-1/2 w-1/2 aspect-square flex flex-col gap-2 justify-center items-center pointer-events-none"
					>
						<p className="animate-bounce text-lg font-medium">Supercharging... {Math.round(progress)}%</p>
						<div className="border-2 border-primary rounded-sm h-10 w-64 flex p-2 overflow-hidden">
							<div className="loading-bar-pattern h-full" style={{ width: `${Math.round(progress)}%` }} />
						</div>
					</motion.div>
				)}
			</AnimatePresence>
			<AnimatePresence>
				{!sceneStateContext.isLoading && topLevelPath === HOME_ROUTE && isMd && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3, ease: "easeOut" }}
						className="absolute top-4/5 left-3/5 -translate-1/2 z-10 text-lg py-0.5 px-1 rounded-sm 
						bg-base/5 backdrop-blur-sm flex gap-2 items-center pointer-events-none"
					>
						<ArrowsOutCardinalIcon size={24} weight="bold" />
						Drag to explore
					</motion.div>
				)}
			</AnimatePresence>
		</Fragment>
	);
};
