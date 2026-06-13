import { ArrowSquareOutIcon, GithubLogoIcon } from "@phosphor-icons/react";
import { TerminalWindowPanel } from "../components/Common/TerminalWindowPanel";
import { Link, Outlet, useParams } from "react-router";
import { ProjectPanel } from "../components/ProjectsPage/ProjectPanel";
import { mockProjects } from "../data/projects";
import { twMerge } from "tailwind-merge";
import { CONTACT_ROUTE } from "../routes";
import { PageTransitionLink } from "../components/Common/PageTransitionLink";

export const ProjectPage = () => {
	const { projectId } = useParams();
	const isAnyProjectSelected = projectId != null;

	const projectElements = mockProjects.map((project) => (
		<ProjectPanel key={project.id} project={project} useCard={isAnyProjectSelected} />
	));

	return (
		<div className="flex flex-col gap-10 h-full justify-end">
			{/* Introduction */}
			<div className="self-start flex flex-col gap-6 items-start bg-base/20 backdrop-blur-sm">
				<p className="text-primary font-semibold">&gt;_ PROJECTS</p>
				<div className="flex flex-col items-end">
					<h1 className="font-medium text-5xl text-shadow-lg">
						Things I've <span className="font-bold text-primary">Built_</span>
					</h1>
				</div>
				<p className="text-content/60 max-w-100">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, aspernatur aperiam! Mollitia
					iste error at impedit eum et voluptatibus sed optio nostrum, nesciunt omnis eaque?
				</p>
			</div>

			{/* Github link */}
			<TerminalWindowPanel title="Locator" command="locate GitHub" className="self-start">
				<div className="border border-content/40 p-2 rounded-lg flex justify-between items-center gap-10">
					<GithubLogoIcon size={24} weight="bold" />
					github.com/XutaoG
					<Link to="https://github.com/XutaoG" target="_blank" rel="noreferrer">
						<ArrowSquareOutIcon size={24} weight="bold" />
					</Link>
				</div>
			</TerminalWindowPanel>

			{/* Projects */}
			<div className="flex gap-4">
				<div
					className={twMerge(`grid gap-4 content-start transition-[max-width] duration-300
						${isAnyProjectSelected ? "grid-cols-1 max-w-92" : "grid-cols-3 max-w-full"}`)}
				>
					{projectElements}
				</div>
				<Outlet />
			</div>

			<PageTransitionLink to={`/${CONTACT_ROUTE}`} message="Interested? Let's talk!" />
		</div>
	);
};
