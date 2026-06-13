import "./App.css";
import { Outlet, useLocation } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import { PageContainer } from "./components/Common/PageContainer";
import { NavBar } from "./components/NavBar/NavBar";
import { Suspense, useState } from "react";
import { ABOUT_ROUTE, CONTACT_ROUTE, HOME_ROUTE, PROJECTS_ROUTE, SKILLS_ROUTE } from "./routes";
import { RoomScene } from "./components/RoomScene/RoomScene";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { RoomLoader } from "./components/RoomScene/RoomLoader";

const navOrder = [HOME_ROUTE, ABOUT_ROUTE, SKILLS_ROUTE, PROJECTS_ROUTE, CONTACT_ROUTE];

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
		<div className="flex flex-col w-screen min-h-screen relative overflow-x-clip">
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
			<div className="absolute inset-0 bg-base -z-10" id="canvas-container">
				<Canvas
					shadows={{ type: THREE.PCFShadowMap }}
					gl={{
						toneMapping: THREE.ACESFilmicToneMapping,
						toneMappingExposure: 1,
						outputColorSpace: THREE.SRGBColorSpace,
					}}
				>
					<Suspense fallback={<RoomLoader />}>
						<RoomScene />
					</Suspense>
				</Canvas>
			</div>
		</div>
	);
};
