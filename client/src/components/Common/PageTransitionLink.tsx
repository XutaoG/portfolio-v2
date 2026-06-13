import { ArrowCircleDownIcon } from "@phosphor-icons/react";
import { Link } from "react-router";

interface PageTransitionLinkProps {
	to: string;
	message: string;
}

export const PageTransitionLink = ({ to, message }: PageTransitionLinkProps) => {
	return (
		<Link to={to} className="self-center flex items-center gap-4 group">
			<ArrowCircleDownIcon size={24} color="var(--color-primary)" weight="bold" className="animate-bounce" />
			<p className="font-medium underline-offset-4 underline group-hover:-translate-y-2 transition-all duration-300">
				{message}
			</p>
		</Link>
	);
};
