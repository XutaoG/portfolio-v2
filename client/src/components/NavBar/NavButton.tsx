import { NavLink } from "react-router";
import { Fragment } from "react/jsx-runtime";
import { twMerge } from "tailwind-merge";

interface NavButtonProps {
	text: string;
	to: string;
}

export const NavButton = ({ text, to }: NavButtonProps) => {
	return (
		<NavLink
			to={to}
			className={({ isActive }) =>
				twMerge(
					[
						"flex flex-col items-center gap-1 font-medium transition-colors duration-300",
						isActive ? "text-primary" : "",
					].join(" "),
				)
			}
		>
			{({ isActive }) => (
				<Fragment>
					{text}
					<div className="flex justify-center items-center h-1.5 aspect-square">
						<div
							className={twMerge(`h-0 aspect-square rounded-full transition-[height] duration-300 
							bg-primary ${isActive && "h-1.5"}`)}
						/>
					</div>
				</Fragment>
			)}
		</NavLink>
	);
};
