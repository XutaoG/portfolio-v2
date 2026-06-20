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
			<p className="text-primary font-semibold">&gt;_ ERROR 404</p>
			<h1 className="font-medium text-6xl sm:text-7xl text-shadow-lg">
				Page <span className="text-primary font-semibold">Not Found_</span>
			</h1>
			<p className="text-content/70 font-medium max-w-80">
				The page you're looking for doesn't exist or has been moved.
			</p>
			<Button aria-label="Go back to home page" onClick={() => navigate("/")}>
				GO HOME
			</Button>
		</div>
	);
};
