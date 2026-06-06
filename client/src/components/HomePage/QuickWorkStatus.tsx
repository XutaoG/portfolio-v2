export const QuickWorkStatus = () => {
	return (
		<div className="relative overflow-hidden border border-primary/40 rounded-lg p-6 flex flex-col gap-3 font-medium">
			<div className="flex items-center">
				<div className="size-2 mr-4 rounded-full bg-primary" />
				<p>STATUS</p>
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
	);
};
