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
					<div className="hidden sm:block">{aboutMe.icon}</div>
					{aboutMe.title}
				</div>
				<div className="grow flex flex-col gap-3">
					<p className="font-medium">{aboutMe.heading}</p>
					<p className="text-content/70">{aboutMe.subHeading}</p>
				</div>
				{aboutMe.ending && (
					<p
						className={`hidden sm:block font-semibold text-sm 
						${aboutMe.type === "work-status" ? "text-success" : "text-primary"}`}
					>
						{aboutMe.ending}
					</p>
				)}
			</PrimaryPanel>
		));
	}, []);

	return (
		<div className="flex flex-col gap-6 sm:gap-10 min-h-full justify-end">
			{/* Introduction */}
			<div className="self-start flex flex-col gap-4 sm:gap-6 items-start">
				<p className="text-primary font-semibold">&gt;_ ABOUT ME</p>
				<div className="flex flex-col items-end">
					<h1 className="font-medium text-4xl sm:text-5xl text-shadow-lg">
						Hey, I'm <span className="text-primary">Xutao_</span>
					</h1>
					<p className="text-content/70 font-medium">(Pronunced Shu-tao)</p>
				</div>
				<p className="text-content/80 max-w-100 rounded-sm bg-base/10 backdrop-blur-xs">
					I'm a software engineer and UCF Computer Science graduate with over a year of professional
					experience building software across the web, cloud, and beyond.
				</p>
			</div>

			{/* Resume info */}

			<div className="flex items-center gap-8">
				<a href="/Xutao Gao Resume.pdf" download="Xutao Gao Resume.pdf">
					<Button>DOWNLOAD RESUME</Button>
				</a>
				<Link
					to="/Xutao Gao Resume.pdf"
					target="_blank"
					rel="noreferrer"
					className="hidden sm:flex items-center gap-2 font-medium underline underline-offset-4"
				>
					VIEW RESUME
					<ArrowSquareOutIcon size={20} weight="bold" />
				</Link>
			</div>

			{/* Basic info */}
			<div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-8">{aboutMePanels}</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 max-h-none lg:max-h-full gap-4 sm:gap-8 h-96 overflow-hidden">
				{/* My story */}
				<TerminalWindowPanel title="My Story" command="whoami" className="max-h-96 lg:max-h-none">
					<p className="text-content/80">
						Most of what you'll find here started the same way: I wondered how something worked, got
						distracted trying to understand it, and ended up building something of my own.
						<br />
						<br />
						This portfolio is a collection of those detours—projects, experiments, and ideas that grew
						larger than I expected. Along the way, I've explored everything from full-stack applications and
						simulations to interactive 3D experiences on the web.
					</p>
				</TerminalWindowPanel>

				{/* Current focus */}
				<TerminalWindowPanel
					title="Current Focus"
					command="cat current_focus.md"
					className="max-h-96 lg:max-h-none"
				>
					<div className="flex flex-col gap-4 text-content/80">
						<div className="flex items-center gap-3 ml-2 text-primary font-medium">
							<TargetIcon size={24} color="var(--color-primary)" />
							AWS Certified DevOps Engineer - Professional
						</div>
						<p className="text-content/80">
							My current focus is cloud engineering and DevOps. I'm pursuing the AWS Certified DevOps
							Engineer - Professional certification while learning more about infrastructure automation,
							deployment pipelines, and cloud-native architectures.
							<br />
							<br />
							The deeper I go, the more I appreciate the systems that keep modern applications reliable,
							scalable, and easy to maintain.
						</p>
					</div>
				</TerminalWindowPanel>
			</div>

			<PageTransitionLink to={`/${SKILLS_ROUTE}`} message="Exploring the tools behind the work." />
		</div>
	);
};
