import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import { App } from "./App";
import { ABOUT_ROUTE, CONTACT_ROUTE, PROJECTS_ROUTE, SKILLS_ROUTE } from "./routes";

const router = createBrowserRouter([
	{
		path: "/",
		Component: App,
		children: [
			{
				index: true,
				lazy: { Component: async () => (await import("./pages/HomePage")).HomePage },
			},
			{
				path: ABOUT_ROUTE,
				lazy: {
					Component: async () => (await import("./pages/AboutPage")).AboutPage,
				},
			},
			{
				path: SKILLS_ROUTE,
				lazy: {
					Component: async () => (await import("./pages/SkillsPage")).SkillsPage,
				},
			},
			{
				path: PROJECTS_ROUTE,
				lazy: {
					Component: async () => (await import("./pages/ProjectPage")).ProjectPage,
				},
				children: [
					{
						path: ":projectId",
						lazy: {
							Component: async () =>
								(await import("./components/ProjectsPage/ProjectInformation")).ProjectInformation,
						},
					},
				],
			},
			{
				path: CONTACT_ROUTE,
				lazy: {
					Component: async () => (await import("./pages/ContactPage")).ContactPage,
				},
			},
			{
				path: "*",
				lazy: {
					Component: async () => (await import("./pages/NotFoundPage")).NotFoundPage,
				},
			},
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
