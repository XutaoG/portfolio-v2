import { NavLink } from "react-router";
import { Fragment } from "react/jsx-runtime";
import { twMerge } from "tailwind-merge";

interface SideNavButtonProps {
	number: string;
	text: string;
	to: string;
	isLast?: boolean;
}

export const SideNavButton = ({ number, to, text, isLast }: SideNavButtonProps) => {
	return (
		<NavLink
			to={to}
			className="flex gap-3"
			onClick={(e) => {
				if (e.currentTarget.classList.contains("active")) e.preventDefault();
			}}
		>
			{({ isActive }) => (
				<Fragment>
					<div className="flex flex-col items-center">
						{/* Circle */}
						<div className="size-6 flex justify-center items-center">
							<div
								className={twMerge(`w-5 aspect-square rounded-xl border-2 p-1 bg-base rotate-0
								transition-all duration-300 border-content/40 
								${isActive && "border-primary rounded-sm p-1.5 w-6 rotate-45"}`)}
							>
								<div
									className={`size-full rounded-xl ${isActive ? "bg-primary rounded-xs" : "bg-content/40"}`}
								/>
							</div>
						</div>
						{/* Vertical dashed line */}
						{isLast || (
							<div
								className={`h-28 w-0.5 transition-colors duration-300
								bg-linear-to-b ${isActive ? "from-primary to-content/40" : "from-content/40 to-content/40"}`}
							/>
						)}
					</div>

					{/* Number + Text (ex: 01 HOME) */}
					<div className="flex flex-col items-start font-semibold -translate-y-3">
						<p
							className={`transition-colors duration-300 ${isActive ? "text-primary" : "text-content/40"}`}
						>
							{number}
						</p>
						<p
							className={`transition-colors duration-300 ${isActive ? "text-content" : "text-content/40"}`}
						>
							{text}
						</p>
					</div>
				</Fragment>
			)}
		</NavLink>
	);
};
