export const QuickWorkStatus = () => {
	return (
		<div className="relative">
			<div className="absolute inset-0 rounded-lg bg-primary/20 blur-[1px]" />
			<div
				className="relative bg-base overflow-hidden border border-primary/60 rounded-lg p-6 
				flex flex-col gap-3 font-medium -translate-1.5"
			>
				<div className="flex items-center">
					<div className="size-2 mr-4 rounded-full bg-primary animate-ping" />
					<p className="text-content/60">STATUS</p>
				</div>
				<div className="ml-6 mr-6">
					<p className="text-success">
						AVAILABLE FOR
						<br />
						OPPORTUNITIES
						<br />
					</p>
				</div>
				<p className="ml-6 font-semibold text-primary">&gt;_</p>
				<div className="absolute -bottom-8 -right-8 size-32 rounded-full bg-primary/20 blur-3xl" />
			</div>
		</div>
	);
};
