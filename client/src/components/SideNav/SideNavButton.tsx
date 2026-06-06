import { NavLink } from "react-router";
import { Fragment } from "react/jsx-runtime";

interface SideNavButtonProps {
	number: string;
	text: string;
	to: string;
	isLast?: boolean;
}

export const SideNavButton = ({ number, to, text, isLast }: SideNavButtonProps) => {
	return (
		<NavLink to={to} className="flex gap-3">
			{({ isActive }) => (
				<Fragment>
					<div className="flex flex-col items-center">
						{/* Circle */}
						<div
							className={`w-6 aspect-square rounded-full border-2 p-1.5 bg-base 
								${isActive ? "border-primary" : "border-content/40"}`}
						>
							<div
								className={`size-full rounded-full 
									${isActive ? "bg-primary" : "bg-content/40"}`}
							/>
						</div>
						{/* Vertical dashed line */}
						{isLast || (
							<div
								className={`h-28 border-l border-dashed 
									${isActive ? "border-primary" : "border-content/40"}`}
							/>
						)}
					</div>

					{/* Number + Text (ex: 01 HOME) */}
					<div className="flex flex-col items-start font-semibold -translate-y-3">
						<p className={isActive ? "text-primary" : "text-content/40"}>{number}</p>
						<p className={isActive ? "text-content" : "text-content/40"}>{text}</p>
					</div>
				</Fragment>
			)}
		</NavLink>
	);
};
