import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface PrimaryPanelProps {
	className?: string;
	children?: ReactNode;
}

export const PrimaryPanel = ({ children, className }: PrimaryPanelProps) => {
	return (
		<div
			className={twMerge(`border border-primary/40 p-6 rounded-lg flex flex-col gap-6 
				bg-base/50 backdrop-blur-xs relative overflow-hidden ${className}`)}
		>
			{children}
			<div className="absolute -bottom-8 -right-8 size-32 rounded-full bg-primary/20 blur-[96px]" />
		</div>
	);
};
