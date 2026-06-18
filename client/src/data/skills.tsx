import { AppWindowIcon, HardDrivesIcon, CloudIcon, PaintBrushIcon } from "@phosphor-icons/react";
import type { TCertification, TSkill } from "../types";

export const skills: TSkill[] = [
	{
		icon: <AppWindowIcon size={40} color="var(--color-primary)" className="shrink-0" />,
		title: "FRONTEND",
		description: "Where ideas become interactive",
		items: [
			{
				name: "TypeScript",
				logo: "/logos/ts-logo.svg",
			},
			{
				name: "React",
				logo: "/logos/react-logo.svg",
			},
			{
				name: "Angular",
				logo: "/logos/angular-logo.svg",
			},
			{
				name: "Next.js",
				logo: "/logos/nextjs-logo.svg",
			},
			{
				name: "Tailwindcss",
				logo: "/logos/tailwindcss-logo.svg",
			},
			{
				name: "Three.js",
				logo: "/logos/threejs-logo.svg",
			},
		],
	},
	{
		icon: <HardDrivesIcon size={40} color="var(--color-primary)" className="shrink-0" />,
		title: "BACKEND",
		description: "The foundations that keep everything running",
		items: [
			{
				name: ".NET Core",
				logo: "/logos/dotnetcore-logo.svg",
			},
			{
				name: "ASP.NET Core",
				logo: "/logos/dotnetcore-logo.svg",
			},
			{
				name: "Entity Framework Core",
				logo: "/logos/dotnetcore-logo.svg",
			},
			{
				name: "Spring Boot",
				logo: "/logos/springboot-logo.svg",
			},
			{
				name: "express.js",
				logo: "/logos/expressjs-logo.svg",
			},
			{
				name: "PostgreSQL",
				logo: "/logos/postgresql-logo.svg",
			},
		],
	},
	{
		icon: <CloudIcon size={40} color="var(--color-primary)" className="shrink-0" />,
		title: "CLOUD & DEVOPS",
		description: "The infrastructure behind reliable software",
		items: [
			{
				name: "AWS",
				logo: "/logos/aws-logo.svg",
			},
			{
				name: "Git",
				logo: "/logos/git-logo.svg",
			},
			{
				name: "GitHub",
				logo: "/logos/github-logo.svg",
			},
			{
				name: "Docker",
				logo: "/logos/docker-logo.svg",
			},
		],
	},
	{
		icon: <PaintBrushIcon size={40} color="var(--color-primary)" className="shrink-0" />,
		title: "SPECIALIZED & CREATIVE TOOLS",
		description: "The tools that help me create",
		items: [
			{
				name: "Unity",
				logo: "/logos/unity-logo.svg",
			},
			{
				name: "Blender",
				logo: "/logos/blender-logo.svg",
			},
			{
				name: "Substance 3D Painter",
				logo: "/logos/adobept-logo.svg",
			},
			{
				name: "Figma",
				logo: "/logos/figma-logo.svg",
			},
		],
	},
];

export const certifications: TCertification[] = [
	{
		type: "AWS",
		name: "AWS Certified Solutions Architect Associate",
		validThru: "Mar 2029",
		logo: "/logos/aws-logo.svg",
	},
	{
		type: "AWS",
		name: "AWS Certified Developer Associate",
		validThru: "May 2029",
		logo: "/logos/aws-logo.svg",
	},
	{
		type: "CompTIA",
		name: "CompTIA Security+",
		validThru: "Jan 2021",
		logo: "/logos/comptia-logo.svg",
	},
];
