import { type ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	children?: string;
	sm?: boolean;
}

export const Button = ({ className, children, disabled, sm, ...rest }: ButtonProps) => {
	return (
		<button
			className={`relative transiton-transform duration-300 disabled:cursor-not-allowed pl-1.5 pt-1.5
			group ${disabled || "active:translate-y-1"} ${className}`}
			disabled={disabled}
			{...rest}
		>
			<div className="absolute inset-0 ml-1.5 mt-1.5 rounded-sm border-2 border-primary opacity-60 diagonal-stripe-pattern" />
			<div
				className={twMerge(`px-6 py-3 gap-3 border border-primary rounded-sm bg-base/50 backdrop-blur-xs
				font-semibold flex items-center relative overflow-hidden transition-transform duration-300
				z-10 -translate-1.5 ${disabled ? "border-primary/40" : "group-hover:translate-y-1.5"}
				${sm && "px-3 py-1.5 -translate-1 group-hover:translate-y-1"}`)}
			>
				<div
					className={twMerge(
						`absolute top-1/2 left-1/2 -translate-1/2 bg-primary rounded-full w-0 aspect-square 
						transition-[width] duration-300 ${disabled || "group-hover:w-[120%]"}`,
					)}
				/>
				<span
					className={twMerge(`z-20 font-medium text-primary transition-colors duration-300 
					${disabled || "group-hover:text-black"}`)}
				>
					$
				</span>
				<span className={`z-20 ${disabled && "text-content/40"}`}>{children}</span>
			</div>
		</button>
	);
};
