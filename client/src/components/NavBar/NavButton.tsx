import { NavLink } from "react-router";
import { Fragment } from "react/jsx-runtime";

interface NavButtonProps {
	text: string;
	to: string;
}

export const NavButton = ({ text, to }: NavButtonProps) => {
	return (
		<NavLink
			to={to}
			className={({ isActive }) =>
				["flex flex-col items-center gap-1 font-medium", isActive ? "text-primary" : ""].join(" ")
			}
		>
			{({ isActive }) => (
				<Fragment>
					{text}
					{isActive && <div className="h-1 aspect-square rounded-full bg-primary" />}
				</Fragment>
			)}
		</NavLink>
	);
};
