import { SideNavButton } from "./SideNavButton";

export const SideNav = () => {
	return (
		<div className="flex flex-col">
			<SideNavButton to="/" number="01" text="HOME" />
			<SideNavButton to="/about" number="02" text="ABOUT" />
			<SideNavButton to="/skills" number="03" text="SKILLS" />
			<SideNavButton to="/projects" number="04" text="PROJECTS" />
			<SideNavButton to="/contact" number="05" text="CONTACT" isLast />
		</div>
	);
};
