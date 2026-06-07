import type { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
	title: string;
	className?: string;
	placeholder: string;
}

export const InputField = ({ className, title, ...rest }: InputFieldProps) => {
	return (
		<div
			className={twMerge(`border border-content/20 p-4 flex flex-col gap-2 rounded-lg 
			relative overflow-hidden ${className}`)}
		>
			<div className="absolute -bottom-8 -right-8 w-1/3 aspect-square bg-accent/10 rounded-full blur-3xl"/>
			<p className="font-medium">{title}</p>
			<input {...rest} />
		</div>
	);
};
