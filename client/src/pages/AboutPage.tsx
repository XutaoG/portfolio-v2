import {
	ArrowSquareOutIcon,
	BriefcaseIcon,
	ClockClockwiseIcon,
	GraduationCapIcon,
	MapPinIcon,
	TargetIcon,
} from "@phosphor-icons/react";
import { Button } from "../components/Common/Button";
import { Link } from "react-router";
import { PrimaryPanel } from "../components/Common/PrimaryPanel";
import { TerminalWindowPanel } from "../components/Common/TerminalWindowPanel";
import { SKILLS_ROUTE } from "../routes";
import { PageTransitionLink } from "../components/Common/PageTransitionLink";

export const AboutPage = () => {
	const focuses = ["Focus 1", "Focus 2", "Focus 3", "Focus 4", "Focus 5", "Focus 6"];

	const focusElements = focuses.map((focus, i) => (
		<div key={i} className="flex items-center gap-3 ml-2">
			<TargetIcon size={24} color="var(--color-primary)" />
			{focus}
		</div>
	));

	return (
		<div className="flex flex-col gap-10 h-full justify-end">
			{/* Introduction */}
			<div className="flex flex-col gap-6 items-start">
				<p className="text-primary font-semibold">&gt;_ ABOUT ME</p>
				<div className="flex flex-col items-end">
					<h1 className="font-medium text-5xl">
						Hey, I'm <span className="font-bold text-primary">Xutao_</span>
					</h1>
					<p className="text-content/60 font-medium">(Pronunced Shu-tao)</p>
				</div>
				<p className="text-content/60 max-w-100">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus nemo dolores excepturi earum vel
					provident itaque distinctio mollitia alias libero.
				</p>
			</div>

			{/* Resume info */}

			<div className="flex items-center gap-8">
				<Button>DOWNLOAD RESUME</Button>
				<Link
					to="https://www.google.com"
					target="_blank"
					rel="noreferrer"
					className="flex items-center gap-2 font-medium underline underline-offset-4"
				>
					VIEW RESUME
					<ArrowSquareOutIcon size={20} weight="bold" />
				</Link>
			</div>

			{/* Basic info */}
			<div className="grid grid-cols-4 gap-8">
				{/* Education */}
				<PrimaryPanel className="justify-between gap-6">
					<div className="flex items-center gap-3 font-semibold text-primary">
						<GraduationCapIcon size={24} weight="bold" color="var(--color-primary)" />
						EDUCATION
					</div>
					<div className="flex flex-col gap-3">
						<p className="font-medium">B.S. Computer Science</p>
						<p className="text-content/60">University of Central Florida</p>
					</div>
					<p className="font-semibold text-primary">Graduated: May 2026</p>
				</PrimaryPanel>

				{/* Work status */}
				<PrimaryPanel className="justify-between gap-6">
					<div className="flex items-center gap-3 font-semibold text-primary">
						<BriefcaseIcon size={24} weight="bold" color="var(--color-primary)" />
						WORK STATUS
					</div>
					<div className="flex flex-col gap-3">
						<p className="font-medium">Full-stack Engineer</p>
						<p className="text-content/60">Full-time</p>
					</div>
					<p className="font-semibold text-success">Open to new opportunities</p>
				</PrimaryPanel>

				{/* Work history */}
				<PrimaryPanel className="justify-between gap-6">
					<div className="flex items-center gap-3 font-semibold text-primary">
						<ClockClockwiseIcon size={24} weight="bold" color="var(--color-primary)" />
						WORK HISTORY
					</div>
					<div className="flex flex-col gap-3">
						<p className="font-medium">UCF Institute for Simulation & Training</p>
						<p className="text-content/60">Full-time</p>
					</div>
					<p className="font-semibold text-primary">March 2025 - June 2026</p>
				</PrimaryPanel>

				{/* Location */}
				<PrimaryPanel className="justify-between gap-6">
					<div className="flex items-center gap-3 font-semibold text-primary">
						<MapPinIcon size={24} weight="bold" color="var(--color-primary)" />
						LOCATION
					</div>
					<div className="flex flex-col gap-3 grow">
						<p className="font-medium">Orlando, Florida</p>
						<p className="text-content/60">United States</p>
					</div>
				</PrimaryPanel>
			</div>

			<div className="grid grid-cols-2 gap-8 max-h-96">
				{/* My story */}
				<TerminalWindowPanel title="My Story" command="whoami">
					<p className="text-content/80">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, labore quaerat nostrum accusamus
						laborum quas beatae quasi quae officiis tempore.
						<br />
						<br />
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, exercitationem. Ut iusto,
						ullam ab saepe eaque, adipisci nobis modi eligendi culpa nisi quod laborum id aut ipsa tempora,
						dolorem non!
						<br />
						<br />
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, pariatur.
					</p>
				</TerminalWindowPanel>

				{/* Current focus */}
				<TerminalWindowPanel title="Current Focus" command="cat current_focus.md" className="h-full">
					<div className="flex flex-col gap-4 text-content/80 ">
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt optio libero possimus illo
							temporibus officiis reprehenderit nisi quam quis cum.
						</p>
						{focusElements}
					</div>
				</TerminalWindowPanel>
			</div>

			<PageTransitionLink to={`/${SKILLS_ROUTE}`} message="Exploring the tools behind the work." />
		</div>
	);
};
