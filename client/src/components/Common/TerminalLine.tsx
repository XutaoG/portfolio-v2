interface TerminalLineProps {
	children: string;
}

export const TerminalLine = ({ children }: TerminalLineProps) => {
	return (
		<p className="text-content/80 font-medium">
			<span className="text-primary">$</span> {children}
		</p>
	);
};
