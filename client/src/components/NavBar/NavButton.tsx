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
						"flex flex-col items-center gap-1 font-medium transition-colors duration-300 group",
						isActive ? "text-primary active" : "hover:text-primary",
					].join(" "),
				)
			}
			onClick={(e) => {
				if (e.currentTarget.classList.contains("active")) e.preventDefault();
			}}
		>
			{({ isActive }) => (
				<Fragment>
					{text}
					<div className="flex justify-center items-center h-1 aspect-square w-full">
						<div
							className={twMerge(`h-0 w-0 rounded-full transition-all duration-300 bg-primary 
							${isActive ? "h-1 w-full aspect-auto rounded-none" : "group-hover:h-1 group-hover:w-1"}`)}
						/>
					</div>
				</Fragment>
			)}
		</NavLink>
	);
};
