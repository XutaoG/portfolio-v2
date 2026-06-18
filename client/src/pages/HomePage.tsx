import { Link } from "react-router";
import { Helmet } from "react-helmet-async";
import { Button } from "../components/Common/Button";
import { QuickSocial } from "../components/HomePage/QuickSocial";
import { TerminalLoadingText } from "../components/HomePage/TerminalLoadingText";
import { ABOUT_ROUTE } from "../routes";
import { useState } from "react";
import { motion } from "framer-motion";

export const HomePage = () => {
	const [isTerminalLoadingCompleted, setIsTerminalLoadingCompleted] = useState(false);

	return (
		<div className="flex flex-col items-start justify-between gap-8 sm:gap-24 min-h-full">
			<Helmet>
				<title>Xutao Gao</title>
				<meta
					name="description"
					content="Xutao Gao — Software Engineer, Builder, Problem Solver. Explore a portfolio of full-stack, cloud, and interactive 3D web projects."
				/>
			</Helmet>
			<TerminalLoadingText
				isTerminalLoadingComplete={isTerminalLoadingCompleted}
				setTerminalLoadingCompleted={() => setIsTerminalLoadingCompleted(true)}
			/>
			{isTerminalLoadingCompleted && (
				<motion.div
					initial={{ height: 0, flexGrow: 0 }}
					animate={{ height: "auto", flexGrow: 1 }}
					transition={{ duration: 0.3, ease: "easeOut" }}
					className="overflow-hidden"
				>
					<div className="flex flex-col gap-4 sm:gap-6 items-start">
						{/* Name */}
						<h1 className="text-7xl sm:text-8xl font-medium font-chakra leading-14 sm:leading-20 text-shadow-lg">
							XUTAO
							<br />
							<span className="font-semibold text-primary">GAO_</span>
						</h1>
						{/* Title */}
						<p className="text-primary font-semibold text-lg rounded-sm bg-base/10 backdrop-blur-xs pr-2">
							Software Engineer.
							<br />
							Builder.
							<br />
							Problem Solver.
						</p>
						{/* Introduction */}
						<p className="text-content/80 max-w-100 rounded-sm bg-base/10 backdrop-blur-xs">
							Every project begins with curiosity. This portfolio is a collection of where mine has led
							me.
						</p>
						<Link aria-label="Go to about page" to={`/${ABOUT_ROUTE}`}>
							<Button aria-label="Learn more about Xutao">ABOUT ME</Button>
						</Link>
					</div>
				</motion.div>
			)}
			{/* Socials */}
			<div className="bg-base/20 backdrop-blur-xs">
				<QuickSocial />
			</div>
		</div>
	);
};
