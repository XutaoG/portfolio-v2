import "./App.css";
import { Outlet } from "react-router";
import { PageContainer } from "./components/Common/PageContainer";
import { NavBar } from "./components/NavBar/NavBar";

export const App = () => {
	return (
		<div className="flex flex-col w-screen min-h-screen gap-10 p-8 bg-base">
			<NavBar />
			<PageContainer>
				<Outlet />
			</PageContainer>
		</div>
	);
};
