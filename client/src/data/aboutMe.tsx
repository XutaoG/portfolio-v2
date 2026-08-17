import { BriefcaseIcon, ClockClockwiseIcon, GraduationCapIcon, MapPinIcon } from "@phosphor-icons/react";
import type { TBasicInfo } from "../types";

export const basicInfoData: TBasicInfo[] = [
	{
		type: "education",
		icon: <GraduationCapIcon size={24} weight="bold" color="var(--color-primary)" className="shrink-0" />,
		title: "EDUCATION",
		info: [
			{
				heading: "B.S. Computer Science",
				subHeading: "University of Central Florida",
				ending: "Graduated: May 2026",
			},
		],
	},
	{
		type: "work-status",
		icon: <BriefcaseIcon size={24} weight="bold" color="var(--color-primary)" className="shrink-0" />,
		title: "WORK STATUS",
		info: [
			{
				heading: "Associate Developer",
				subHeading: "Full-time",
				ending: "Open to Opportunities",
			},
		],
	},
	{
		type: "work-history",
		icon: <ClockClockwiseIcon size={24} weight="bold" color="var(--color-primary)" className="shrink-0" />,
		title: "WORK HISTORY",
		info: [
			{
				heading: "Old Republic Title",
				subHeading: "Full-time",
				ending: "Aug 2026 - Present",
			},
			{
				heading: "UCF Institute for Simulation & Training",
				subHeading: "Full-time",
				ending: "Mar 2025 - Jun 2026",
			},
		],
	},
	{
		type: "location",
		icon: <MapPinIcon size={24} weight="bold" color="var(--color-primary)" className="shrink-0" />,
		title: "LOCATION",
		info: [
			{
				heading: "Orlando, Florida",
				subHeading: "United States",
			},
		],
	},
];
