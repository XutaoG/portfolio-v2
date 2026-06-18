import { useEffect, useState } from "react";
import { TerminalLine } from "../Common/TerminalLine";

export interface TerminalLoadingTextProps {
	isTerminalLoadingComplete: boolean;
	setTerminalLoadingCompleted: () => void;
}

export const TerminalLoadingText = ({
	isTerminalLoadingComplete,
	setTerminalLoadingCompleted: terminalLoadingCompleted,
}: TerminalLoadingTextProps) => {
	const [linesCompleted, setLinesCompleted] = useState(0);

	const terminalLines = [
		["initializing...", 100, "initializing"],
		["loading assets...", 100, "loading assets"],
		["compiling ideas...", 100, "compiling ideas"],
		["starting services...", 100, "starting services"],
		["system ready, welcome to my world"],
	];

	useEffect(() => {
		if (linesCompleted >= terminalLines.length && !isTerminalLoadingComplete) {
			terminalLoadingCompleted();
		}
	}, [linesCompleted, isTerminalLoadingComplete, terminalLoadingCompleted, terminalLines.length]);

	const terminalLinesElements = terminalLines.map((line, i) => {
		return (
			<div key={i}>
				{linesCompleted >= i && (
					<TerminalLine
						sequence={line}
						onAnimationComplete={() => {
							setLinesCompleted(i + 1);
						}}
					/>
				)}
			</div>
		);
	});

	return (
		<div className="flex flex-col gap-2 items-start bg-base/20 backdrop-blur-xs">
			{terminalLinesElements}
			<div className="h-6 mt-1">
				{linesCompleted >= terminalLines.length && <div className="h-full w-2 bg-primary animate-blink" />}
			</div>
		</div>
	);
};
