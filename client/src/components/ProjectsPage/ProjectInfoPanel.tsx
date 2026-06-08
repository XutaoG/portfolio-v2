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
				`flex flex-col border border-content/20 p-4 gap-4 rounded-lg relative overflow-hidden 
				${className}`,
			)}
		>
			<div className="absolute -bottom-8 -right-8 w-1/2 aspect-square rounded-full bg-content/10 blur-[96px]" />
			<div className="flex items-center gap-2">
				{icon}
				<p className="font-semibold text-nowrap">{title}</p>
			</div>
			{children}
		</div>
	);
};
