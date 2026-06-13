import { motion } from "framer-motion";
import { SideNavButton } from "./SideNavButton";
import { ABOUT_ROUTE, CONTACT_ROUTE, HOME_ROUTE, PROJECTS_ROUTE, SKILLS_ROUTE } from "../../routes";

export const SideNav = () => {
	return (
		<motion.div
			className="flex flex-col"
			initial={{ opacity: 0, x: "100%" }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.3, ease: "easeOut" }}
		>
			<SideNavButton to={`/${HOME_ROUTE}`} number="01" text="HOME" />
			<SideNavButton to={`/${ABOUT_ROUTE}`} number="02" text="ABOUT" />
			<SideNavButton to={`/${SKILLS_ROUTE}`} number="03" text="SKILLS" />
			<SideNavButton to={`/${PROJECTS_ROUTE}`} number="04" text="PROJECTS" />
			<SideNavButton to={`/${CONTACT_ROUTE}`} number="05" text="CONTACT" isLast />
		</motion.div>
	);
};
