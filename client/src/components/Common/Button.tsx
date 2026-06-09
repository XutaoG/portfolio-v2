import { useState, type ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	children?: string;
}

export const Button = ({ className, children, disabled, ...rest }: ButtonProps) => {
	const [isMouseHover, setIsMouseHover] = useState(false);

	return (
		<button
			className={`relative transiton-transform duration-300 disabled:cursor-not-allowed 
			${disabled || "active:translate-y-1"} ${className}`}
			onMouseEnter={() => setIsMouseHover(true)}
			onMouseLeave={() => setIsMouseHover(false)}
			disabled={disabled}
			{...rest}
		>
			<div className="absolute inset-0 rounded-sm bg-primary/20" />
			<div
				className={twMerge(`px-6 py-3 gap-3 border border-primary rounded-sm bg-base
				font-semibold flex items-center relative overflow-hidden transition-transform duration-300
				z-10 ${disabled && "border-primary/40"} ${isMouseHover && "-translate-1.5"}`)}
			>
				<div
					className={twMerge(
						`absolute top-1/2 left-1/2 -translate-1/2 bg-primary rounded-full w-0 aspect-square 
						transition-[width] duration-300 ${isMouseHover && "w-[120%]"}`,
					)}
				/>
				<span
					className={twMerge(`z-20 font-medium text-primary 
					transition-colors duration-300 ${isMouseHover && "text-black"}`)}
				>
					$
				</span>
				<span className={`z-20 ${disabled && "text-content/40"}`}>{children}</span>
			</div>
		</button>
	);
};
