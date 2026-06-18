import { ArrowSquareOutIcon, CheckCircleIcon, CopyIcon } from "@phosphor-icons/react";
import { useRef, useState, type ReactNode } from "react";
import { Link } from "react-router";

interface SocialLinkProps {
	icon: ReactNode;
	title: string;
	displayLink: string;
	fullLink: string;
	action: "link" | "copy";
}

export const SocialLink = ({ icon, title, displayLink, fullLink, action }: SocialLinkProps) => {
	const [hasCopidEmail, setHasCopiedEmail] = useState(false);
	const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	const copyEmail = () => {
		navigator.clipboard.writeText(fullLink);
		setHasCopiedEmail(true);
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
		timeoutRef.current = setTimeout(() => setHasCopiedEmail(false), 5000);
	};

	return (
		<div className="border border-content/20 p-4 gap-6 flex items-center rounded-lg">
			{icon}
			<div className="grow flex flex-col gap-1">
				<p className="font-medium text-content/70 sm:text-content">{title}</p>
				<p className="text-content/70 hidden sm:block">{displayLink}</p>
			</div>
			{action === "link" ? (
				<Link aria-label={`Go to ${displayLink}`} to={fullLink} target="_blank" rel="noreferrer">
					<ArrowSquareOutIcon size={24} weight="bold" />
				</Link>
			) : (
				<button aria-label="Copy email address" onClick={copyEmail}>
					{hasCopidEmail ? (
						<CheckCircleIcon size={24} color="var(--color-primary)" weight="fill" />
					) : (
						<CopyIcon size={24} weight="bold" />
					)}
				</button>
			)}
		</div>
	);
};
