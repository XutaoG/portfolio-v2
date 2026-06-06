import type { ReactNode } from "react";
import { SideNav } from "../SideNav/SideNav";

interface PageContainerProps {
	children?: ReactNode;
}

export const PageContainer = ({ children }: PageContainerProps) => {
	return (
		<div className="flex grow relative">
			<div className="grow flex justify-center">
				<div className="w-full max-w-360">{children}</div>
			</div>
			<div className="flex items-center">
				<SideNav />
			</div>
		</div>
	);
};
