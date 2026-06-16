import { Link } from "react-router";
import { Button } from "../components/Common/Button";
import { QuickSocial } from "../components/HomePage/QuickSocial";
import { TerminalLoadingText } from "../components/HomePage/TerminalLoadingText";
import { ABOUT_ROUTE } from "../routes";

export const HomePage = () => {
	return (
		<div className="flex flex-col items-start gap-8 sm:gap-24 min-h-full">
			<TerminalLoadingText />
			<div className="grow flex flex-col gap-4 sm:gap-6 items-start bg-base/20 backdrop-blur-sm">
				{/* Name */}
				<h1 className="text-7xl sm:text-8xl font-medium font-chakra leading-14 sm:leading-20 text-shadow-lg">
					XUTAO
					<br />
					<span className="font-semibold text-primary">GAO_</span>
				</h1>
				{/* Title */}
				<p className="text-primary font-semibold text-shadow-sm">Software Engineer & Lifelong Learner</p>
				{/* Introduction */}
				<p className="text-content/60 max-w-100">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti possimus laborum vel at nulla
					quae, illo odio? Quia, architecto iusto?
				</p>
				<Link to={`/${ABOUT_ROUTE}`}>
					<Button>ABOUT ME</Button>
				</Link>
			</div>

			{/* Socials */}
			<div className="bg-base/20 backdrop-blur-xs">
				<QuickSocial />
			</div>
		</div>
	);
};
