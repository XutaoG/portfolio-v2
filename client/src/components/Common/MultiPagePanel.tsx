import { useState, type ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface MultiPagePanelProps {
	children: ReactNode[];
	className?: string;
	infoStyles?: string;
}

export const MultiPagePanel = ({ children, className, infoStyles }: MultiPagePanelProps) => {
	const [currentPage, setCurrentPage] = useState(0);

	const pageSelectorsEl = children.map((_, i) => {
		return (
			<button
				key={i}
				aria-label={`View work history ${i + 1}`}
				type="button"
				className={twMerge(
					`rounded-full grow basis-0 bg-base/20 border-primary/50 border transition-colors duration-300 
					${i == currentPage && "bg-primary/80 border-primary/80"}`,
				)}
				onClick={() => setCurrentPage(i)}
			/>
		);
	});

	return (
		<div className={twMerge(`flex gap-4 ${className}`)}>
			<div className={twMerge(`grow ${infoStyles}`)}>{children[currentPage]}</div>
			{children.length > 1 && <div className="flex flex-col gap-1.5 w-2 shrink-0">{pageSelectorsEl}</div>}
		</div>
	);
};
