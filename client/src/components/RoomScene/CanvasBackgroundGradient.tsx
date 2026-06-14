import { useLocation } from "react-router";
import { HOME_ROUTE } from "../../routes";
import { twMerge } from "tailwind-merge";

export const CanvasBackgroundGradient = () => {
	const location = useLocation();
	const topLevelPath = location.pathname.split("/")[1];

	const showBackgroundGradient = topLevelPath != HOME_ROUTE;

	return (
		<div
			className={twMerge(
				`absolute inset-0 transition-opacity duration-300 opacity-0 ${showBackgroundGradient && "opacity-100"}`,
			)}
		>
			<div className="relative size-full">
				<div className="absolute inset-0 bg-base/10" />
				<div className="absolute inset-0 bg-linear-to-r from-5% from-base to-35% to-transparent" />
				<div className="absolute inset-0 bg-linear-to-l from-5% from-base to-35% to-transparent" />
				<div className="absolute inset-0 bg-linear-to-b from-10% from-base to-35% to-transparent" />
				<div className="absolute inset-0 bg-linear-to-t from-5% from-base to-35% to-transparent" />
			</div>
		</div>
	);
};
