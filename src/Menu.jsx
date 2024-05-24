export default function Menu() {
	const menuItems = [
		{
			title: "Our Fund",
			items: ["Dashboard", "Fund Statistics", "Transactions"],
		},
		{
			title: "Our Company",
			items: [
				"Users",
				"Thesis",
				"Manifesto",
				"Content",
				"Previous Investments",
			],
		},
	];

	return (
		<div className="mx-10 flex flex-col gap-4">
			{menuItems.map((menuArea, idx) => {
				return (
					<div key={idx}>
						<span className="text-3 capitalize mb-4 block">
							{menuArea.title}
						</span>
						<div className="flex flex-col gap-2 mb-5">
							{menuArea.items.map((menuItem, midx) => {
								const cl =
									idx === 0 && midx == 1
										? "text-[#1f00ff]"
										: "";
								return (
									<a
										href="#"
										className={`${cl} p-2 rounded `}
										key={midx}
									>
										{menuItem}
									</a>
								);
							})}
						</div>
					</div>
				);
			})}
		</div>
	);
}
