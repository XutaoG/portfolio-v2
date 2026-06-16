import { Fragment, useEffect, useRef, useState } from "react";
import { NavButton } from "./NavButton";
import { TypeAnimation } from "react-type-animation";
import { AnimatePresence, motion } from "framer-motion";
import { ABOUT_ROUTE, CONTACT_ROUTE, HOME_ROUTE, PROJECTS_ROUTE, SKILLS_ROUTE } from "../../routes";
import { useMinWidth } from "../../hooks/useMinWidth";
import { ListIcon } from "@phosphor-icons/react";
import { useLocation } from "react-router";

export const NavBar = () => {
	const useMd = useMinWidth("md");
	const [prevUseMd, setPrevUseMd] = useState(useMd);

	const location = useLocation();
	const topLevelPath = location.pathname.split("/")[1];
	const [prevTopLevelPath, setPrevTopLevelPath] = useState(topLevelPath);

	const navRef = useRef<HTMLElement>(null);
	const [showMobileNavBar, setShowMobileNavBar] = useState(false);

	if (useMd !== prevUseMd || prevTopLevelPath !== topLevelPath) {
		setPrevUseMd(useMd);
		setPrevTopLevelPath(topLevelPath);
		if (!useMd) {
			setShowMobileNavBar(false);
		}
	}

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
		<Fragment>
			<motion.nav
				ref={navRef}
				className="p-8 pb-0 sticky top-0 z-50 bg-base/50 backdrop-blur-md"
				initial={{ opacity: 0, y: "-100%" }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.3, ease: "easeOut" }}
			>
				<div className="flex justify-between items-center pb-2 border-b border-content/20">
					<p className="font-semibold h-8">
						://
						<TypeAnimation className="text-primary" sequence={["xutaogao.com"]} speed={30} />
						<span className="ml-6 text-primary">&gt;_</span>
					</p>
					<div className="gap-8 hidden md:flex">
						<NavButton to={`/${HOME_ROUTE}`} text="HOME" />
						<NavButton to={`/${ABOUT_ROUTE}`} text="ABOUT" />
						<NavButton to={`/${SKILLS_ROUTE}`} text="SKILLS" />
						<NavButton to={`/${PROJECTS_ROUTE}`} text="PROJECTS" />
						<NavButton to={`/${CONTACT_ROUTE}`} text="CONTACT" />
					</div>
					<button className="flex md:hidden" onClick={() => setShowMobileNavBar((val) => !val)}>
						<ListIcon size={32} weight="bold" />
					</button>
				</div>
			</motion.nav>
			<AnimatePresence>
				{showMobileNavBar && !useMd && (
					<motion.div
						className="absolute top-(--nav-height) mx-8 mt-4 inset-x-0 bg-base/50 backdrop-blur-md 
						z-50 overflow-hidden border border-content/20 rounded-lg"
						initial={{ height: 0 }}
						animate={{ height: "auto" }}
						exit={{ height: 0 }}
						transition={{ duration: 0.3, ease: "easeOut" }}
					>
						<div className="flex flex-col gap-4 items-start p-4">
							<NavButton to={`/${HOME_ROUTE}`} text="HOME" />
							<NavButton to={`/${ABOUT_ROUTE}`} text="ABOUT" />
							<NavButton to={`/${SKILLS_ROUTE}`} text="SKILLS" />
							<NavButton to={`/${PROJECTS_ROUTE}`} text="PROJECTS" />
							<NavButton to={`/${CONTACT_ROUTE}`} text="CONTACT" />
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</Fragment>
	);
};
