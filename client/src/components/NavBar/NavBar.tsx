import { useEffect, useRef } from "react";
import { NavButton } from "./NavButton";

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
		<nav ref={navRef} className="p-8 pb-0 sticky top-0 z-50 bg-base/50 backdrop-blur-md">
			<div className="flex justify-between items-center pb-2 border-b border-content/20">
				<p className="font-semibold">
					://
					<span className="text-primary">
						xutaogao.com<span className="ml-6 text-primary">&gt;_</span>
					</span>
				</p>
				<div className="flex gap-8">
					<NavButton to="/" text="HOME" />
					<NavButton to="/about" text="ABOUT" />
					<NavButton to="/skills" text="SKILLS" />
					<NavButton to="/projects" text="PROJECTS" />
					<NavButton to="/contact" text="CONTACT" />
				</div>
			</div>
		</nav>
	);
};
