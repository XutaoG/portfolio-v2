import { useCallback, useMemo, type ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface GradientColorContainerProps {
	fromElementHashStr: string;
	toElementHashStr: string;
	className?: string;
	children: ReactNode;
}

export const GradientColorContainer = ({
	fromElementHashStr,
	toElementHashStr,
	className,
	children,
}: GradientColorContainerProps) => {
	const hashCode = useCallback((str: string) => {
		let hash = 0;
		for (let i = 0; i < str.length; i++) {
			hash = (hash << 2) - hash + str.charCodeAt(i);
			hash |= 0;
		}
		return hash;
	}, []);

	const fromColor = useMemo(() => {
		const fromColors = [
			"from-red-500",
			"from-amber-700",
			"from-lime-700",
			"from-emerald-700",
			"from-cyan-700",
			"from-blue-700",
			"from-violet-700",
			"from-fuchsia-700",
			"from-rose-700",
		];

		return fromColors[Math.abs(hashCode(fromElementHashStr)) % fromColors.length];
	}, [hashCode, fromElementHashStr]);

	const toColor = useMemo(() => {
		const toColors = [
			"to-orange-400",
			"to-yellow-400",
			"to-green-400",
			"to-teal-400",
			"to-sky-400",
			"to-indigo-400",
			"to-purple-400",
			"to-pink-400",
			"to-slate-400",
		];

		return toColors[Math.abs(hashCode(toElementHashStr)) % toColors.length];
	}, [hashCode, toElementHashStr]);

	return <div className={twMerge(`bg-linear-to-br ${fromColor} ${toColor} ${className}`)}>{children}</div>;
};
