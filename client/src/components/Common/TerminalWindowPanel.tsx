import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { TerminalLine } from "./TerminalLine";

interface TerminalWindowPanelProps {
	title: string;
	command: string;
	className?: string;
	children?: ReactNode;
}

export const TerminalWindowPanel = ({ className, children, command, title }: TerminalWindowPanelProps) => {
	return (
		<div className={twMerge(`border border-content/20 rounded-lg overflow-hidden flex flex-col ${className}`)}>
			<div className="flex justify-between items-center gap-6 bg-neutral px-4 py-2 shrink-0 relative overflow-hidden">
				<div className="absolute -top-8 -left-8 size-32 rounded-full bg-content/20 blur-[96px]" />
				<div className="absolute -bottom-8 -right-8 size-32 rounded-full bg-content/20 blur-[96px]" />

				<div className="flex gap-3">
					<div className="size-3.5 rounded-full bg-radial-[at_25%_25%] from-red-300 to-red-600 to-75%" />
					<div className="size-3.5 rounded-full bg-radial-[at_25%_25%] from-yellow-300 to-yellow-600 to-75%" />
					<div className="size-3.5 rounded-full bg-radial-[at_25%_25%] from-green-300 to-green-600 to-75%" />
				</div>
				<p className="font-semibold text-primary">&gt;_ {title}</p>
			</div>
			<div className="p-4 sm:p-6 flex flex-col gap-4 sm:gap-6 overflow-y-auto bg-base/80 backdrop-blur-xs h-full">
				<TerminalLine sequence={[command]} />
				{children}
			</div>
		</div>
	);
};
