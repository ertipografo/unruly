function ChartItem({ value }) {
	return (
		<div className="flex gap-2 items-center">
			<span className="text-xs">Q {value}</span>
			<div
				style={{ width: value + "%" }}
				className=" relative overflow-hidden bg-2 h-10 rounded"
			/>
		</div>
	);
}

export default function Chart() {
	return (
		<div className="flex flex-col gap-2">
			<ChartItem value={23} />
			<ChartItem value={43} />
			<ChartItem value={73} />
			<ChartItem value={83} />
			<ChartItem value={43} />
		</div>
	);
}
