export default function Pill({
	children,
	colors = "bg-[#00ffc3] text-base-900/50 dark:text-base-800",
}) {
	return (
		<div className={colors + " px-2 py-1 rounded text-xs inline-flex"}>
			{children}
		</div>
	);
}
