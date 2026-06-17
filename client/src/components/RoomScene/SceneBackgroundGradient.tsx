import { Fragment, useContext } from "react";
import { SceneStateContext } from "../../context";
import { useLocation } from "react-router";
import { useProgress } from "@react-three/drei";
import { AnimatePresence, motion } from "framer-motion";

export const SceneBackgroundGradient = () => {
	const location = useLocation();
	const topLevelPath = location.pathname.split("/")[1];

	const { progress } = useProgress();
	const sceneStateContext = useContext(SceneStateContext)!;

	return (
		<Fragment>
			{sceneStateContext.isLoading || (
				<motion.div
					initial={{ opacity: 0, width: 0 }}
					animate={{ opacity: 0.5, width: "50%" }}
					transition={{ duration: 1, ease: "easeOut" }}
					className="bg-primary absolute top-1/2 left-3/5 -translate-1/2 aspect-square rounded-full blur-[256px]"
				/>
			)}
			<AnimatePresence>
				{sceneStateContext.isLoading && topLevelPath === "" && (
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
		</Fragment>
	);
};
