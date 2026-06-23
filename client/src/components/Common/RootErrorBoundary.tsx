import { useNavigate } from "react-router";
import { Button } from "./Button";

export const RootErrorBoundary = () => {
	const navigate = useNavigate();

	return (
		<div className="flex flex-col gap-6 sm:gap-10 items-center justify-center bg-base min-h-screen">
			<h1 className="font-medium text-5xl sm:text-6xl text-shadow-lg">
				Well, this is <span className="text-primary font-semibold">awkward_ </span>
			</h1>
			<p>An unexpected error happened :&#40;</p>
			<Button aria-label="Go back to home page" onClick={() => navigate("/")}>
				GO TO SAFETY
			</Button>
		</div>
	);
};
