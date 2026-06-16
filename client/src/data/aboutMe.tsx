import { BriefcaseIcon, ClockClockwiseIcon, GraduationCapIcon, MapPinIcon } from "@phosphor-icons/react";
import type { TBasicInfo } from "../types";

export const basicInfoData: TBasicInfo[] = [
	{
		type: "education",
		icon: <GraduationCapIcon size={24} weight="bold" color="var(--color-primary)" className="shrink-0" />,
		title: "EDUCATION",
		heading: "B.S. Computer Science",
		subHeading: "University of Central Florida",
		ending: "Graduated: May 2026",
	},
	{
		type: "work-status",
		icon: <BriefcaseIcon size={24} weight="bold" color="var(--color-primary)" className="shrink-0" />,
		title: "WORK STATUS",
		heading: "Full-stack Engineer",
		subHeading: "Full-time",
		ending: "Open to new opportunities",
	},
	{
		type: "work-history",
		icon: <ClockClockwiseIcon size={24} weight="bold" color="var(--color-primary)" className="shrink-0" />,
		title: "WORK HISTORY",
		heading: "UCF Institute for Simulation & Training",
		subHeading: "Full-time",
		ending: "March 2025 - June 2026",
	},
	{
		type: "location",
		icon: <MapPinIcon size={24} weight="bold" color="var(--color-primary)" className="shrink-0" />,
		title: "LOCATION",
		heading: "Orlando, Florida",
		subHeading: "United States",
	},
];
