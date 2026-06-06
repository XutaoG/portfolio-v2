import { TerminalLine } from "../Common/TerminalLine";

export const TerminalLoadingText = () => {
	return (
		<div className="flex flex-col gap-2">
			<TerminalLine>initializing...</TerminalLine>
			<TerminalLine>loading assets...</TerminalLine>
			<TerminalLine>compiling ideas...</TerminalLine>
			<TerminalLine>starting services...</TerminalLine>
			<TerminalLine>system ready, welcome to my world</TerminalLine>
			<div className="mt-1 h-6 w-2 bg-primary" />
		</div>
	);
};
