import { useEffect, useRef } from "react";
import { NavButton } from "./NavButton";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export const NavBar = () => {
	const navRef = useRef<HTMLElement>(null);

	useEffect(() => {
		if (!navRef.current) return;

		const observer = new ResizeObserver(([entry]) => {
			const height = entry.borderBoxSize[0]?.blockSize ?? entry.contentRect.height;
			document.documentElement.style.setProperty("--nav-height", `${height}px`);
		});

		observer.observe(navRef.current);
		return () => observer.disconnect();
	}, []);

	return (
		<motion.nav
			ref={navRef}
			className="p-8 pb-0 sticky top-0 z-50 bg-base/50 backdrop-blur-md"
			initial={{ opacity: 0, y: "-100%" }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.3, ease: "easeOut" }}
		>
			<div className="flex justify-between items-center pb-2 border-b border-content/20">
				<p className="font-semibold">
					://
					<TypeAnimation className="text-primary" sequence={["xutaogao.com"]} speed={30} />
					<span className="ml-6 text-primary">&gt;_</span>
				</p>
				<div className="flex gap-8">
					<NavButton to="/" text="HOME" />
					<NavButton to="/about" text="ABOUT" />
					<NavButton to="/skills" text="SKILLS" />
					<NavButton to="/projects" text="PROJECTS" />
					<NavButton to="/contact" text="CONTACT" />
				</div>
			</div>
		</motion.nav>
	);
};
