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
	XCircleIcon,
} from "@phosphor-icons/react";
import { ProjectInfoPanel } from "./ProjectInfoPanel";
import { ListItem } from "../Common/ListItem";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { twMerge } from "tailwind-merge";
import { mockProjects } from "../../data/projects";

export const ProjectInformation = () => {
	const navigate = useNavigate();
	const [isVisible, setIsVisible] = useState(false);
	const { projectId } = useParams();

	useEffect(() => {
		const frame = requestAnimationFrame(() => setIsVisible(true));
		return () => cancelAnimationFrame(frame);
	}, []);

	useEffect(() => {
		const selectedProject = mockProjects.find((project) => project.id === Number(projectId));
		if (!selectedProject) {
			navigate("/projects");
		}
	}, [navigate, projectId]);

	const handleClose = () => {
		setIsVisible(false);
		navigate("/projects");
	};

	return (
		<div
			className={twMerge(
				"flex-1 overflow-hidden transition-[max-width] duration-300",
				isVisible ? "max-w-full" : "max-w-0",
			)}
		>
			<div className="w-full flex flex-col border border-content/20 rounded-xl bg-base min-w-0">
				<div className="p-8 pb-6 flex items-start gap-4">
					{/* Icon */}
					<div className="p-1 rounded-lg bg-base border border-content/20">
						<div className="bg-linear-to-br from-indigo-700 to-indigo-400 rounded-lg p-1">
							<AppWindowIcon size={48} />
						</div>
					</div>

					<div className="flex flex-col gap-2 items-start grow">
						{/* Project name */}
						<p className="font-semibold">Project 1</p>
						{/* Project description */}
						<p className="font-sm text-content/60 line-clamp-2">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, sapiente?
						</p>
						{/* GitHub link */}
						<div className="border border-content/20 px-2 py-1 rounded-sm flex items-center gap-4 text-sm">
							<GithubLogoIcon size={16} weight="bold" />
							GitHub
							<ArrowSquareOutIcon size={16} weight="bold" />
						</div>
					</div>

					<button
						onClick={handleClose}
						className="flex items-center gap-2 px-2 py-1 rounded-lg border border-content/20"
					>
						<XCircleIcon size={20} />
						Close
					</button>
				</div>

				<div className="grow p-6 border-t border-content/20 flex flex-col gap-6 relative">
					<div className="absolute -bottom-8 -right-8 w-1/2 aspect-square rounded-full bg-accent/10 blur-[192px]" />
					<div className="absolute -top-8 -left-8 w-1/2 aspect-square rounded-full bg-accent/10 blur-[192px]" />

					<div className="flex gap-2 overflow-x-scroll">
						<div className="bg-neutral rounded-lg h-75 aspect-4/3" />
						<div className="bg-neutral rounded-lg h-75 aspect-4/3" />
						<div className="bg-neutral rounded-lg h-75 aspect-4/3" />
						<div className="bg-neutral rounded-lg h-75 aspect-4/3" />
					</div>

					<div className="flex gap-4">
						{/* Description */}
						<ProjectInfoPanel icon={<LightbulbIcon size={24} weight="bold" />} title="Description">
							<p className="text-content/60 text-sm">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias veniam dolores quos,
								sapiente non vel quo libero recusandae deserunt nemo.
								<br />
								<br />
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
							</p>
						</ProjectInfoPanel>

						{/* Tech stack  */}
						<ProjectInfoPanel
							icon={<StackIcon size={24} weight="bold" />}
							title="Tech Stack"
							className="min-w-fit"
						>
							<div className="flex flex-col gap-2 text-content/60 text-sm">
								<ListItem>Item 1</ListItem>
								<ListItem>Item 2</ListItem>
								<ListItem>Item 3</ListItem>
								<ListItem>Item 4</ListItem>
								<ListItem>Item 5</ListItem>
								<ListItem>Item 6</ListItem>
							</div>
						</ProjectInfoPanel>

						{/* My role  */}
						<ProjectInfoPanel icon={<UserCheckIcon size={24} weight="bold" />} title="My Role">
							<div className="flex flex-col gap-2 text-content/60 text-sm">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae incidunt amet praesentium.
								<ListItem>Item 1</ListItem>
								<ListItem>Item 2</ListItem>
								<ListItem>Item 3</ListItem>
								<ListItem>Item 4</ListItem>
							</div>
						</ProjectInfoPanel>
					</div>

					<div className="flex gap-4">
						<div className="flex flex-col gap-4 min-w-80">
							{/* Time frame */}
							<ProjectInfoPanel icon={<CalendarIcon size={24} weight="bold" />} title="Time Frame">
								<div className="text-content/60 text-sm flex flex-col gap-2 items-end">
									Mar 2024 - Jun 2024
									<p className="text-primary font-medium">3 Months</p>
								</div>
							</ProjectInfoPanel>

							{/* Notable features */}
							<ProjectInfoPanel
								icon={<StarIcon size={24} weight="bold" />}
								title="Notable Features"
								className="grow"
							>
								<div className="flex flex-col gap-2 text-content/60 text-sm">
									<ListItem>
										Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias porro incidunt
										laborum culpa mollitia!
									</ListItem>
									<ListItem>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, optio.
									</ListItem>
									<ListItem>
										Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, repellendus
										minus.
									</ListItem>
								</div>
							</ProjectInfoPanel>
						</div>

						{/* Engineering shallenges */}
						<ProjectInfoPanel icon={<FlagIcon size={24} weight="bold" />} title="Engineering Challenges">
							<div className="flex flex-col gap-2 text-content/60 text-sm">
								<ListItem>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, optio.
								</ListItem>
								<ListItem>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, repellendus minus.
								</ListItem>
								<ListItem>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias porro incidunt
									laborum culpa mollitia!
								</ListItem>
								<ListItem>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit numquam eveniet
									impedit vitae aliquam dolorem distinctio, quas commodi dolor veniam?
								</ListItem>
							</div>
						</ProjectInfoPanel>

						{/* What I learned */}
						<ProjectInfoPanel icon={<GraduationCapIcon size={24} weight="bold" />} title="What I Leanred">
							<p className="text-content/60 text-sm">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, enim! Ad voluptates
								obcaecati ipsam tempora nulla magni, placeat porro, ipsa ullam alias cum repudiandae
								officiis consequatur quam id vel labore sint delectus.
								<br />
								<br />
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore doloremque minus
								soluta beatae facere aspernatur iure eum? Nisi cupiditate ex eos ab.
							</p>
						</ProjectInfoPanel>
					</div>
				</div>
			</div>
		</div>
	);
};
