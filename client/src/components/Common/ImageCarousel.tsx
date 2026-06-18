import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useState } from "react";

interface ImageCarouselProps {
	imageLinks: string[];
}

const slideVariants = {
	enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%" }),
	center: { x: 0 },
	exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%" }),
};

export const ImageCarousel = ({ imageLinks }: ImageCarouselProps) => {
	const [[page, direction], setPage] = useState([0, 0]);

	const count = imageLinks.length;
	const current = ((page % count) + count) % count;
	const prev = (current - 1 + count) % count;
	const next = (current + 1) % count;

	const goNext = useCallback(() => setPage(([page]) => [page + 1, 1]), []);
	const goPrev = useCallback(() => setPage(([page]) => [page - 1, -1]), []);

	if (!count) return null;

	if (count === 1) {
		return (
			<img
				src={imageLinks[0]}
				className="w-full aspect-video object-cover rounded-lg border border-primary/60"
				alt=""
			/>
		);
	}

	const dotIndicators = imageLinks.map((_, i) => (
		<button
			key={i}
			className={`h-1.5 rounded-full transition-all duration-300 
			${i === current ? "w-6 bg-primary" : "w-1.5 bg-content/30 hover:bg-content/50"}`}
		/>
	));

	return (
		<div className="flex flex-col gap-4 w-full">
			<div className="flex items-center w-full h-full gap-2">
				<button
					onClick={goPrev}
					className="p-1.5 border border-primary/50 rounded-full bg-base/70 hover:bg-primary/30 
					hover:border-primary transition-colors duration-300"
				>
					<CaretLeftIcon size={18} />
				</button>

				<div className="grow flex justify-center items-center relative z-0">
					{/* Previous image */}
					<button
						className="absolute inset-y-8 left-0 aspect-video opacity-70 hover:opacity-90 transition-opacity duration-300 -z-10"
						onClick={goPrev}
					>
						<img
							src={imageLinks[prev]}
							className="size-full object-cover rounded-lg border border-content/20"
							alt="Previous Image"
						/>
					</button>

					{/* Current image */}
					<div className="mx-3 sm:mx-6 md:mx-12 relative flex-1">
						<div className="relative overflow-hidden rounded-lg border border-primary/60 shadow-lg shadow-primary/10">
							<div className="w-full aspect-video" />
							<AnimatePresence initial={false} custom={direction}>
								<motion.img
									key={page}
									src={imageLinks[current]}
									custom={direction}
									variants={slideVariants}
									initial="enter"
									animate="center"
									exit="exit"
									transition={{ duration: 0.3, ease: "easeInOut" }}
									className="absolute inset-0 w-full h-full object-cover"
									alt="Current Image"
								/>
							</AnimatePresence>
						</div>
					</div>

					{/* Next image */}
					<button
						className="absolute inset-y-8 right-0 aspect-video opacity-70 hover:opacity-90 transition-opacity duration-300 -z-10"
						onClick={goNext}
					>
						<img
							src={imageLinks[next]}
							className="size-full object-cover rounded-lg border border-content/20"
							alt="Next Image"
						/>
					</button>
				</div>

				<button
					onClick={goNext}
					className="p-1.5 border border-primary/50 rounded-full bg-base/70 hover:bg-primary/30 
					hover:border-primary transition-colors duration-300 backdrop-blur-xs"
				>
					<CaretRightIcon size={18} />
				</button>
			</div>

			{/* Dot indicators */}
			<div className="flex justify-center gap-2">{dotIndicators}</div>
		</div>
	);
};
