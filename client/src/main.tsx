import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
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

const router = createBrowserRouter([
	{
		path: "/",
		Component: App,
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
		<RouterProvider router={router} />
	</StrictMode>,
);
