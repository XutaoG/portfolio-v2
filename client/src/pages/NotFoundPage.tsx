import { useNavigate } from "react-router";
import { Helmet } from "react-helmet-async";
import { Button } from "../components/Common/Button";

export const NotFoundPage = () => {
	const navigate = useNavigate();

	return (
		<div className="flex flex-col items-center justify-center min-h-full gap-6 text-center pointer-events-auto">
			<Helmet>
				<title>404 — Xutao Gao</title>
				<meta
					name="description"
					content="The page you're looking for doesn't exist or has been moved. Return to Home page."
				/>
			</Helmet>
			<p className="text-primary font-semibold text-lg">&gt;_ ERROR 404</p>
			<h1 className="font-medium text-5xl sm:text-6xl text-shadow-lg max-w-120">
				You opened the wrong <span className="text-primary font-semibold">door_</span>
			</h1>
			<p className="text-content/70 font-medium max-w-120">This part of the room hasn't been built yet.</p>
			<Button aria-label="Go back to home page" onClick={() => navigate("/")}>
				RETURN TO BASE
			</Button>
		</div>
	);
};
