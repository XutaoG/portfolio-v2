import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ProjectInfoPanelProps {
	className?: string;
	icon: ReactNode;
	title: string;
	children?: ReactNode;
}

export const ProjectInfoPanel = ({ className, icon, title, children }: ProjectInfoPanelProps) => {
	return (
		<div
			className={twMerge(
				`flex flex-col border border-content/20 p-4 gap-4 rounded-lg relative overflow-hidden z-0
				${className}`,
			)}
		>
			<div className="absolute -bottom-8 -right-8 w-1/2 h-1/2 rounded-full bg-accent/10 blur-[96px] -z-10" />
			<div className="flex items-center gap-4">
				{icon}
				<p className="font-medium text-nowrap">{title}</p>
			</div>
			{children}
		</div>
	);
};
