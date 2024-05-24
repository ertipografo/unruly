export default function Footer() {
	return (
		<div className="box">
			<div className="grid grid-cols-3 gap-5 py-20">
				<div className="flex flex-col gap-5">
					<h4>Some footer box</h4>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Voluptatibus, eum distinctio maxime quas architecto
						impedit.
					</p>
				</div>
				<div className="flex flex-col gap-5">
					<h4>Some footer box</h4>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Voluptatibus, eum distinctio maxime quas architecto
						impedit.
					</p>
				</div>
				<div className="flex items-center gap-4 justify-end px-10">
					<div className="bg-base-500 h-10 w-10 rounded-full" />
					<div className="bg-base-500 h-10 w-10 rounded-full" />
					<div className="bg-base-500 h-10 w-10 rounded-full" />
				</div>
			</div>
		</div>
	);
}
