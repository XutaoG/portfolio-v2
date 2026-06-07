import type { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	children?: string;
}

export const Button = ({ className, children, ...rest }: ButtonProps) => {
	return (
		<button
			className={twMerge(`px-6 py-4 gap-3 border-2 border-primary rounded-sm 
				font-semibold flex items-center ${className}`)}
			{...rest}
		>
			<span className="text-primary">$</span> {children}
		</button>
	);
};
