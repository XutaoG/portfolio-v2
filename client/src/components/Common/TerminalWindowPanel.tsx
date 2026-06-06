import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface TerminalWindowPanelProps {
	title: string;
	command: string;
	className?: string;
	children?: ReactNode;
}

export const TerminalWindowPanel = ({ className, children, command, title }: TerminalWindowPanelProps) => {
	return (
		<div className={twMerge(`border border-primary/80 rounded-lg overflow-hidden flex flex-col ${className}`)}>
			<div className="flex justify-between items-center gap-6 bg-neutral px-4 py-2 relative overflow-hidden">
				<div className="absolute -top-8 -left-8 size-32 rounded-full bg-content/20 blur-[96px]" />
				<div className="absolute -bottom-8 -right-8 size-32 rounded-full bg-content/20 blur-[96px]" />

				<div className="flex gap-3">
					<div className="size-3 rounded-full bg-error" />
					<div className="size-3 rounded-full bg-warning" />
					<div className="size-3 rounded-full bg-success" />
				</div>
				<p className="font-semibold text-primary">&gt;_ {title}</p>
			</div>
			<div className="p-6 flex flex-col gap-6 overflow-scroll">
				<p>
					<span className="text-primary">$</span> {command}
				</p>
				{children}
			</div>
		</div>
	);
};
