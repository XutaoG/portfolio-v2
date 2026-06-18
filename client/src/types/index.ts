import type { ReactNode } from "react";

export type TLink = {
	displayLink: string;
	fullyQualifiedLink: string;
};

export type TProject = {
	id: number;
	name: string;
	type: string;
	description: string;
	tags: string[];
};

export type TBasicInfo = {
	type: "education" | "work-status" | "work-history" | "location";
	icon: ReactNode;
	title: string;
	heading: string;
	subHeading: string;
	ending?: string;
};

export type TSkill = {
	icon: ReactNode;
	title: string;
	description: string;
	items: ({ name: string; logo: string } | string)[];
};

export type TCertification = {
	type: "AWS" | "CompTIA";
	name: string;
	validThru: string;
	logo: string;
};
