import { DiamondIcon } from "@phosphor-icons/react";
import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ListItemProps {
	className?: string;
	children: ReactNode;
}

export const ListItem = ({ className, children }: ListItemProps) => {
	return (
		<div className={twMerge(`flex items-start gap-2 ${className}`)}>
			<DiamondIcon size={16} weight="bold" color="var(--color-primary)" className="shrink-0 opacity-60 mt-1" />
			{children}
		</div>
	);
};
