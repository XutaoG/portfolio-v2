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
import { Fragment, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { projects } from "../../data/projects";
import { motion } from "framer-motion";
import { useMinWidth } from "../../hooks/useMinWidth";

export const ProjectInformation = () => {
	const navigate = useNavigate();
	const { projectId } = useParams();
	const isLg = useMinWidth("lg");

	useEffect(() => {
		const selectedProject = projects.find((project) => project.id === Number(projectId));
		if (!selectedProject) {
			navigate("/projects");
		}
	}, [navigate, projectId]);

	// Disable body overflow when modal is active
	useEffect(() => {
		if (!isLg) {
			document.body.classList.add("overflow-hidden");
			return () => {
				document.body.classList.remove("overflow-hidden");
			};
		}
	}, [isLg]);

	const handleClose = () => {
		navigate("/projects");
	};

	const content = (
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
					<p className="font-semibold">Project 1</p>
					{/* Project description */}
					<p className="font-sm text-content/70 line-clamp-2">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, sapiente?
					</p>
					{/* GitHub link */}
					<div className="border border-content/40 px-3 py-1.5 rounded-lg flex items-center gap-4">
						<GithubLogoIcon size={20} weight="bold" className="shrink-0" />
						GitHub
						<ArrowSquareOutIcon size={20} weight="bold" className="shrink-0" />
					</div>
				</div>

				<button
					onClick={handleClose}
					className="flex items-center gap-2 p-2 rounded-full border border-content/20 
					bg-base hover:scale-110 transition-all duration-300 active:bg-neutral"
				>
					<XIcon size={24} weight="bold" />
				</button>
			</div>

			<div className="p-6 flex flex-col gap-4 relative grow overflow-hidden">
				<div className="absolute -bottom-8 -right-8 w-1/2 aspect-square rounded-full bg-accent/10 blur-[192px]" />
				<div className="absolute -top-8 -left-8 w-1/2 aspect-square rounded-full bg-accent/10 blur-[192px]" />

				<div className="flex gap-2 overflow-x-scroll min-w-0 w-full">
					<div className="bg-neutral rounded-lg w-100 aspect-4/3 shrink-0" />
					<div className="bg-neutral rounded-lg w-100 aspect-4/3 shrink-0" />
					<div className="bg-neutral rounded-lg w-100 aspect-4/3 shrink-0" />
					<div className="bg-neutral rounded-lg w-100 aspect-4/3 shrink-0" />
				</div>

				<div className="flex gap-4 flex-wrap">
					{/* Description */}
					<ProjectInfoPanel
						icon={<LightbulbIcon size={24} weight="bold" />}
						title="Description"
						className="min-w-92 @xl:min-w-132 flex-1"
					>
						<p className="text-content/70">
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
						className="min-w-fit flex-1"
					>
						<div className="flex flex-col gap-2 text-content/70">
							<ListItem>Item 1</ListItem>
							<ListItem>Item 2</ListItem>
							<ListItem>Item 3</ListItem>
							<ListItem>Item 4</ListItem>
							<ListItem>Item 5</ListItem>
							<ListItem>Item 6</ListItem>
						</div>
					</ProjectInfoPanel>

					{/* My role  */}
					<ProjectInfoPanel
						icon={<UserCheckIcon size={24} weight="bold" />}
						title="My Role"
						className="flex-1 min-w-64"
					>
						<div className="flex flex-col gap-2 text-content/70">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae incidunt amet praesentium.
							<ListItem>Item 1</ListItem>
							<ListItem>Item 2</ListItem>
							<ListItem>Item 3</ListItem>
							<ListItem>Item 4</ListItem>
						</div>
					</ProjectInfoPanel>
				</div>

				<div className="flex gap-4 flex-wrap grow">
					<div className="flex flex-col gap-4 min-w-80 flex-1">
						{/* Time frame */}
						<ProjectInfoPanel icon={<CalendarIcon size={24} weight="bold" />} title="Time Frame">
							<div className="text-content/70 flex flex-col gap-2 items-end">
								Mar 2024 - Jun 2024
								<p className="text-primary font-medium">3 Months</p>
							</div>
						</ProjectInfoPanel>

						{/* Notable features */}
						<ProjectInfoPanel
							icon={<StarIcon size={24} weight="bold" />}
							title="Notable Features"
							className="flex-1"
						>
							<div className="flex flex-col gap-2 text-content/70">
								<ListItem>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias porro incidunt
									laborum culpa mollitia!
								</ListItem>
								<ListItem>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, optio.
								</ListItem>
								<ListItem>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, repellendus minus.
								</ListItem>
							</div>
						</ProjectInfoPanel>
					</div>

					{/* Engineering shallenges */}
					<ProjectInfoPanel
						icon={<FlagIcon size={24} weight="bold" />}
						title="Engineering Challenges"
						className="min-w-92 @xl:min-w-132 flex-1"
					>
						<div className="flex flex-col gap-2 text-content/70">
							<ListItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, optio.</ListItem>
							<ListItem>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, repellendus minus.
							</ListItem>
							<ListItem>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias porro incidunt laborum
								culpa mollitia!
							</ListItem>
							<ListItem>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit numquam eveniet impedit
								vitae aliquam dolorem distinctio, quas commodi dolor veniam?
							</ListItem>
						</div>
					</ProjectInfoPanel>

					{/* What I learned */}
					<ProjectInfoPanel
						icon={<GraduationCapIcon size={24} weight="bold" />}
						title="What I Leanred"
						className="min-w-92 @xl:min-w-132 flex-1"
					>
						<p className="text-content/70">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, enim! Ad voluptates obcaecati
							ipsam tempora nulla magni, placeat porro, ipsa ullam alias cum repudiandae officiis
							consequatur quam id vel labore sint delectus.
							<br />
							<br />
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore doloremque minus soluta
							beatae facere aspernatur iure eum? Nisi cupiditate ex eos ab.
						</p>
					</ProjectInfoPanel>
				</div>
			</div>
		</div>
	);

	if (!isLg) {
		return (
			<Fragment>
				<motion.div
					initial={{ opacity: 0, y: "100%" }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3, ease: "easeOut" }}
					style={{ width: "auto", height: "auto" }}
					className="fixed inset-(--page-container-margin-size) top-(--sidenav-top) z-50 overflow-y-auto
					bg-base @container rounded-xl border border-content/20"
				>
					{content}
				</motion.div>
				<div className="fixed inset-0 bg-base/20 backdrop-blur-sm" />
			</Fragment>
		);
	}

	return (
		<motion.div
			initial={{ width: 0, height: 0, opacity: 0 }}
			animate={{ width: "100%", height: "100%", opacity: 1 }}
			transition={{ duration: 0.3, ease: "easeOut" }}
			className="overflow-hidden static bg-base overflow-y-auto @container rounded-xl border border-content/20 min-w-0 min-h-0"
		>
			{content}
		</motion.div>
	);
};
