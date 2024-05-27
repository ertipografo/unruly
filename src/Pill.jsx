export default function Pill({
	children,
	colors = "bg-primary text-base-900/50 dark:text-base-800",
}) {
	//const c = Math.floor(Math.random() * 3) + 1;

	return (
		<div
			//style={{ backgroundColor: `var(--pillvar${c})` }}
			className={colors + " px-2 py-1 rounded text-xs inline-flex"}
		>
			{children}
		</div>
	);
}
