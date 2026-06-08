import { DiamondIcon } from "@phosphor-icons/react";
import type { ReactNode } from "react";

interface ListItemProps {
	children: ReactNode;
}

export const ListItem = ({ children }: ListItemProps) => {
	return (
		<div className="flex items-start gap-2">
			<DiamondIcon size={16} weight="bold" color="var(--color-primary)" className="shrink-0 opacity-60 mt-1" />
			{children}
		</div>
	);
};
