import type { TProject } from "../../types";
import { twMerge } from "tailwind-merge";
import { useNavigate, useParams } from "react-router";
import { PROJECTS_ROUTE } from "../../routes";
import { useMinWidth } from "../../hooks/useMinWidth";
import { ProjectTypeIcon } from "./ProjectTypeIcon";

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
			<ProjectTypeIcon project={project} />
		</div>
	);
	const projectTypeElement = (
		<p className="rounded-sm p-1 bg-indigo-600/20 text-indigo-400 text-xs font-medium">{project.type}</p>
	);
	const projectNameElement = <p className="font-medium line-clamp-1">{project.name}</p>;
	const projectSubheadingElement = <p className="font-sm text-content/70 line-clamp-2">{project.subheading}</p>;

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
				<div className="flex flex-col gap-2 grow">
					<div className="flex justify-between gap-4 items-start">
						{projectTypeElement}
						<div
							className={twMerge(`size-3 aspect-square border border-content/20 rounded-full 
							${isSelected && "border-0 bg-primary"}`)}
						/>
					</div>
					{projectNameElement}
					{projectSubheadingElement}
				</div>
			</div>
		);
	}

	return (
		<div
			className="flex flex-col p-4 md:p-6 gap-4 rounded-lg border border-content/20 bg-base/80 
			backdrop-blur-xs relative overflow-hidden hover:cursor-pointer z-0 
			hover:bg-base/90 transition-colors duration-300 group"
			onClick={() => selectProject(project.id)}
		>
			<div
				className="absolute -top-8 -left-8 w-1/4 h-1/4 rounded-full -z-10
				bg-accent/10 group-hover:bg-accent/30 blur-[96px] transition-colors duration-300"
			/>
			<div
				className="absolute -bottom-8 -right-8 w-1/2 h-1/2 rounded-full -z-10 
				bg-accent/10 group-hover:bg-accent/30 blur-[96px] transition-colors duration-300"
			/>

			{/* Icon */}
			{iconElement}
			{/* Image */}
			<img
				loading="eager"
				src={`/project-images/${project.imageLinks.prefix}-01${project.imageLinks.fileFormat}`}
				className="mt-4 md:mt-6 rounded-lg shrink-0 aspect-video border border-content/20 object-fill"
			/>
			<div className="flex flex-col gap-2 items-start grow">
				{projectTypeElement}
				{projectNameElement}
				{projectSubheadingElement}
			</div>

			<div className="w-full h-px bg-content/20" />

			<div className="flex justify-between items-center gap-12">
				{/* Tech stacks */}
				<p className="truncate min-w-0 text-content/80 text-sm">{project.techStacks.listInfo?.join(", ")}</p>
				{/* Project setting */}
				<div className="text-nowrap self-end border border-content/20 px-2 py-1 text-sm rounded-lg bg-neutral">
					{project.setting}
				</div>
			</div>
		</div>
	);
};
