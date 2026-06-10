import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface PrimaryPanelProps {
	className?: string;
	children?: ReactNode;
}

export const PrimaryPanel = ({ children, className }: PrimaryPanelProps) => {
	return (
		<div className="relative group">
			<div className="absolute inset-0 bg-primary/20 rounded-lg blur-[1px] z-0" />
			<div
				className={twMerge(`size-full border border-primary/60 p-6 rounded-lg flex flex-col gap-6 
				bg-base backdrop-blur-xs relative overflow-hidden z-10 
				-translate-2 transition-transform duration-300 ${className}`)}
			>
				<div className="absolute -bottom-8 -right-8 w-1/2 aspect-square rounded-full bg-primary/20 blur-[96px] group-hover:bg-primary/60" />
				{children}
			</div>
		</div>
	);
};
