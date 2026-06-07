import { ArrowSquareOutIcon, GithubLogoIcon } from "@phosphor-icons/react";
import { TerminalWindowPanel } from "../components/Common/TerminalWindowPanel";
import { Link } from "react-router";
import type { TProject } from "../types";
import { ProjectPanel } from "../components/ProjectsPage/ProjectPanel";

export const ProjectPage = () => {
	const projects: TProject[] = [
		{
			name: "Project 1",
			type: "Full-Stack",
			description:
				"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam neque in commodi minus, fuga iure.",
			tags: ["Tag 1", "Tag 2", "Tag 3", "Tag 4"],
		},
		{
			name: "Project 2",
			type: "Full-Stack",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem optio inventore a esse nisi eos voluptates ad obcaecati!",
			tags: ["Tag 1", "Tag 2", "Tag 3", "Tag 4"],
		},
		{
			name: "Project 3",
			type: "Unity Simulation",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam explicabo iste at illo odio!",
			tags: ["Tag 1", "Tag 2", "Tag 3", "Tag 4"],
		},
		{
			name: "Project 4",
			type: "Simulation",
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nihil molestias repellendus?",
			tags: ["Tag 1", "Tag 2", "Tag 3", "Tag 4"],
		},
		{
			name: "Project 5",
			type: "Full-Stack",
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, dolorum!",
			tags: ["Tag 1", "Tag 2", "Tag 3", "Tag 4"],
		},
		{
			name: "Project 6",
			type: "API",
			description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit animi est sunt.",
			tags: ["Tag 1", "Tag 2", "Tag 3", "Tag 4"],
		},
		{
			name: "Project 7",
			type: "Full-Stack",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ut doloribus ipsa magnam, ratione molestias.	",
			tags: ["Tag 1", "Tag 2", "Tag 3", "Tag 4"],
		},
	];

	const projectElements = projects.map((project) => <ProjectPanel project={project} />);

	return (
		<div className="flex flex-col gap-10 h-full justify-end">
			{/* Introduction */}
			<div className="flex flex-col gap-6 items-start">
				<p className="text-primary font-semibold">&gt;_ PROJECTS</p>
				<div className="flex flex-col items-end">
					<h1 className="font-medium text-5xl">
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
			<div className="grid grid-cols-3 gap-4">{projectElements}</div>
		</div>
	);
};
