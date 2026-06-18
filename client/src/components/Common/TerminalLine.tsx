import { CheckCircleIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { twMerge } from "tailwind-merge";

interface TerminalLineProps {
	sequence: (string | number)[];
	onAnimationComplete?: () => void;
}

export const TerminalLine = ({ onAnimationComplete, sequence }: TerminalLineProps) => {
	const [isTypingFinished, setIsTypingFinsihed] = useState(false);

	return (
		<div className="font-medium flex items-start gap-2">
			<span className="text-primary">$</span>
			<span className={twMerge(`text-content/80 ${isTypingFinished && "text-success/80"}`)}>
				<TypeAnimation
					sequence={[...sequence, onAnimationComplete ?? (() => {}), () => setIsTypingFinsihed(true)]}
					cursor={false}
					speed={90}
				/>
			</span>
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
