import { ArrowSquareOutIcon, TargetIcon } from "@phosphor-icons/react";
import { Button } from "../components/Common/Button";
import { Link } from "react-router";
import { PrimaryPanel } from "../components/Common/PrimaryPanel";
import { TerminalWindowPanel } from "../components/Common/TerminalWindowPanel";
import { SKILLS_ROUTE } from "../routes";
import { PageTransitionLink } from "../components/Common/PageTransitionLink";
import { useMemo } from "react";
import { basicInfoData } from "../data/aboutMe";

export const AboutPage = () => {
	const aboutMePanels = useMemo(() => {
		return basicInfoData.map((aboutMe) => (
			<PrimaryPanel key={aboutMe.type}>
				<div className="flex items-center gap-3 font-semibold text-primary">
					{aboutMe.icon}
					{aboutMe.title}
				</div>
				<div className="grow flex flex-col gap-3">
					<p className="font-medium">{aboutMe.heading}</p>
					<p className="text-content/60">{aboutMe.subHeading}</p>
				</div>
				{aboutMe.ending && (
					<p className={`font-semibold ${aboutMe.type === "work-status" ? "text-success" : "text-primary"}`}>
						{aboutMe.ending}
					</p>
				)}
			</PrimaryPanel>
		));
	}, []);

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
			<div className="self-start flex flex-col gap-6 items-start bg-base/20 backdrop-blur-sm">
				<p className="text-primary font-semibold">&gt;_ ABOUT ME</p>
				<div className="flex flex-col items-end">
					<h1 className="font-medium text-5xl text-shadow-lg">
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
			<div className="grid grid-cols-2 lg:grid-cols-4 gap-8">{aboutMePanels}</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 max-h-none lg:max-h-96 gap-8 ">
				{/* My story */}
				<TerminalWindowPanel title="My Story" command="whoami" className="max-h-96 lg:max-h-none">
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
				<TerminalWindowPanel
					title="Current Focus"
					command="cat current_focus.md"
					className="max-h-96 lg:max-h-none"
				>
					<div className="flex flex-col gap-4 text-content/80">
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
