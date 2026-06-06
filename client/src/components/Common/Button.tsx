import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children?: string;
}

export const Button = ({ children, ...rest }: ButtonProps) => {
	return (
		<button
			className="px-6 py-4 gap-3 border-2 border-primary rounded-sm 
				font-semibold flex items-center"
			{...rest}
		>
			<span className="text-primary">$</span> {children}
		</button>
	);
};
