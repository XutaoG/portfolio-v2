import "./App.css";
import { Outlet, useLocation } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import { PageContainer } from "./components/Common/PageContainer";
import { NavBar } from "./components/NavBar/NavBar";
import { useState } from "react";

const navOrder = ["", "about", "skills", "projects", "contact"];

const pageVariants = {
	initial: (direction: number) => ({
		opacity: 0,
		y: direction >= 0 ? "100%" : "-100%",
	}),
	animate: {
		opacity: 1,
		y: 0,
	},
	exit: (direction: number) => ({
		opacity: 0,
		y: direction >= 0 ? "-100%" : "100%",
	}),
};

export const App = () => {
	const location = useLocation();
	const topLevelPath = location.pathname.split("/")[1];

	const [navState, setNavState] = useState({ prevPath: topLevelPath, direction: 1 });

	if (navState.prevPath !== topLevelPath) {
		const prevIndex = navOrder.indexOf(navState.prevPath);
		const currIndex = navOrder.indexOf(topLevelPath);
		setNavState({ prevPath: topLevelPath, direction: currIndex >= prevIndex ? 1 : -1 });
	}

	return (
		<div className="flex flex-col w-screen min-h-screen bg-base relative overflow-x-clip">
			<NavBar />
			<PageContainer>
				<AnimatePresence mode="wait" custom={navState.direction}>
					<motion.div
						className="h-full relative"
						key={topLevelPath}
						custom={navState.direction}
						variants={pageVariants}
						initial="initial"
						animate="animate"
						exit="exit"
						transition={{ duration: 0.3, ease: "easeOut" }}
					>
						<Outlet />
					</motion.div>
				</AnimatePresence>
			</PageContainer>
		</div>
	);
};
