import { Button } from "../components/Common/Button";
import { QuickSocial } from "../components/HomePage/QuickSocial";
import { TerminalLoadingText } from "../components/HomePage/TerminalLoadingText";

export const HomePage = () => {
	return (
		<div className="flex flex-col gap-24">
			<TerminalLoadingText />
			<div className="flex flex-col gap-6 items-start">
				{/* Name */}
				<h1 className="text-8xl font-medium font-chakra leading-20">
					XUTAO
					<br />
					<span className="font-semibold text-primary">GAO_</span>
				</h1>
				{/* Title */}
				<p className="text-primary font-semibold">Software Engineer & Lifelong Learner</p>
				{/* Introduction */}
				<p className="text-content/60 max-w-100">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti possimus laborum vel at nulla
					quae, illo odio? Quia, architecto iusto?
				</p>
				<Button>EXPLORE</Button>
			</div>

			{/* Socials */}
			<div className="absolute bottom-0 left-0">
				<QuickSocial />
			</div>
			{/* Work Status */}
			{/* <div className="absolute bottom-0 right-0">
				<QuickWorkStatus />
			</div> */}
		</div>
	);
};
