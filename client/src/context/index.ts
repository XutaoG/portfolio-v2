import { createContext } from "react";

interface SceneStateContextType {
	isLoading: boolean;
	setIsLoading: (isLoading: boolean) => void;
}

export const SceneStateContext = createContext<SceneStateContextType | null>(null);
