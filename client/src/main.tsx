import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import { App } from "./App";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { SkillsPage } from "./pages/SkillsPage";
import { ProjectPage } from "./pages/ProjectPage";
import { ContactPage } from "./pages/ContactPage";
import { ProjectInformation } from "./components/ProjectsPage/ProjectInformation";
import { ABOUT_ROUTE, CONTACT_ROUTE, PROJECTS_ROUTE, SKILLS_ROUTE } from "./routes";
import { NotFoundPage } from "./pages/NotFoundPage";
import * as Sentry from "@sentry/react";
import { RootErrorBoundaryPage } from "./pages/RootErrorBoundaryPage";

Sentry.init({
	dsn: import.meta.env.VITE_SENTRY_DSN,
	tracesSampleRate: 0,
});

const router = createBrowserRouter([
	{
		path: "/",
		Component: App,
		ErrorBoundary: RootErrorBoundaryPage,
		children: [
			{ index: true, Component: HomePage },
			{ path: ABOUT_ROUTE, Component: AboutPage },
			{ path: SKILLS_ROUTE, Component: SkillsPage },
			{
				path: PROJECTS_ROUTE,
				Component: ProjectPage,
				children: [
					{
						path: ":projectId",
						Component: ProjectInformation,
					},
				],
			},
			{ path: CONTACT_ROUTE, Component: ContactPage },
			{ path: "*", Component: NotFoundPage },
		],
	},
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<HelmetProvider>
			<RouterProvider router={router} />
		</HelmetProvider>
	</StrictMode>,
);
