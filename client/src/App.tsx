import "./App.css";
import { Outlet, useLocation } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import { PageContainer } from "./components/Common/PageContainer";
import { NavBar } from "./components/NavBar/NavBar";

export const App = () => {
	const location = useLocation();
	const topLevelPath = location.pathname.split("/")[1];

	return (
		<div className="flex flex-col w-screen min-h-screen bg-base relative overflow-x-hidden">
			<NavBar />
			<PageContainer>
				<AnimatePresence mode="wait">
					<motion.div
						className="h-full relative"
						key={topLevelPath}
						initial={{ opacity: 0, y: "100%" }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: "-100%" }}
						transition={{ duration: 0.3, ease: "easeOut" }}
					>
						<Outlet />
					</motion.div>
				</AnimatePresence>
			</PageContainer>
		</div>
	);
};
