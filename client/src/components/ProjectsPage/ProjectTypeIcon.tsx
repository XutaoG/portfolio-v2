import { AppWindowIcon, CodeIcon, GameControllerIcon, GearSixIcon, UsersThreeIcon } from "@phosphor-icons/react";
import type { TProject } from "../../types";
import { useMemo } from "react";
import { GradientColorContainer } from "../Common/GradientColorContainer";

interface ProjectTypeIconProps {
	project: TProject;
}

export const ProjectTypeIcon = ({ project }: ProjectTypeIconProps) => {
	const iconElement = useMemo(() => {
		switch (project.iconCategory) {
			case "Web":
				return <AppWindowIcon size={40} />;
			case "Logic":
				return <GearSixIcon size={40} />;
			case "Game":
				return <GameControllerIcon size={40} />;
			case "Creative":
				return <CodeIcon size={40} />;
			case "Team":
				return <UsersThreeIcon size={40} />;
		}
	}, [project]);

	return useMemo(() => {
		return (
			<GradientColorContainer
				className="p-2 rounded-lg"
				fromElementHashStr={project.id}
				toElementHashStr={project.name}
			>
				{iconElement}
			</GradientColorContainer>
		);
	}, [iconElement, project]);
};
