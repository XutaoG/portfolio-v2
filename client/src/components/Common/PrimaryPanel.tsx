import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface PrimaryPanelProps {
	className?: string;
	children?: ReactNode;
}

export const PrimaryPanel = ({ children, className }: PrimaryPanelProps) => {
	return (
		<div className="relative group mt-1.5 ml-1.5">
			<div className="absolute inset-0 rounded-lg border-2 border-primary diagonal-stripe-pattern z-0 opacity-50" />
			<div
				className={twMerge(`size-full border border-primary/60 p-4 sm:p-6 rounded-lg flex flex-col 
				gap-4 xs:gap-6 bg-base/50 group-hover:bg-base/70 backdrop-blur-xs relative overflow-hidden z-10 
				-translate-1.5 transition-all duration-300 ${className}`)}
			>
				<div
					className="absolute -bottom-8 -right-8 w-1/2 h-1/2 rounded-full 
					bg-primary/20 blur-[96px] group-hover:bg-primary/80 transition-colors duration-300"
				/>
				{children}
			</div>
		</div>
	);
};
