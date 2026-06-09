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

const router = createBrowserRouter([
	{
		path: "/",
		Component: App,
		children: [
			{ index: true, Component: HomePage },
			{ path: "about", Component: AboutPage },
			{ path: "skills", Component: SkillsPage },
			{
				path: "projects",
				Component: ProjectPage,
				children: [
					{
						path: ":projectId",
						Component: ProjectInformation,
					},
				],
			},
			{ path: "contact", Component: ContactPage },
		],
	},
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
