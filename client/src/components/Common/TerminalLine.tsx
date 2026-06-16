import { CheckCircleIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

interface TerminalLineProps {
	sequence: (string | number)[];
	onAnimationComplete?: () => void;
}

export const TerminalLine = ({ onAnimationComplete, sequence }: TerminalLineProps) => {
	const [isTypingFinished, setIsTypingFinsihed] = useState(false);

	return (
		<div className="text-content/80 font-medium flex items-start gap-2">
			<span className="text-primary">$</span>
			<TypeAnimation
				sequence={[...sequence, onAnimationComplete ?? (() => {}), () => setIsTypingFinsihed(true)]}
				cursor={false}
				speed={70}
			/>
			{isTypingFinished && (
				<CheckCircleIcon
					size={18}
					weight="fill"
					color="var(--color-success)"
					className="self-center shrink-0 hidden sm:block"
				/>
			)}
		</div>
	);
};
