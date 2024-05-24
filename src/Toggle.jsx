export default function Toggle({ items, className }) {
	return (
		<div
			className={
				className +
				" bg-1 flex rounded overflow-hidden p-1 font-bold text-xs gap-1"
			}
		>
			<div className="text-center bg-white dark:bg-base-950 rounded-sm p-3 flex-1">
				{items[0]}
			</div>
			<div className="text-center p-3 flex-1 text-base-100 dark:text-base-900 hover:bg-base-600 dark:hover:bg-base-300 rounded">
				{items[1]}
			</div>
		</div>
	);
}
