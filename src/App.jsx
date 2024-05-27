import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import Logo from "./Logo";
import Button from "./Button";
import Table from "./Table";
import Chart from "./Chart";
import Partners from "./Partners";
import Footer from "./Footer";
import Menu from "./Menu";
import Toggle from "./Toggle";

export default function App() {
	const toggleDarkMode = () => {
		document.documentElement.classList.toggle("dark");
	};
	return (
		<div className="fixed inset-0 flex bg-base-200 dark:bg-base-800 text-2 dark:text-base-300 text-sm gap-px">
			<div className="w-[340px] box">
				<div className="flex flex-col h-full justify-between">
					<div className="flex flex-col gap-10">
						<Logo className="max-w-[120px] mx-auto fill-base-800 dark:fill-white" />
						<Toggle
							className="mx-10"
							items={["primo", "secondo"]}
						/>
						<Menu />
					</div>
					<div className="text-xs font-bold">&copy; Unruly 2024</div>
				</div>
			</div>
			<div className="flex-1 relative">
				<PerfectScrollbar>
					<div className="flex flex-col gap-px">
						<div className="box">
							<div className="flex items-center justify-between">
								<span className="font-bold text-lg">
									&rarr; Dashboard
								</span>
								<Button
									variant="small"
									theme="secondary"
									onClick={toggleDarkMode}
								>
									Dark
								</Button>
							</div>
						</div>
						<div className="box">
							<div className="flex justify-between items-center gap-20 pr-20">
								<div className="flex flex-col gap-5  max-w-5xl">
									<h1>
										Some random heading content and some
										more random content.
									</h1>
									<h3 className="text-3">
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Alias, nesciunt magni
										accusantium reiciendis facilis quis enim
										accusamus optio natus doloremque fugit,
										quibusdam, provident saepe vel maiores
										quas assumenda voluptate mollitia?
									</h3>
								</div>
								<Button>Learn more &rarr;</Button>
							</div>
						</div>
						<div className="grid gap-px grid-cols-4">
							<div className="box">
								<h4>Some section title</h4>
								<p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Quis eaque dicta
									repudiandae culpa quos praesentium.
								</p>
							</div>
							<div className="box">
								<div className="flex justify-between items-center gap-5">
									<p>
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit.
									</p>
									<span className="font-extrabold text-1 text-7xl serif">
										23M
									</span>
								</div>
							</div>
							<div className="box">
								<h4>Some section title</h4>
								<p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Quis eaque dicta
									repudiandae culpa quos praesentium.
								</p>
							</div>
							<div className="box">
								<h4>Some section title</h4>
								<p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Quis eaque dicta
									repudiandae culpa quos praesentium.
								</p>
							</div>
						</div>

						<div className="grid grid-cols-3 gap-px">
							<div className="col-span-2 box">
								<h4>Some table content</h4>
								<Table />
							</div>
							<div className="box">
								<h4>Some pie chart</h4>
								<p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Quis eaque dicta
									repudiandae culpa quos praesentium quas vero
									nam! Dolor sapiente, labore aut atque dicta
									voluptas saepe possimus placeat quidem
									pariatur?
								</p>

								<div className="w-[360px] mx-auto my-20 relative h-[360px]">
									<div className="border-[61px] rounded-full border-color-2 absolute inset-0" />

									<div
										className="inset-0 pie absolute"
										style={{
											"--p": 33,
											"--b": "60px",
											"--c": "var(--primary)",
										}}
									/>
								</div>
							</div>
						</div>
						<div className="grid grid-cols-3 gap-px">
							<div className="box">
								<h4>Some charts here</h4>
								<Chart />
							</div>
							<div className="box">
								<h4>Some statements</h4>
								<h2>
									Some important statement and some more less
									important statement just for demo purposes
								</h2>
								<p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Aut eligendi rem, dicta,
									iste aliquid deserunt possimus voluptatem
									vel tempora earum distinctio. Numquam
									repellat fuga quo, vel dolorum laudantium.
									Autem, reprehenderit!
								</p>
								<div className="flex justify-end items-center gap-5">
									<span className="font-bold text-2">
										Some disclaimer?
									</span>
									<Button variant="small">Some CTA</Button>
								</div>
							</div>
							<Partners />
						</div>
						<Footer />
					</div>
				</PerfectScrollbar>
			</div>
		</div>
	);
}
