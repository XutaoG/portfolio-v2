import type { TextareaHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	className?: string;
	title: string;
}

export const TextArea = ({ className, title, ...rest }: TextAreaProps) => {
	return (
		<div
			className={twMerge(`border border-content/20 p-4 flex flex-col gap-2 rounded-lg 
				relative overflow-hidden ${className}`)}
		>
			<div className="absolute -bottom-8 -right-8 w-1/2 aspect-square bg-accent/10 rounded-full blur-[128px]" />
			<p className="font-medium">{title}</p>
			<textarea className="resize-none h-64" {...rest} />
		</div>
	);
};
