import { useCallback, useSyncExternalStore } from "react";

const BREAKPOINTS = {
	sm: 640,
	md: 768,
	lg: 1024,
	xl: 1280,
	"2xl": 1536,
} as const;

export const useMinWidth = (breakpoint: keyof typeof BREAKPOINTS): boolean => {
	const query = `(min-width: ${BREAKPOINTS[breakpoint]}px)`;

	const subscribe = useCallback(
		(callback: () => void) => {
			const mediaQueryList = window.matchMedia(query);
			mediaQueryList.addEventListener("change", callback);
			return () => mediaQueryList.removeEventListener("change", callback);
		},
		[query],
	);

	const getSnapshot = useCallback(() => window.matchMedia(query).matches, [query]);

	return useSyncExternalStore(subscribe, getSnapshot);
};
