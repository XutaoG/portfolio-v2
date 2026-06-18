import { CheckCircleIcon, CopyIcon, EnvelopeIcon, GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";
import { useRef, useState } from "react";
import { Link } from "react-router";
import { socialLinks } from "../../data/socialLinks";

export const QuickSocial = () => {
	const [hasCopidEmail, setHasCopiedEmail] = useState(false);
	const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	const myEmail = socialLinks.email.displayLink;

	const copyEmail = () => {
		navigator.clipboard.writeText(myEmail);
		setHasCopiedEmail(true);
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
		timeoutRef.current = setTimeout(() => setHasCopiedEmail(false), 5000);
	};

	const linkClassNames =
		"rounded-sm border border-primary/40 flex justify-center items-center p-3 hover:-translate-y-1.5 hover:border-primary/60 transition-all duration-300 relative overflow-hidden group";

	const gradientElement = (
		<div className="z-0 absolute bg-primary/40 size-12 -bottom-6 -left-6 rounded-full blur-xl group-hover:bg-primary/80" />
	);

	return (
		<div className="flex gap-1">
			<Link
				aria-label="Go to GitHub"
				to={socialLinks.gitHub.fullyQualifiedLink}
				target="_blank"
				rel="noreferrer"
				className={linkClassNames}
			>
				{gradientElement}
				<GithubLogoIcon size={24} weight="bold" className="z-10" />
			</Link>
			<Link
				aria-label="Go to LinkedIn"
				to={socialLinks.linkedIn.fullyQualifiedLink}
				target="_blank"
				rel="noreferrer"
				className={linkClassNames}
			>
				{gradientElement}
				<LinkedinLogoIcon size={24} weight="bold" />
			</Link>
			<div
				className="rounded-sm border border-primary/40 flex justify-center items-center 
				relative overflow-hidden group hover:border-primary/60 transition-all duration-300 group"
			>
				{gradientElement}
				<div className="p-3">
					<EnvelopeIcon size={24} weight="bold" />
				</div>
				<div
					className={`h-full flex justify-end items-center overflow-hidden gap-2 relative
						transition-[width] duration-300 w-0 group-hover:w-64 group-hover:pr-3`}
				>
					<div className="z-0 absolute bg-primary/40 size-12 -bottom-6 -right-6 rounded-full blur-xl group-hover:bg-primary/80" />
					<p>{myEmail}</p>
					<button aria-label="Copy email address" onClick={copyEmail}>
						{hasCopidEmail ? (
							<CheckCircleIcon size={24} color="var(--color-success)" weight="fill" />
						) : (
							<CopyIcon size={24} weight="bold" />
						)}
					</button>
				</div>
			</div>
		</div>
	);
};
