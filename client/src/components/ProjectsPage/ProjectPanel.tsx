import { AppWindowIcon, ArrowSquareOutIcon, GithubLogoIcon } from "@phosphor-icons/react";
import type { TProject } from "../../types";
import { twMerge } from "tailwind-merge";
import { useNavigate, useParams } from "react-router";
import { PROJECTS_ROUTE } from "../../routes";
import { useMinWidth } from "../../hooks/useMinWidth";

interface ProjectPanelProps {
	project: TProject;
	useCard?: boolean;
}

export const ProjectPanel = ({ useCard, project }: ProjectPanelProps) => {
	const { projectId } = useParams();
	const navigate = useNavigate();
	const useSm = useMinWidth("sm");

	const isSelected = projectId != null && project.id === projectId;
	const selectProject = (newProjectId: string) => {
		if (projectId != null && projectId === newProjectId) {
			navigate(`/${PROJECTS_ROUTE}`);
		} else {
			navigate(`/${PROJECTS_ROUTE}/${newProjectId}`);
		}
	};

	const iconElement = (
		<div
			className={`p-1 rounded-lg bg-base border border-content/20
			${useCard || !useSm || "absolute left-3 top-3"}`}
		>
			<div className="bg-linear-to-br from-indigo-700 to-indigo-400 rounded-lg p-1">
				<AppWindowIcon size={48} />
			</div>
		</div>
	);
	const projectTypeElement = (
		<p className="rounded-sm p-1 bg-indigo-600/20 text-indigo-400 text-xs font-medium">{project.type}</p>
	);
	const projectNameElement = <p className="font-medium line-clamp-1">{project.name}</p>;
	const projectDescriptionElement = <p className="font-sm text-content/70 line-clamp-2">{project.subheading}</p>;

	if (useCard || !useSm) {
		// Return card style
		return (
			<div
				className={twMerge(`flex gap-4 items-start p-4 xl:p-6 rounded-lg border border-content/20 bg-base/80 
				backdrop-blur-xs relative overflow-hidden hover:cursor-pointer ${isSelected && "border-primary/60"}`)}
				onClick={() => selectProject(project.id)}
			>
				<div className="absolute -bottom-8 -right-8 size-32 rounded-full bg-content/10 blur-3xl" />
				{iconElement}
				<div className="flex flex-col gap-2 items-start grow">
					{projectTypeElement}
					{projectNameElement}
					{projectDescriptionElement}
				</div>
				<div
					className={twMerge(`size-3 aspect-square border border-content/20 rounded-full 
					${isSelected && "border-0 bg-primary"}`)}
				/>
			</div>
		);
	}

	return (
		<div
			className="flex flex-col p-4 md:p-6 gap-4 rounded-lg border border-content/20 bg-base/80 
			backdrop-blur-xs relative overflow-hidden hover:cursor-pointer"
			onClick={() => selectProject(project.id)}
		>
			<div className="absolute -top-8 -left-8 size-64 rounded-full bg-content/10 blur-[96px]" />
			<div className="absolute -bottom-8 -right-8 size-32 rounded-full bg-content/10 blur-[96px]" />

			{/* Icon */}
			{iconElement}
			{/* Image */}
			<img
				loading="lazy"
				src={`/project-images/${project.imageLinks.prefix}-01${project.imageLinks.fileFormat}`}
				className="mt-4 md:mt-6 rounded-lg shrink-0 aspect-video"
			/>
			<div className="flex flex-col gap-2 items-start grow">
				{projectTypeElement}
				{projectNameElement}
				{projectDescriptionElement}
			</div>
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
