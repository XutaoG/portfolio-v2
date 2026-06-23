import { useNavigate, useRouteError } from "react-router";
import * as Sentry from "@sentry/react";
import { useEffect } from "react";
import { Button } from "../components/Common/Button";
import { Helmet } from "react-helmet-async";

export const RootErrorBoundaryPage = () => {
	const navigate = useNavigate();
	const error = useRouteError();

	useEffect(() => {
		Sentry.captureException(error);
	}, [error]);

	return (
		<div
			className="min-h-screen bg-base flex flex-col items-center justify-center gap-6 text-center 
			pointer-events-auto p-(--page-container-margin-size)"
		>
			<Helmet>
				<title>Error :&#40;</title>
				<meta name="description" content="An unexpected error has occurred." />
			</Helmet>
			<p className="text-primary font-semibold text-lg">&gt;_ UNEXPECTED ERROR OCCURRED</p>
			<h1 className="font-medium text-4xl sm:text-5xl text-shadow-lg max-w-120">
				The simulation encountered an <span className="text-primary font-semibold">unexpected state_ </span>
			</h1>
			<p>Reloading reality may resolve the issue.</p>
			<Button aria-label="Go back to home page" onClick={() => navigate("/")}>
				RELOAD REALITY
			</Button>
		</div>
	);
};
