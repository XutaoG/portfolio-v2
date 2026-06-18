import {
	AppWindowIcon,
	ArrowSquareOutIcon,
	CalendarIcon,
	FlagIcon,
	GithubLogoIcon,
	GraduationCapIcon,
	LightbulbIcon,
	StackIcon,
	StarIcon,
	UserCheckIcon,
	XIcon,
} from "@phosphor-icons/react";
import { ProjectInfoPanel } from "./ProjectInfoPanel";
import { ListItem } from "../Common/ListItem";
import { Fragment, useCallback, useEffect, useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { projects } from "../../data/projects";
import { motion } from "framer-motion";
import { useMinWidth } from "../../hooks/useMinWidth";
import type { TProjectSectionInfo } from "../../types";

export const ProjectInformation = () => {
	const navigate = useNavigate();
	const { projectId } = useParams();
	const isLg = useMinWidth("lg");

	const closePanel = useCallback(() => {
		navigate("/projects");
	}, [navigate]);

	const project = projects.find((p) => p.id === projectId);

	useEffect(() => {
		if (!project) {
			closePanel();
		}
	}, [closePanel, project]);

	// Disable body overflow when modal is active
	useEffect(() => {
		if (!isLg) {
			document.body.classList.add("overflow-hidden");
			return () => {
				document.body.classList.remove("overflow-hidden");
			};
		}
	}, [isLg]);

	const buildProjectSection = (section: TProjectSectionInfo) => {
		const textElements =
			section.textInfo &&
			section.textInfo.map((paragraph, i, textInfo) => {
				return (
					<Fragment>
						<p>{paragraph}</p>
						{i < textInfo.length - 1 && (
							<Fragment>
								<br />
								<br />
							</Fragment>
						)}
					</Fragment>
				);
			});

		const listElements =
			section.listInfo &&
			section.listInfo.map((item) => {
				return <ListItem key={item}>{item}</ListItem>;
			});

		return (
			<div className="flex flex-col gap-2 text-content/70">
				{textElements}
				{listElements}
			</div>
		);
	};

	const projectImages = useMemo(() => {
		return (
			project?.imageLinks &&
			[...Array(project.imageLinks.count)].map((_, i) => {
				const paddedIndex = (i + 1).toString().padStart(2, "0");
				return (
					<img
						loading="lazy"
						src={`/project-images/${project.imageLinks.prefix}-${paddedIndex}${project.imageLinks.fileFormat}`}
						className="rounded-lg h-75 shrink-0"
					/>
				);
			})
		);
	}, [project]);

	const content = project && (
		<div className="flex flex-col min-h-full">
			<div className="p-6 flex items-start gap-4 sticky top-0 z-40 bg-base border-b border-content/20">
				{/* Icon */}
				<div className="p-1 rounded-lg bg-base border border-content/20">
					<div className="bg-linear-to-br from-indigo-700 to-indigo-400 rounded-lg p-1">
						<AppWindowIcon size={48} />
					</div>
				</div>

				<div className="flex flex-col gap-2 items-start grow">
					{/* Project name */}
					<p className="font-medium text-lg">{project.name}</p>
					{/* Project subheading */}
					<p className="font-sm text-content/70 line-clamp-2">{project.subheading}</p>
					{/* GitHub link */}
					{project.gitHubLink && (
						<Link
							to={project.gitHubLink}
							target="_blank"
							rel="noreferrer"
							className="border border-content/40 px-3 py-1.5 rounded-lg flex items-center gap-4"
						>
							<GithubLogoIcon size={20} weight="bold" className="shrink-0" />
							GitHub
							<ArrowSquareOutIcon size={20} weight="bold" className="shrink-0" />
						</Link>
					)}
				</div>

				<button
					onClick={closePanel}
					className="flex items-center gap-2 p-2 rounded-full border border-content/20 
					bg-base hover:scale-110 transition-all duration-300 active:bg-neutral"
				>
					<XIcon size={24} weight="bold" />
				</button>
			</div>

			<div className="p-6 flex flex-col gap-4 relative grow overflow-hidden">
				<div className="absolute -bottom-8 -right-8 w-1/2 aspect-square rounded-full bg-accent/10 blur-[192px]" />
				<div className="absolute -top-8 -left-8 w-1/2 aspect-square rounded-full bg-accent/10 blur-[192px]" />

				<div className="flex gap-2 overflow-x-scroll min-w-0 w-full">{projectImages}</div>

				<div className="flex gap-4 flex-wrap grow">
					{/* Description */}
					<ProjectInfoPanel
						icon={<LightbulbIcon size={24} weight="bold" />}
						title="Description"
						className="min-w-92 @xl:min-w-132 flex-1"
					>
						{buildProjectSection(project.description)}
					</ProjectInfoPanel>

					{/* Tech stack  */}
					<ProjectInfoPanel
						icon={<StackIcon size={24} weight="bold" />}
						title="Tech Stack"
						className="min-w-fit flex-1"
					>
						{buildProjectSection(project.techStacks)}
					</ProjectInfoPanel>

					{/* My role  */}
					{project.myRole && (
						<ProjectInfoPanel
							icon={<UserCheckIcon size={24} weight="bold" />}
							title="My Role"
							className="flex-1 min-w-92"
						>
							{buildProjectSection(project.myRole)}
						</ProjectInfoPanel>
					)}

					<div className="flex flex-col gap-4 min-w-80 flex-1">
						{/* Time frame */}
						<ProjectInfoPanel icon={<CalendarIcon size={24} weight="bold" />} title="Time Frame">
							<div className="text-content/70 flex flex-col gap-2 items-end">
								{project.timeFrame.start} - {project.timeFrame.end}
								<p className="text-primary font-medium">{project.timeFrame.duration}</p>
							</div>
						</ProjectInfoPanel>

						{/* Notable features */}
						<ProjectInfoPanel
							icon={<StarIcon size={24} weight="bold" />}
							title="Notable Features"
							className="flex-1"
						>
							{buildProjectSection(project.notableFeatures)}
						</ProjectInfoPanel>
					</div>

					{/* Engineering shallenges */}
					{project.engineeringChallenges && (
						<ProjectInfoPanel
							icon={<FlagIcon size={24} weight="bold" />}
							title="Engineering Challenges"
							className="min-w-92 @xl:min-w-132 flex-1"
						>
							{buildProjectSection(project.engineeringChallenges)}
						</ProjectInfoPanel>
					)}

					{/* What I learned */}
					<ProjectInfoPanel
						icon={<GraduationCapIcon size={24} weight="bold" />}
						title="What I Leanred"
						className="min-w-92 @xl:min-w-132 flex-1"
					>
						{buildProjectSection(project.whatILearned)}
					</ProjectInfoPanel>
				</div>
			</div>
		</div>
	);

	return (
		<Fragment>
			<motion.div
				initial={{ opacity: 0, y: isLg ? 0 : "100%", width: isLg ? 0 : "auto", height: isLg ? 0 : "auto" }}
				animate={{ opacity: 1, y: 0, width: isLg ? "100%" : "auto", height: isLg ? "100%" : "auto" }}
				transition={{ duration: 0.3, ease: "easeOut" }}
				className="fixed inset-(--page-container-margin-size) top-(--sidenav-top) lg:static z-50 lg:z-auto overflow-y-auto
				bg-base @container rounded-xl border border-content/20"
			>
				{content}
			</motion.div>
			<div className="fixed lg:hidden inset-0 bg-base/20 backdrop-blur-sm" />
		</Fragment>
	);
};
