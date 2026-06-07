import { AppWindowIcon, ArrowSquareOutIcon, GithubLogoIcon } from "@phosphor-icons/react";
import type { TProject } from "../../types";

interface ProjectPanelProps {
	project: TProject;
}

export const ProjectPanel = ({ project }: ProjectPanelProps) => {
	const tagsElement = project.tags.map((tag) => (
		<div className="rounded-sm px-1 py-0.5 border border-content/20 bg-base">{tag}</div>
	));

	return (
		<div className="flex flex-col p-6 gap-4 rounded-lg border border-content/20 bg-base/80 backdrop-blur-xs relative overflow-hidden">
			<div className="absolute -top-8 -left-8 size-64 rounded-full bg-content/10 blur-[96px]" />
			<div className="absolute -bottom-8 -right-8 size-32 rounded-full bg-content/10 blur-[96px]" />

			{/* Icon */}
			<div className="absolute left-4 top-4 p-1 rounded-lg bg-base border border-content/20">
				<div className="bg-linear-to-br from-indigo-700 to-indigo-400 rounded-lg p-1">
					<AppWindowIcon size={48} />
				</div>
			</div>
			{/* Image carousel */}
			<div className="mt-6 rounded-lg aspect-4/3 bg-neutral-600"></div>
			<div className="flex flex-col gap-2 items-start grow">
				{/* Project type */}
				<p className="rounded-sm p-1 bg-indigo-600/20 text-indigo-400 text-xs font-medium">{project.type}</p>
				{/* Project name */}
				<p className="font-semibold">{project.name}</p>
				{/* Project description */}
				<p className="font-sm text-content/60">{project.description}</p>
			</div>
			{/* Tags */}
			<div className="flex gap-1 flex-wrap">{tagsElement}</div>

			<div className="h-px bg-content/20" />

			{/* View GitHub */}
			<button className="self-center flex items-center gap-2 text-content/80 font-medium">
				<GithubLogoIcon size={16} weight="bold" />
				View GitHub
				<ArrowSquareOutIcon size={16} weight="bold" />
			</button>
		</div>
	);
};
