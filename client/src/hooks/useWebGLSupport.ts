import { useCallback, useState } from "react";

export const useWebGLSupport = () => {
	const checkWebGLSupport = useCallback(() => {
		const canvas = document.createElement("canvas");
		return (canvas.getContext("webgl2") ?? canvas.getContext("webgl")) !== null;
	}, []);

	const [supported] = useState(checkWebGLSupport);
	return supported;
};
