import type { TProject } from "../types";

export const projects: TProject[] = [
	{
		id: "o8bvj1",
		name: "DHS Incident Command Simulation",
		type: "Crowd Simulation",
		iconCategory: "Game",
		setting: "Professional Work",
		subheading: "Large-Scale Crowd Behavior and Evacuation Simulation",
		techStacks: {
			listInfo: ["Unity Engine", "Unity DOTS", "Cesium"],
		},
		description: {
			textInfo: [
				"DHS Incident Command Simulation is a large-scale crowd behavior simulation developed in Unity to model emergency response scenarios during a concert at the Washington, D.C. National Mall.",
				"Built using Unity DOTS, ECS, and Cesium, the platform simulates the behavior of tens of thousands of individuals following a simulated explosive event. Users can configure crowd density, place obstacles, trigger incidents at arbitrary locations, and observe how different behavioral responses and evacuation patterns emerge over time.",
			],
		},
		timeFrame: {
			start: "Mar 2026",
			end: "May 2026",
			duration: "3 months",
		},
		myRole: {
			textInfo: [
				"I designed and implemented the core crowd simulation systems, including agent behavior modeling, state-transition logic, flow field navigation, and ECS-based processing architecture.",
				"My responsibilities focused on building scalable simulation systems capable of supporting tens of thousands of agents while maintaining real-time performance and realistic evacuation behavior.",
			],
		},
		notableFeatures: {
			listInfo: [
				"Large-Scale Crowd Simulation: Simulates tens of thousands of autonomous agents simultaneously using Unity DOTS and ECS architecture.",
				"Configurable Population Distribution: Allows users to place crowd volumes with varying densities to model different attendance patterns and population concentrations.",
				"Flow Field Navigation: Utilizes flow field pathfinding to efficiently guide large populations toward safe areas while avoiding computationally expensive per-agent pathfinding.",
				"Interactive Obstacle Placement: Supports runtime placement of barriers and obstructions that affect evacuation patterns.",
			],
		},
		engineeringChallenges: {
			listInfo: [
				"Simulating tens of thousands of agents required migrating traditional object-oriented approaches to Unity's ECS architecture to achieve acceptable performance and memory usage.",
				"Maintaining stable simulation performance across varying crowd densities required extensive profiling and optimization of ECS systems, job scheduling, and burst compiling.",
			],
		},
		whatILearned: {
			textInfo: [
				"I learned how Unity's ECS architecture fundamentally improves performance by optimizing memory layout, burst compiler, and parallel execution compared to traditional GameObject-based approaches.",
				"Furthermore, implementing flow field navigation deepened my understanding of scalable pathfinding techniques and demonstrated why conventional algorithms such as A* become impractical when applied to tens of thousands of agents simultaneously.",
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
		subheading: "Semiconductor Manufacturing Simulation Platform",
		techStacks: {
			listInfo: ["Angular", "Nest.js", "three.js", "Supabase"],
		},
		description: {
			textInfo: [
				"MeDT Dashboard is a manufacturing simulation and analytics platform that models the operations of a semiconductor fabrication facility in real time. The system simulates configurable production flows across 44 machines and 22 manufacturing processes, allowing users to evaluate the impact of changes to orders, staffing levels, machine configurations, maintenance schedules, and production routing.",
				"An interactive 3D visualization engine renders machine states, worker movement, product lots, and operational metrics, enabling floor managers to identify bottlenecks, evaluate what-if scenarios, and optimize manufacturing throughput.",
			],
		},
		timeFrame: {
			start: "Sep 2025",
			end: "Feb 2026",
			duration: "6 months",
		},
		myRole: {
			textInfo: [
				"I designed and implemented the discrete-event simulation architecture, state lifecycle management, and WebGL-based visualization engine that power the platform. This included:",
			],
			listInfo: [
				"Modeling fabrication workflows.",
				"Developing event scheduling and processing systems and optimizing simulation performance.",
				"Building analysis tools for evaluating bottlenecks and throughput.",
			],
		},
		notableFeatures: {
			listInfo: [
				"Real-Time 3D Factory Visualization: Interactive WebGL-based digital twin rendering machine states, workers, product lots, and production activity in real time.",
				"Adjustable Simulation Speed: Supports simulation execution speed from 1X to 200X.",
				"Operational Bottleneck Detection: Identifies throughput constraints, machine utilization issues, and production inefficiencies throughout the manufacturing process.",
				"Event-Driven Simulation Engine: Processes manufacturing events through lifecycle-based execution rather than continuous polling, significantly improving simulation efficiency.",
			],
		},
		engineeringChallenges: {
			textInfo: [
				"Rendering a large-scale manufacturing environment in real time was slow and required me to optimize scene updates and visualization performance to maintain smooth interaction.",
				"As simulation complexity increased, repeatedly evaluating machine, worker, and product states became computationally expensive, leading me to redesign the engine around an event-driven architecture.",
			],
		},
		whatILearned: {
			textInfo: [
				"Developing MeDT Dashboard significantly expanded my understanding of simulation architecture, event-driven systems, and real-time visualization.",
				"I learned how discrete-event simulations can dramatically outperform time-step approaches by processing only meaningful state transitions rather than continuously evaluating every entity in the system.",
				"Learning to implement the event-driven architecture reinforced the importance of lifecycle management and event scheduling when modeling large-scale operational systems.",
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
		subheading: "Resident Scheduling Platform Powered by Constraint-Based Scheduling",
		techStacks: {
			listInfo: ["ASP.NET Core", "Entity Framework Core", "Docker", "MySQL Server", "SwaggerHub"],
		},
		description: {
			textInfo: [
				"Psycall PGY4 Scheduler is a scheduling platform developed for Orlando Health that automates the creation of year-long resident rotation schedules.",
				"Residents submit their preferred, alternative, and avoided rotations, while administrators generate and refine schedules based on organizational constraints and staffing requirements.",
				"The platform combines a constraint-driven scheduling engine, real-time validation feedback, and manual editing tools to produce fair, balanced schedules that optimize resident preferences while maintaining operational requirements.",
			],
		},
		timeFrame: {
			start: "Dec 2025",
			end: "May 2026",
			duration: "6 months",
		},
		myRole: {
			textInfo: [
				"I architected and developed the core scheduling engine, implementing backtracking and constraint-validation algorithms to generate fair, optimized resident rotation schedules.",
				"Furthermore, I was also responsible for designing and building the backend services responsible for resident preference collection, schedule generation workflows, constraint evaluation, and administrator-driven schedule modifications.",
			],
		},
		notableFeatures: {
			listInfo: [
				"Resident Preference Management: Collects preferred, alternative, and avoided rotations to incorporate resident input into schedule generation.",
				"Manual Schedule Revision Tools: Allows administrators to modify generated schedules while continuously validating constraint satisfaction.",
				"Real-Time Constraint Validation: Provides immediate feedback on scheduling conflicts, violations, and rule compliance during schedule generation and editing.",
				"Fairness & Distribution Analysis: Balances rotation assignments across residents to prevent scheduling bias and uneven workload distribution.",
			],
		},
		engineeringChallenges: {
			textInfo: [
				"Implementing backtracking efficiently forced me to minimize unnecessary search paths and optimize constraint validation to prevent combinatorial explosion.",
				"Providing real-time feedback on constraint violations required efficient evaluation strategies that could quickly identify conflicts across an entire yearly schedule.",
				"Creating a fitness scoring system required translating subjective concepts such as fairness, preference satisfaction, and schedule distribution into measurable evaluation criteria.",
			],
		},
		whatILearned: {
			textInfo: [
				"I learned how search-space pruning and efficient constraint validation can dramatically improve the performance of backtracking algorithms when generating highly constrained schedules.",
				"Building the fitness evaluation system also taught me how to translate qualitative scheduling goals, such as fairness, preference satisfaction, and workload distribution, into quantifiable scoring metrics that could be objectively optimized.",
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
		subheading: "Multi-organization platform for asset discovery and management",
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
				"The Florida Semiconductor Engine Digital Marketplace is a full-stack enterprise platform used by 10+ universities and companies to manage and share physical and digital assets.",
				"Replacing manual email and spreadsheet workflows, it centralizes asset discovery, requests, and lifecycle management through a streamlined marketplace experience. The platform includes role-based access control and approval workflows that support secure asset submission, review, and publication across organizations.",
			],
		},
		timeFrame: {
			start: "Mar 2025",
			end: "Sep 2025",
			duration: "6 months",
		},
		notableFeatures: {
			listInfo: [
				"Role-Based Access Control: Granular permission system supporting organization owners, administrators, and members with distinct levels of access.",
				"Multi-Stage Approval Workflow: Structured review process for asset submission, approval, and publication to maintain data quality and governance.",
				"Database-Driven Dynamic Forms: Form fields, validation rules, and workflows are configured through database metadata, allowing administrators to adapt processes without code changes.",
			],
		},
		engineeringChallenges: {
			textInfo: [
				"Designing a flexible role-based permission system required balancing security with usability across organization owners, administrators, and members.",
				"Building database-driven forms challenged me to create a generic architecture that could support a wide variety of field types, validation rules, and workflows without requiring code changes.",
				"As the platform expanded, I had to ensure that search, filtering, and asset management features remained performant across large datasets.",
			],
		},
		whatILearned: {
			textInfo: [
				"learned how to design relational schemas that support complex relationships between organizations, users, assets, and approval workflows while maintaining referential integrity.",
				"Developing database-driven forms also demonstrated to me how metadata can be leveraged to create highly configurable systems that minimize future code changes.",
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
				"Pantrify is an online recipe app designed to help users effortlessly organize, track, and share their personal recipe collections.",
				"With a comprehensive recipe and ingredient management system, Pantrify makes it easy to store and access your favorite dishes anytime. Currently available on the web, it is built using Next.js, ASP.NET Core, and Azure SQL for a seamless and responsive experience.",
			],
		},
		timeFrame: {
			start: "Sep 2025",
			end: "Dec 2025",
			duration: "4 months",
		},
		notableFeatures: {
			listInfo: [
				"Advanced Search with Lazy Loading: Full and partial match search capabilities with lazy loading on all recipes and ingredients.",
				"Secure Authentication: Robust session management using JWT authentication to ensure secure user access.",
				"Server-Side Rendering (SSR): Pre-renders pages on the server for faster load times and improved SEO.",
				"Recipe Book Sharing: Easily share your recipe book with other users, allowing them to view and access your saved recipes.",
				"Ingredient Availability: Displays which ingredients you already have and which ones you’re missing for each recipe.",
			],
		},
		engineeringChallenges: {
			textInfo: [
				"Designing a flexible data model required carefully structuring relationships between recipes, ingredients, categories, and user-generated content.",
				"Creating reusable forms for recipe and ingredient management pushed me to develop maintainable frontend patterns that reduced duplication.",
				"Managing complex CRUD workflows challenged me to maintain data consistency across multiple schemas.",
			],
		},
		whatILearned: {
			textInfo: [
				"This project gave me valuable experience building a full-stack application with Next.js and ASP.NET Core backend.",
				"Through designing database relationships and implementing recipe management workflows, I developed a stronger understanding of relational data modeling and Entity Framework Core.",
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
		subheading: "Full-stack portfolio platform built to highlight personal and professional growth.",
		techStacks: {
			listInfo: ["React TypeScript", "Express.js", "MongoDB", "Vercel & Render", "GoDaddy", "Cloudinary"],
		},
		description: {
			textInfo: [
				"My portfolio is a reflection of my technical skills and design sensibility, built with a focus on performance, functionality, and modern aesthetics. I used the MERN stack (MongoDB, Express, React, Node.js) for the web application, ensuring a smooth user experience and fast loading times. The layout is styled with TailwindCSS, offering a clean and minimalist design, while maintaining responsiveness across devices.",
			],
		},
		timeFrame: {
			start: "Aug 2025",
			end: "Aug 2025",
			duration: "1 month",
		},
		notableFeatures: {
			listInfo: [
				"Efficient image loading: Optimized backend integration ensures that only necessary images are fetched, minimizing resource usage and enhancing overall performance.",
				"Clean and Modern Interface: Leveraging TailwindCSS to maintain a cohesive, visually appealing, and user-friendly interface across the entire platform.",
			],
		},
		whatILearned: {
			textInfo: [
				"Building my first portfolio taught me that creating a successful application involves much more than implementing features. I gained experience architecting and deploying a full-stack application, managing cloud-hosted assets, and optimizing performance for real-world users.",
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
		subheading: "Project collaboration platform that connects developers through shared projects and ideas.",
		techStacks: {
			listInfo: ["React", "Express.js", "MongoDB", "Heroku", "GoDaddy", "Flutter"],
		},
		description: {
			textInfo: [
				"DevFusion is an online project collaboration platform designed to connect developers eager to enhance their skills. Users can explore projects that match their interests and expertise, as well as post their own ideas for others to join.",
				"DevFusion is available on both web and mobile platforms, utilizing the MERN stack for the web version and Flutter for the mobile app.",
			],
		},
		timeFrame: {
			start: "Jun 2024",
			end: "Aug 2024",
			duration: "3 month",
		},
		notableFeatures: {
			listInfo: [
				"Advanced Search with Lazy Loading: Full and partial match search capabilities with lazy loading on the Discover page for seamless browsing.",
				"Secure Authentication: Robust session management using JWT authentication to ensure secure user access.",
				"Light and Dark Mode: Customizable appearance with both light and dark themes.",
				"Smart Project Suggestions: Dynamic project recommendations on the Discover page, based on matching user skills with project requirements.",
				"Team Management Tools: Easily assign and update roles and descriptions for individual team members.",
			],
		},
		engineeringChallenges: {
			listInfo: [
				"Supporting both web and mobile platforms required me to design API contracts that remained consistent across React and Flutter despite differences in implementation.",
				"Building a responsive project discovery system involved optimizing filtering logic.",
				"Maintaining feature parity between the React and Flutter applications required careful API design and data modeling decisions.",
			],
		},
		whatILearned: {
			textInfo: [
				"Leading the development of DevFusion taught me how to architect and maintain a full-stack application that serves multiple client platforms from a shared backend. I gained experience designing database schemas, building RESTful APIs, and coordinating data flow between React and Flutter applications.",
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
		subheading: "Interactive weather dashboard powered by real-time climate data.",
		techStacks: {
			listInfo: ["React", "TypeScript", "Redux Toolkit Query", "Recharts", "Tailwindcss", "tomorrow.io"],
		},
		description: {
			textInfo: [
				"WeatherWing is a weather forecast app developed primarily in React that displays the weather forecast information over the week. The weather data gathered and retrieved from tomorrow.io details the hourly fluctuation in all climate variables including temperature, precipitation, visibility, wind status, etc.",
			],
		},
		timeFrame: {
			start: "Feb 2024",
			end: "Mar 2024",
			duration: "1 month",
		},
		notableFeatures: {
			listInfo: [
				"Comprehensive Weekly Forecasts: View detailed weather forecasts for the entire week.",
				"Nationwide Weather Search: Search and retrieve weather data for any city across the United States.",
				"Interactive Charts and Graphs: Access accurate forecast information with enhanced visualizations for daily and weekly trends.",
			],
		},
		engineeringChallenges: {
			listInfo: [
				"Transformed complex weather API responses into structured datasets for interactive charts and forecast visualizations.",
				"Implemented robust loading, error, and fallback states to ensure a reliable user experience during network interruptions and API failures.",
			],
		},
		whatILearned: {
			textInfo: [
				"As this was one of my earliest personal project, it strengthened my understanding of modern frontend development by exposing me to real-world challenges in API integration, state management, and data visualization.",
				"I learned how to consume and transform complex weather data into meaningful user-facing insights and gained experience balancing technical implementation with user experience, laying a strong foundation for future React development.",
			],
		},
		imageLinks: { prefix: "weather-wing", count: 3, fileFormat: ".webp" },
	},
];
