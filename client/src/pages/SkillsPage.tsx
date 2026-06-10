import {
	AppWindowIcon,
	CertificateIcon,
	CloudIcon,
	DiamondIcon,
	DiamondsFourIcon,
	HardDrivesIcon,
	PaintBrushIcon,
} from "@phosphor-icons/react";
import { PrimaryPanel } from "../components/Common/PrimaryPanel";
import { Fragment, type ReactNode } from "react";
import { TerminalWindowPanel } from "../components/Common/TerminalWindowPanel";
import { motion, stagger } from "framer-motion";

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
	const skills: {
		icon: ReactNode;
		title: string;
		description: string;
		items: string[];
	}[] = [
		{
			icon: <AppWindowIcon size={40} color="var(--color-primary)" />,
			title: "FRONTEND",
			description: "Building Responsive and interative user interfaces.",
			items: ["Frontend 1", "Frontend 2", "Frontend 3", "Frontend 4", "Frontend 5"],
		},
		{
			icon: <HardDrivesIcon size={40} color="var(--color-primary)" />,
			title: "BACKEND",
			description: "Building APIs and server-side applications",
			items: ["Backend 1", "Backend 2", "Backend 3", "Backend 4"],
		},
		{
			icon: <CloudIcon size={40} color="var(--color-primary)" />,
			title: "CLOUD & DEVOPS",
			description: "Deploying and managing scalable applications.",
			items: ["Cloud 1", "Cloud 2", "Cloud 3", "Cloud 4"],
		},
		{
			icon: <PaintBrushIcon size={40} color="var(--color-primary)" />,
			title: "SPECIALIZED & CREATIVE TOOLS",
			description: "Tools I use for design, prototyping, and 3D",
			items: ["Creative 1", "Creative 2", "Creative 3", "Creative 4", "Creative 5"],
		},
	];

	const skillElements = skills.map((skill, i) => (
		<PrimaryPanel className="gap-4" key={i}>
			<div className="flex items-center gap-4 text-primary font-semibold">
				{skill.icon}
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
						<DiamondIcon size={16} weight="bold" color="var(--color-primary)" />
						{item}
					</motion.div>
				))}
			</motion.div>
		</PrimaryPanel>
	));

	const certifications: {
		type: "AWS" | "CompTIA";
		name: string;
		validThru: string;
	}[] = [
		{
			type: "AWS",
			name: "AWS Certified Solutions Architect Associate",
			validThru: "Mar 2029",
		},
		{
			type: "AWS",
			name: "AWS Certified Developer Associate",
			validThru: "May 2029",
		},
		{
			type: "CompTIA",
			name: "CompTIA Security+",
			validThru: "Jan 2021",
		},
	];

	const certificationElements = certifications.map((certification, i) => {
		const logoImageSrc =
			certification.type === "AWS"
				? "src/assets/cert-logos/aws-logo.svg"
				: "src/assets/cert-logos/comptia-logo.svg";

		const logoImageHeightStyle = certification.type === "AWS" ? "h-20" : "h-8";

		return (
			<Fragment key={i}>
				<div
					className="relative overflow-hidden border border-content/20 rounded-lg p-6
					flex flex-col justify-between items-center gap-4 grow basis-0"
				>
					<div className="z-0 absolute -bottom-8 -right-8 w-2/3 aspect-square rounded-full bg-accent/20 blur-3xl" />
					<div className="z-10 h-20 flex items-center">
						<img src={logoImageSrc} className={`${logoImageHeightStyle}`} />
					</div>
					<p className="z-10 grow font-medium text-center max-w-60 text-content/80 flex items-center">
						{certification.name}
					</p>
					<div className="h-px bg-content/20 w-full" />
					<p className="z-10 text-sm font-medium">
						Valid thru: <span className="text-primary">{certification.validThru}</span>
					</p>
				</div>
				{i == certifications.length - 1 || (
					<div className="flex items-center">
						<div className="w-6 border-t border-primary/80 border-dashed" />
						<DiamondsFourIcon size={24} color="var(--color-primary)" />
						<div className="w-6 border-t border-primary/80 border-dashed" />
					</div>
				)}
			</Fragment>
		);
	});

	return (
		<div className="flex flex-col gap-10 h-full justify-end">
			{/* Introduction */}
			<div className="flex flex-col gap-6 items-start self-end">
				<p className="text-primary font-semibold">&gt;_ SKILLS</p>
				<div className="flex flex-col items-end">
					<h1 className="font-medium text-5xl">
						My Technical <span className="font-bold text-primary">Toolkit_</span>
					</h1>
				</div>
				<p className="text-content/60 max-w-120">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus nemo dolores excepturi earum vel
					provident itaque distinctio mollitia alias libero.
				</p>
			</div>

			{/* Skills */}
			<div className="grid grid-cols-4 gap-8">{skillElements}</div>

			{/* Certifications */}
			<div className="flex gap-8">
				<div className="flex flex-col gap-8">
					{/* Certification introduction */}
					<div className="flex items-center gap-4">
						<CertificateIcon size={40} color="var(--color-primary)" />
						<div className="flex flex-col gap-2">
							<p className="font-semibold text-primary text-lg">Certifications</p>
							<p>Industry-recognized certifications that validate my skills and knowledge.</p>
						</div>
					</div>

					{/* Completed certifications */}
					<div className="flex">{certificationElements}</div>
				</div>

				<TerminalWindowPanel title="Certification In Progress" command="inprogress" className="grow">
					<div className="flex flex-col justify-between items-center gap-6">
						<div className="h-24 flex items-center">
							<img src="src/assets/cert-logos/aws-logo.svg" className="h-24" />
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
		</div>
	);
};
