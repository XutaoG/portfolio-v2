import { motion } from "framer-motion";
import { SideNavButton } from "./SideNavButton";

export const SideNav = () => {
	return (
		<motion.div
			className="flex flex-col"
			initial={{ opacity: 0, x: "100%" }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.3, ease: "easeOut" }}
		>
			<SideNavButton to="/" number="01" text="HOME" />
			<SideNavButton to="/about" number="02" text="ABOUT" />
			<SideNavButton to="/skills" number="03" text="SKILLS" />
			<SideNavButton to="/projects" number="04" text="PROJECTS" />
			<SideNavButton to="/contact" number="05" text="CONTACT" isLast />
		</motion.div>
	);
};
