export default function About() {
	return (
		<div className="bg-green-900 h-[calc(100vh-136px)]">
			<div className="flex-grow px-4 py-16">
				<section className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
					<h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
						<span className="relative inline-block">
							<svg
								viewBox="0 0 52 24"
								fill="currentColor"
								className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
							>
								<defs>
									<pattern
										id="1d4040f3-9f3e-4ac7-b117-7d4009658ced"
										x={0}
										y={0}
										width=".135"
										height=".30"
									>
										<circle cx={1} cy={1} r=".7" />
									</pattern>
								</defs>
							</svg>
							<span className="relative">Welcome our lovely devs</span>
						</span>
					</h2>
					<p className="text-base text-white md:text-lg">
						The geniuses behind Santa, Please!
					</p>
				</section>
				<section className="flex flex-col gap-3 items-center justify-center lg:flex-row text-whites">
					<div className="bg-red-800 rounded-xl border-neutral-50 border-4 border-solid p-8 flex justify-center items-center transition duration-200 ease-linear hover:scale-105 hover:border-lime-600 group">
						<div className="flex flex-col justify-center items-center gap-10">
							<div className="flex flex-col items-center gap-6">
								<div className="flex gap-6 items-center">
									<img
										src="https://avatars.githubusercontent.com/Cronchynekos"
										alt="Natan K. github profile picture"
										className="w-16 h-16 rounded-full transition duration-500 ease-out group-hover:rotate-180"
									/>
									<h1 className="text-2xl text-white font-semibold transition duration-200 ease-linear hover:text-green-600">
										Nathan Kim
									</h1>
								</div>
								<p className="transition duration-200 ease-linear text-white hover:text-green-600 text-center">
									"Add what you did"
								</p>
								<p className="text-white italic w-64 h-full transition duration-200 ease-linear hover:text-green-600 text-center text-sm">
									"Quotes?"
								</p>
							</div>
							<a
								href="https://github.com/Cronchynekos"
								target="_blank"
								className="w-64 inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md text-white bg-green-600 hover:bg-neutral-50 hover:text-green-600 hover:scale-105"
							>
								GitHub Repo
							</a>
						</div>
					</div>
					<div className="bg-red-800 rounded-xl border-neutral-50 border-4 border-solid p-8 flex justify-center items-center transition duration-200 ease-linear hover:scale-105 hover:border-lime-600 group">
						<div className="flex flex-col justify-center items-center gap-10">
							<div className="flex flex-col items-center gap-6">
								<div className="flex gap-6 items-center">
									<img
										src="https://avatars.githubusercontent.com/edwinperaza99"
										alt="Edwin P. github profile picture"
										className="w-16 h-16 rounded-full transition duration-500 ease-out group-hover:rotate-180"
									/>
									<h1 className="text-2xl text-white font-semibold transition duration-200 ease-linear hover:text-green-600">
										Edwin Peraza
									</h1>
								</div>
								<p className="transition duration-200 ease-linear text-white hover:text-green-600 text-center">
									"Add what you did"
								</p>
								<p className="text-white italic w-64 h-full transition duration-200 ease-linear hover:text-green-600 text-center text-sm">
									"Java is to Javascript what car is to a Carpet"
								</p>
							</div>
							<a
								href="https://github.com/edwinperaza99"
								target="_blank"
								className="w-64 inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md text-white bg-green-600 hover:bg-neutral-50 hover:text-green-600 hover:scale-105"
							>
								GitHub Repo
							</a>
						</div>
					</div>
					<div className="bg-red-800 rounded-xl border-neutral-50 border-4 border-solid p-8 flex justify-center items-center transition duration-200 ease-linear hover:scale-105 hover:border-lime-600 group">
						<div className="flex flex-col justify-center items-center gap-10">
							<div className="flex flex-col items-center gap-6">
								<div className="flex gap-6 items-center">
									<img
										src="https://avatars.githubusercontent.com/mrmarlrico"
										alt="Marl R. github profile picture"
										className="w-16 h-16 rounded-full transition duration-500 ease-out group-hover:rotate-180"
									/>
									<h1 className="text-2xl text-white font-semibold transition duration-200 ease-linear hover:text-green-600">
										Marl Rico
									</h1>
								</div>
								<p className="transition duration-200 ease-linear text-white hover:text-green-600 text-center">
									Created About Us Page
								</p>
								<p className="text-white italic w-64 h-full transition duration-200 ease-linear hover:text-green-600 text-center text-sm">
									"Santa, Please give me an A for this class"
								</p>
							</div>
							<a
								href="https://github.com/mrmarlrico"
								target="_blank"
								className="w-64 inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md text-white bg-green-600 hover:bg-neutral-50 hover:text-green-600 hover:scale-105"
							>
								GitHub Repo
							</a>
						</div>
					</div>
					<div className="bg-red-800 rounded-xl border-neutral-50 border-4 border-solid p-8 flex justify-center items-center transition duration-200 ease-linear hover:scale-105 hover:border-lime-600 group">
						<div className="flex flex-col justify-center items-center gap-10">
							<div className="flex flex-col items-center gap-6">
								<div className="flex gap-6 items-center">
									<img
										src="https://avatars.githubusercontent.com/ethanton0927"
										alt="Ethan T. github profile picture"
										className="w-16 h-16 rounded-full transition duration-500 ease-out group-hover:rotate-180"
									/>
									<h1 className="text-2xl text-white font-semibold transition duration-200 ease-linear hover:text-green-600">
										Ethan Ton
									</h1>
								</div>
								<p className="transition duration-200 ease-linear text-white hover:text-green-600 text-center">
									"I participated"
								</p>
								<p className="text-white italic w-64 h-full transition duration-200 ease-linear hover:text-green-600 text-center text-sm">
									"Quotes?"
								</p>
							</div>
							<a
								href="https://github.com/ethanton0927"
								target="_blank"
								className="w-64 inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md text-white bg-green-600 hover:bg-neutral-50 hover:text-green-600 hover:scale-105"
							>
								GitHub Repo
							</a>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
