import { CheckCircleIcon, CopyIcon, EnvelopeIcon, GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";
import { useRef, useState } from "react";
import { Link } from "react-router";

export const QuickSocial = () => {
	const [isHoverEmailButton, setIsHoverEmailButton] = useState(false);
	const [hasCopidEmail, setHasCopiedEmail] = useState(false);
	const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	const myEmail = "xutao.gao04@gmail.com";

	const copyEmail = () => {
		navigator.clipboard.writeText(myEmail);
		setHasCopiedEmail(true);
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
		timeoutRef.current = setTimeout(() => setHasCopiedEmail(false), 5000);
	};

	return (
		<div className="flex gap-1">
			<Link
				to="https://www.google.com"
				target="_blank"
				rel="noreferrer"
				className="rounded-sm border border-primary/40 flex justify-center items-center p-3"
			>
				<GithubLogoIcon size={24} weight="bold" />
			</Link>
			<Link
				to="https://www.google.com"
				target="_blank"
				rel="noreferrer"
				className="rounded-sm border border-primary/40 flex justify-center items-center p-3"
			>
				<LinkedinLogoIcon size={24} weight="bold" />
			</Link>
			<div
				className="rounded-sm border border-primary/40 flex justify-center items-center"
				onMouseEnter={() => setIsHoverEmailButton(true)}
				onMouseLeave={() => setIsHoverEmailButton(false)}
			>
				<div className="p-3">
					<EnvelopeIcon size={24} weight="bold" />
				</div>
				<div
					className={`h-full flex justify-end items-center overflow-hidden gap-2
						transition-[width] duration-300 ${isHoverEmailButton ? "w-64 pr-3" : "w-0"}`}
				>
					<p>{myEmail}</p>
					<button onClick={copyEmail}>
						{hasCopidEmail ? (
							<CheckCircleIcon size={24} color="var(--color-primary)" weight="fill" />
						) : (
							<CopyIcon size={24} weight="bold" />
						)}
					</button>
				</div>
			</div>
		</div>
	);
};
