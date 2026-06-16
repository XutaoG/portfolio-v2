import { AppWindowIcon, HardDrivesIcon, CloudIcon, PaintBrushIcon } from "@phosphor-icons/react";
import type { TCertification, TSkill } from "../types";

export const skills: TSkill[] = [
	{
		icon: <AppWindowIcon size={40} color="var(--color-primary)" className="shrink-0" />,
		title: "FRONTEND",
		description: "Building Responsive and interative user interfaces.",
		items: ["Frontend 1", "Frontend 2", "Frontend 3", "Frontend 4", "Frontend 5"],
	},
	{
		icon: <HardDrivesIcon size={40} color="var(--color-primary)" className="shrink-0" />,
		title: "BACKEND",
		description: "Building APIs and server-side applications",
		items: ["Backend 1", "Backend 2", "Backend 3", "Backend 4"],
	},
	{
		icon: <CloudIcon size={40} color="var(--color-primary)" className="shrink-0" />,
		title: "CLOUD & DEVOPS",
		description: "Deploying and managing scalable applications.",
		items: ["Cloud 1", "Cloud 2", "Cloud 3", "Cloud 4"],
	},
	{
		icon: <PaintBrushIcon size={40} color="var(--color-primary)" className="shrink-0" />,
		title: "SPECIALIZED & CREATIVE TOOLS",
		description: "Tools I use for design, prototyping, and 3D",
		items: ["Creative 1", "Creative 2", "Creative 3", "Creative 4", "Creative 5"],
	},
];

export const certifications: TCertification[] = [
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
