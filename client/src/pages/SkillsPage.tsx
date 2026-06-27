import { Helmet } from "react-helmet-async";
import { CertificateIcon, DiamondIcon, DiamondsFourIcon } from "@phosphor-icons/react";
import { PrimaryPanel } from "../components/Common/PrimaryPanel";
import { Fragment, useMemo } from "react";
import { TerminalWindowPanel } from "../components/Common/TerminalWindowPanel";
import { motion, stagger } from "framer-motion";
import { PageTransitionLink } from "../components/Common/PageTransitionLink";
import { PROJECTS_ROUTE } from "../routes";
import { certifications, skills } from "../data/skills";

const containerVariant = {
	initial: { opacity: 0 },
	animate: { opacity: 1, transition: { delayChildren: stagger(0.2) } },
	transition: { duration: 0.3, ease: "easeOut" },
};

const skillItemVariant = {
	initial: { opacity: 0, x: "-100%" },
	animate: { opacity: 1, x: 0 },
	transition: { duration: 0.3, ease: "easeOut" },
};

export const SkillsPage = () => {
	const skillElements = useMemo(() => {
		return skills.map((skill) => (
			<PrimaryPanel className="gap-4" key={skill.title}>
				<div className="flex items-center gap-4 text-primary font-semibold">
					<div className="hidden sm:block">{skill.icon}</div>
					{skill.title}
				</div>
				<p className="text-content/80">{skill.description}</p>
				<div className="h-px bg-content/60" />
				<motion.div
					className="flex flex-col gap-3"
					variants={containerVariant}
					initial="initial"
					animate="animate"
					transition={{ duration: 0.3, ease: "easeOut" }}
				>
					{skill.items.map((item, j) => (
						<motion.div className="flex items-center gap-2" key={j} variants={skillItemVariant}>
							{typeof item === "string" ? (
								<Fragment>
									<DiamondIcon size={16} weight="bold" color="var(--color-primary)" />
									{item}
								</Fragment>
							) : (
								<Fragment>
									<img alt="logo" src={item.logo} className="size-6" />
									{item.name}
								</Fragment>
							)}
						</motion.div>
					))}
				</motion.div>
			</PrimaryPanel>
		));
	}, []);

	const certificationElements = useMemo(() => {
		return certifications.map((certification, i) => {
			const logoImageSizeStyle = certification.type === "AWS" ? "h-16 sm:h-20" : "h-6 sm:h-8";

			return (
				<Fragment key={i}>
					<div
						className="relative overflow-hidden border border-content/20 rounded-lg p-6
						bg-base/80 backdrop-blur-xs flex flex-row sm:flex-col justify-between items-center gap-4 grow sm:basis-0"
					>
						<div className="z-0 absolute -bottom-8 -right-8 w-2/3 h-2/3 rounded-full bg-accent/20 blur-3xl" />
						<div className="z-10 h-16 sm:h-20 flex items-center">
							<img
								alt="certification logo"
								src={certification.logo}
								className={`${logoImageSizeStyle}`}
							/>
						</div>
						<div className="grow flex flex-col gap-4 items-center">
							<p className="z-10 grow font-medium text-center max-w-60 text-content/80">
								{certification.name}
							</p>
							<div className="h-px bg-content/20 w-full" />
							<p className="z-10 text-sm font-medium">
								Exp: <span className="text-primary">{certification.validThru}</span>
							</p>
						</div>
					</div>
					{i == certifications.length - 1 || (
						<div className="hidden lg:flex items-center">
							<div className="w-6 border-t border-primary/80 border-dashed" />
							<DiamondsFourIcon size={24} color="var(--color-primary)" />
							<div className="w-6 border-t border-primary/80 border-dashed" />
						</div>
					)}
				</Fragment>
			);
		});
	}, []);

	return (
		<div className="flex flex-col gap-6 sm:gap-10 min-h-full justify-end pointer-events-auto">
			<Helmet>
				<title>Skills — Xutao Gao</title>
				<meta
					name="description"
					content="Explore Xutao Gao's technical toolkit including skills from full-stack development, cloud engineering, AWS certifications, and more."
				/>
			</Helmet>
			{/* Introduction */}
			<div className="flex flex-col gap-4 sm:gap-6 items-start self-end">
				<p className="text-primary font-semibold">&gt;_ SKILLS</p>
				<div className="flex flex-col items-end">
					<h1 className="font-medium text-4xl sm:text-5xl text-shadow-lg">
						My Technical <span className="font-bold text-primary">Toolkit_</span>
					</h1>
				</div>
				<p className="text-content/80 max-w-120 rounded-sm bg-base/10 backdrop-blur-xs">
					Every project leaves something behind. This collection reflects the technologies and skills I've
					developed through professional work, personal projects, and a lot of hands-on experimentation.
				</p>
			</div>

			{/* Skills */}
			<div className="grid grid-cols-1 xs:grid-cols-2 xl:grid-cols-4 gap-2 sm:gap-8">{skillElements}</div>

			{/* Certifications */}
			<div className="flex gap-4 lg:gap-8 flex-col xl:flex-row">
				<div className="flex flex-col gap-4 lg:gap-8">
					{/* Certification introduction */}
					<div className="flex items-center gap-4">
						<CertificateIcon size={40} color="var(--color-primary)" className="shrink-0" />
						<div className="flex flex-col gap-2">
							<p className="font-semibold text-primary text-lg">Certifications</p>
							<p className="rounded-sm bg-base/10 backdrop-blur-xs">
								Industry-recognized certifications that validate my skills and knowledge.
							</p>
						</div>
					</div>

					{/* Completed certifications */}
					<div className="flex flex-col sm:flex-row gap-2 sm:gap-4 lg:gap-0">{certificationElements}</div>
				</div>

				<TerminalWindowPanel title="In Progress" command="inprogress" className="grow">
					<div className="flex flex-col justify-between items-center gap-6">
						<div className="h-24 flex items-center">
							<img alt="certification logo" src="/logos/aws-logo.svg" className="h-24" />
						</div>
						<p className="grow font-medium text-center max-w-60 text-content/80">
							AWS Certified DevOps Engineer Professional
						</p>
						<p className="text-sm font-medium">
							Expected by: <span className="text-primary">Oct 2026</span>
						</p>
					</div>
				</TerminalWindowPanel>
			</div>

			<PageTransitionLink to={`/${PROJECTS_ROUTE}`} message="Find where the tools meet the work." />
		</div>
	);
};
