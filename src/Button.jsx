export default function Button({ children, variant, onClick, theme }) {
	const cl = variant === "small" ? "p-3 min-w-[100px]" : "p-5 min-w-[150px]";
	const col =
		theme === "secondary"
			? "bg-base-200 dark:bg-base-500 text-base-600 dark:text-base-900"
			: "bg-[#1f00ff] text-base-100";
	return (
		<button
			onClick={onClick ?? null}
			className={`${cl} ${col} rounded font-bold`}
		>
			{children}
		</button>
	);
}
