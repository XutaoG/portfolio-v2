import type { TProject } from "../types";

export const projects: TProject[] = [
	{
		id: "o8bvj1",
		name: "DHS Incident Command Simulation",
		type: "Crowd Simulation",
		iconCategory: "Game",
		setting: "Professional Work",
		subheading: "Large-Scale Crowd Behavior and Evacuation Simulation.",
		techStacks: {
			listInfo: ["Unity Engine", "Unity DOTS", "Cesium"],
		},
		description: {
			textInfo: [
				"DHS Incident Command Simulation is a large-scale crowd simulation platform developed to model emergency evacuation scenarios within the Washington D.C. National Mall.",
				"Built using Unity DOTS, ECS, and Cesium, the system simulates tens of thousands of agents in real time, enabling analysis of crowd behavior, evacuation efficiency, and incident response under dynamically changing conditions.",
			],
		},
		timeFrame: {
			start: "Mar 2026",
			end: "May 2026",
			duration: "3 months",
		},
		myRole: {
			textInfo: [
				"I designed and implemented the core simulation architecture, including agent behavior changes, state-transition system, flow field navigation, and ECS-based workflow. My work focused on building scalable simulation systems capable of supporting tens of thousands of concurrent agents while maintaining real-time performance.",
			],
		},
		notableFeatures: {
			listInfo: [
				"Mass-Agent Simulation: Simulated tens of thousands of autonomous agents using Unity DOTS and ECS.",
				"Flow Field Navigation: Implemented scalable pathfinding optimized for large-scale evacuation scenarios.",
				"Behavioral State Modeling: Simulated panic, investigation, freezing, and evacuation behaviors through configurable state transitions.",
				"Dynamic Scenario Configuration: Supported runtime crowd generation, obstacle placement, and incident triggering.",
			],
		},
		engineeringChallenges: {
			listInfo: [
				"Redesigned simulation systems around ECS and data-oriented design principles to achieve real-time performance at large agent counts.",
				"Implemented flow field navigation to replace computationally expensive per-agent pathfinding algorithms.",
				"Optimized memory layout, job scheduling, and system execution to maintain stable performance under varying crowd densities.",
			],
		},
		whatILearned: {
			textInfo: [
				"This project improved my understanding of data-oriented architecture, multi-threaded processing, and large-scale simulation design. I learned how to better optimize memory access patterns, leverage ECS and Burst-compiled systems, and implement scalable navigation techniques that remain performant when simulating tens of thousands of concurrent agents.",
			],
		},
		imageLinks: { prefix: "dhs-incident-command", count: 5, fileFormat: ".webp" },
	},
	{
		id: "usnv23",
		name: "MeDT Dashboard",
		type: "Microchip Simulation",
		iconCategory: "Logic",
		setting: "Professional Work",
		subheading: "Semiconductor manufacturing simulation and digital twin platform.",
		techStacks: {
			listInfo: ["Angular", "Nest.js", "three.js", "Supabase"],
		},
		description: {
			textInfo: [
				"MeDT Dashboard is a manufacturing simulation platform that models semiconductor fabrication workflows across 44 machines and 22 production processes.",
				"The system combines a discrete-event simulation engine with a real-time 3D digital twin, enabling users to analyze throughput, evaluate operational constraints, and perform what-if analysis across staffing, maintenance, production routing, and order volume scenarios.",
			],
		},
		timeFrame: {
			start: "Sep 2025",
			end: "Feb 2026",
			duration: "6 months",
		},
		myRole: {
			textInfo: [
				"I architected and developed the simulation engine, state management systems, and WebGL-based digital twin that power the platform.",
				"My responsibilities also included: ",
			],
			listInfo: [
				"Modeling fabrication workflows.",
				"Implementing event scheduling and lifecycle management.",
				"Optimizing simulation performance.",
				"Building tooling for operational analysis and bottleneck detection.",
			],
		},
		notableFeatures: {
			listInfo: [
				"Discrete-Event Simulation Engine: Modeled fabrication workflows using event scheduling rather than continuous state evaluation.",
				"Real-Time 3D Digital Twin: Visualized machine states, worker activity, product lots, and operational metrics through an interactive WebGL environment.",
				"What-If Scenario Analysis: Simulated the impact of staffing, maintenance, machine configurations, production flows, and order volume changes.",
				"Accelerated Simulation Execution: Supported configurable simulation speeds from 1X to 200X for rapid operational analysis.",
			],
		},
		engineeringChallenges: {
			listInfo: [
				"Redesigned the simulation engine around an event-driven architecture to eliminate unnecessary state evaluations and reduce computational overhead.",
				"Optimized synchronization between simulation state and 3D visualization layers while maintaining real-time responsiveness.",
				"Modeled configurable manufacturing workflows capable of supporting arbitrary production routes without hardcoded process definitions.",
			],
		},
		whatILearned: {
			textInfo: [
				"Developing the MeDT Dashboard deepened my understanding of simulation architecture, event-driven systems, and performance engineering. I gained experience designing discrete-event simulations, modeling complex operational workflows, and optimizing state processing through lifecycle-based execution. The project also reinforced the importance of state statement and rendering efficiency when building large-scale systems.",
			],
		},
		imageLinks: { prefix: "medt-dashboard", count: 6, fileFormat: ".webp" },
	},
	{
		id: "7bj24l",
		name: "Psycall PGY4 Scheduler",
		type: "Scheduler App",
		gitHubLink: "https://github.com/lbrown169/Medical-Resident-Scheduling",
		iconCategory: "Logic",
		setting: "Senior Design Project",
		subheading: "Constraint-based scheduling platform for medical resident rotation planning.",
		techStacks: {
			listInfo: ["ASP.NET Core", "Entity Framework Core", "Docker", "MySQL Server", "SwaggerHub"],
		},
		description: {
			textInfo: [
				"Psycall PGY4 Scheduler is a scheduling platform developed for Orlando Health that automates the generation of year-long resident rotation schedules.",
				"The system combines constraint-based scheduling, optimization heuristics, and real-time validation to ensure resident preferences, staffing requirements, and organizational schedule constraints, replacing the email/spreadsheet with a streamlined process.",
			],
		},
		timeFrame: {
			start: "Dec 2025",
			end: "May 2026",
			duration: "6 months",
		},
		myRole: {
			listInfo: [
				"I architected and developed the scheduling engine, implementing backtracking, constraint evaluation, and fitness-based optimization algorithms to generate valid resident schedules.",
				"I also built the backend API responsible for resident preference submission, schedule generation endpoints, constraint analysis, and administrator-driven schedule modifications.",
			],
		},
		notableFeatures: {
			listInfo: [
				"Constraint-Based Schedule Generation: Produced valid yearly schedules while satisfying organizational and staffing requirements.",
				"Fitness-Driven Optimization: Evaluated candidate schedules using scoring functions based on fairness, preference satisfaction, and workload distribution.",
				"Administrative Schedule Overrides: Supported manual schedule overrides while preserving constraint compliance.",
				"Real-Time Constraint Analysis: Continuously validated scheduling rules and conflicts during generation and manual editing.",
			],
		},
		engineeringChallenges: {
			listInfo: [
				"Optimized backtracking performance through search-space pruning and efficient constraint evaluation strategies.",
				"Designed a flexible constraint architecture capable of supporting evolving scheduling requirements without algorithm rewrites.",
				"Translated subjective scheduling goals such as fairness and preference satisfaction into quantifiable metrics.",
			],
		},
		whatILearned: {
			textInfo: [
				"This project deepened my understanding of constraint satisfaction problems, heuristic optimization, and algorithm design. I gained experience modeling complex scheduling rules as composable constraints, reducing computational complexity through search-space pruning, and developing scoring systems that objectively evaluate schedule quality across competing scheduling objectives.",
			],
		},
		imageLinks: { prefix: "psycall", count: 4, fileFormat: ".webp" },
	},
	{
		id: "vj21mc",
		name: "Florida Semiconductor Engine Digital Marketplace",
		type: "Full-Stack",
		iconCategory: "Web",
		setting: "Professional Work",
		subheading: "Enterprise digital marketplace platform for asset discovery and management.",
		techStacks: {
			listInfo: [
				"React TypeScript",
				"ASP.NET Core",
				"Entity Framework Core",
				"Tailwindcss",
				"MS SQL Server",
				"Azure",
			],
		},
		description: {
			textInfo: [
				"The Florida Semiconductor Engine Digital Marketplace is a multi-tenant enterprise platform used by 10+ universities and industry partners to manage, discover, and share physical and digital assets. The system centralizes asset lifecycle management, approval workflows, and cross-organization collaboration through a unified marketplace architecture.",
			],
		},
		timeFrame: {
			start: "Mar 2025",
			end: "Sep 2025",
			duration: "6 months",
		},
		notableFeatures: {
			listInfo: [
				"Role-Based Access Control: Implemented hierarchical permissions supporting organization owners, administrators, and members across multiple organizations.",
				"Configurable Approval Workflows: Includes asset submission, review, approval, and publication through a multi-stage pipelines.",
				"Metadata-Driven Form Engine: Generated forms, validation rules, and input behavior from database-managed configurations.",
			],
		},
		engineeringChallenges: {
			listInfo: [
				"Built a metadata-driven form architecture capable of supporting diverse asset types, validation requirements, and workflow configurations without code changes.",
				"Modeled complex relationships between organizations, users, assets, permissions, and approval states while maintaining data integrity and query performance.",
				"Optimized search and filtering operations across large asset inventories while preserving responsive user interactions.",
			],
		},
		whatILearned: {
			textInfo: [
				"This project deepened my understanding of enterprise application architecture, particularly in the areas of authorization and database design. I gained experience designing database-driven systems, implementing access patterns, and structuring relational schemas that support complex business processes while remaining scalable and maintainable.",
			],
		},
		imageLinks: { prefix: "asset-manager", count: 7, fileFormat: ".webp" },
	},
	{
		id: "53mvk1",
		name: "Pantrify",
		type: "Full-Stack",
		gitHubLink: "https://github.com/XutaoG/pantrify",
		setting: "Solo Development",
		iconCategory: "Web",
		subheading: "Web application that simplifies recipe storage, organization, and discovery.",
		techStacks: {
			listInfo: ["Next.js", "React", "ASP.NET Core", "Entity Framework Core", "Azure Data Studio", "Tailwindcss"],
		},
		description: {
			textInfo: [
				"Pantrify is a full-stack recipe management platform that enables users to organize, search, and share recipe collections. Built with Next.js and ASP.NET Core, the application manages complex relationships between recipes, ingredients, shopping lists, and user-generated content through a structured relational data model.",
			],
		},
		timeFrame: {
			start: "Sep 2025",
			end: "Dec 2025",
			duration: "4 months",
		},
		notableFeatures: {
			listInfo: [
				"Advanced Search & Filtering: Supported full and partial matching across recipes and ingredients with lazy-loaded results.",
				"JWT Authentication: Secured user accounts and workflows through JWT.",
				"Recipe Collection Sharing: Enabled users to share recipe libraries while maintaining ownership and access controls.",
				"Ingredient Inventory Tracking: Compared recipe requirements against available ingredients to identify missing items.",
			],
		},
		engineeringChallenges: {
			listInfo: [
				"Designed a relational schema supporting recipes, ingredients, categories, inventories, and user-generated content.",
				"Implemented reusable form architectures to manage complex recipe and ingredient CRUD workflows.",
				"Maintained data consistency across interconnected entities while supporting flexible editing and sharing capabilities.",
			],
		},
		whatILearned: {
			textInfo: [
				"Building Pantrify strengthened my understanding of relational database design and Entity Framework Core. Building the platform exposed me to modeling complex entity relationships, managing transactional CRUD operations, and designing APIs that efficiently serve interconnected datasets.",
			],
		},
		imageLinks: { prefix: "pantrify", count: 4, fileFormat: ".webp" },
	},
	{
		id: "w1nv42",
		name: "Portfolio V1",
		type: "Full-Stack",
		gitHubLink: "https://github.com/XutaoG/portfolio",
		iconCategory: "Creative",
		setting: "Solo Development",
		subheading: "Full-stack personal portfolio built to highlight personal and professional growth.",
		techStacks: {
			listInfo: ["React TypeScript", "Express.js", "MongoDB", "Vercel & Render", "GoDaddy", "Cloudinary"],
		},
		description: {
			textInfo: [
				"Portfolio V1 is a full-stack web application built to showcase projects, technical skills, and professional experience.",
				"The platform combines a React frontend with an Express and MongoDB backend, leveraging Cloudinary for image storage and cloud-hosted infrastructure for hosting and content delivery.",
			],
		},
		timeFrame: {
			start: "Aug 2025",
			end: "Aug 2025",
			duration: "1 month",
		},
		notableFeatures: {
			listInfo: [
				"Cloud-Based Asset Management: Integrated Cloudinary for image storage, optimization, and delivery.",
				"Responsive Portfolio Architecture: Delivered a consistent user experience across desktop and mobile devices.",
				"Full-Stack Content Platform: Served project data and media through a custom Express and MongoDB backend.",
			],
		},
		whatILearned: {
			textInfo: [
				"Building this portfolio (V1) introduced me to many aspects of production application deployment beyond feature development. I gained experience integrating third-party cloud services, managing distributed deployment environments, and optimizing asset delivery pipelines while building a maintainable full-stack architecture.",
			],
		},
		imageLinks: { prefix: "portfolio-v1", count: 4, fileFormat: ".webp" },
	},
	{
		id: "xffl12",
		name: "DevFusion",
		type: "Web + Mobile Application",
		gitHubLink: "https://github.com/Gersh01/Dev-Fusion",
		iconCategory: "Team",
		setting: "Team Project",
		subheading: "Cross-platform developer collaboration platform for project discovery and team formation.",
		techStacks: {
			listInfo: ["React", "Express.js", "MongoDB", "Heroku", "GoDaddy", "Flutter"],
		},
		description: {
			textInfo: [
				"DevFusion is a full-stack collaboration platform that connects developers through shared projects and technical interests. Built for both web and mobile, the application provides project discovery, team management, and skill-based matching capabilities through a unified backend architecture serving web and mobile clients.",
			],
		},
		timeFrame: {
			start: "Jun 2024",
			end: "Aug 2024",
			duration: "3 month",
		},
		notableFeatures: {
			listInfo: [
				"Cross-Platform Architecture: Delivered a shared backend powering both React web and Flutter mobile applications.",
				"Skill-Based Project Discovery: Matched developers to projects using searchable skills and project requirements.",
				"JWT Authentication & Authorization: Secured user accounts and project management workflows through JWT.",
				"Project & Team Management: Supported project creation, member management, and role assignment across development teams.",
			],
		},
		engineeringChallenges: {
			listInfo: [
				"Designed API contracts that maintained consistent behavior across both React and Flutter clients.",
				"Modeled complex relationships between users, projects, memberships, and skill sets within MongoDB.",
				"Maintained equivalent features across web and mobile platforms while minimizing duplicated business logic.",
			],
		},
		whatILearned: {
			textInfo: [
				"DevFusion strengthened my understanding of multi-platform application API design. I gained experience designing RESTful services, modeling interconnected datasets in MongoDB, and building a shared backend capable of supporting both web and mobile clients while maintaining consistent functionality across platforms.",
			],
		},
		imageLinks: { prefix: "dev-fusion", count: 3, fileFormat: ".webp" },
	},
	{
		id: "v2kf0g",
		name: "WeatherWing",
		type: "Front-end",
		gitHubLink: "https://github.com/XutaoG/weather-forecast-app",
		iconCategory: "Creative",
		setting: "Solo Development",
		subheading: "Real-time weather analytics platform with interactive forecast visualization.",
		techStacks: {
			listInfo: ["React", "TypeScript", "Redux Toolkit Query", "Recharts", "Tailwindcss", "tomorrow.io"],
		},
		description: {
			textInfo: [
				"WeatherWing is a React-based weather analytics application that retrieves forecast data from Tomorrow.io and transforms it into interactive visualizations.",
				"The platform provides hourly and weekly weather insights through responsive dashboards, enabling users to quickly analyze climate trends and conditions.",
			],
		},
		timeFrame: {
			start: "Feb 2024",
			end: "Mar 2024",
			duration: "1 month",
		},
		notableFeatures: {
			listInfo: [
				"Interactive Forecast Visualizations: Displayed hourly and weekly weather trends through dynamic charts.",
				"Efficient Data Fetching: Leveraged Redux Toolkit Query for caching and API state management.",
				"Location-Based Forecast Search: Retrieved weather data for cities across the United States.",
			],
		},
		engineeringChallenges: {
			listInfo: [
				"Transformed complex API responses into normalized datasets optimized for visualization.",
				"Maintained type safety across asynchronous forecast data and API interactions.",
				"Managed loading, caching, and error states while preserving a responsive user experience.",
			],
		},
		whatILearned: {
			textInfo: [
				"WeatherWing introduced me to building data-driven frontend applications around external APIs. I gained experience modeling complex API responses with TypeScript, implementing client-side caching with Redux Toolkit Query, and transforming raw datasets into interactive visualizations optimized for user consumption.",
			],
		},
		imageLinks: { prefix: "weather-wing", count: 3, fileFormat: ".webp" },
	},
];
