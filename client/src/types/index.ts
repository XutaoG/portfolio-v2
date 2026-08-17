import type { ReactNode } from "react";

export type TLink = {
	displayLink: string;
	fullyQualifiedLink: string;
};

export type TProjectSectionInfo = {
	textInfo?: string[];
	listInfo?: string[];
};

export type TProject = {
	id: string;
	name: string;
	type: string;
	iconCategory: "Web" | "Logic" | "Game" | "Creative" | "Team";
	setting: string;
	gitHubLink?: string;
	subheading: string;
	techStacks: TProjectSectionInfo;
	description: TProjectSectionInfo;
	myRole?: TProjectSectionInfo;
	timeFrame: {
		start: string;
		end: string;
		duration: string;
	};
	notableFeatures: TProjectSectionInfo;
	engineeringChallenges?: TProjectSectionInfo;
	whatILearned: TProjectSectionInfo;
	imageLinks: {
		prefix: string;
		count: number;
		fileFormat: string;
	};
};

export type TBasicInfo = {
	type: "education" | "work-status" | "work-history" | "location";
	icon: ReactNode;
	title: string;
	info: {
		heading: string;
		subHeading: string;
		ending?: string;
	}[];
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
