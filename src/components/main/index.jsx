export default function Main(props) {
	return (
		<main className="bg-green-900 h-[calc(100vh-136px)]">
			<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
				<div className="grid gap-10 lg:grid-cols-2">
					<div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
						<div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
							<a
								href="https://github.com/edwinperaza99/cpsc349-project4"
								target="_blank"
								rel="noreferrer noopener"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width={24}
									height={24}
									viewBox="0 0 24 24"
									{...props}
								>
									<path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
								</svg>
							</a>
						</div>
						<div className="max-w-xl mb-6">
							<h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
								CREATE YOUR
								<br className="hidden md:block" />
								FIRST WISHLIST{" "}
								<span className="inline-block text-deep-purple-accent-400">
									TODAY!
								</span>
							</h2>
							<p className="text-base text-gray-300 md:text-lg">
								Santa, Please! Allows you to create wishlists with your favorite
								products. You can submit your wishlist to your loved ones (in
								the hopes to receive a present).
							</p>
						</div>
						<div>
							<a
								href="/SignUp"
								aria-label=""
								className="inline-flex items-center font-semibold transition-colors duration-200 text-white hover:text-red-600"
							>
								Sign Up Now!
								<svg
									className="inline-block w-3 ml-2"
									fill="currentColor"
									viewBox="0 0 12 12"
								>
									<path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
								</svg>
							</a>
						</div>
					</div>
					<div className="flex items-center justify-center -mx-4 lg:pl-8">
						<div className="flex flex-col items-end px-3">
							<img
								className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
								src="https://images.pexels.com/photos/306864/pexels-photo-306864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
								alt=""
							/>
							<img
								className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
								src="https://images.pexels.com/photos/5727926/pexels-photo-5727926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
								alt=""
							/>
						</div>
						<div className="px-3">
							<img
								className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
								src="https://images.pexels.com/photos/3149896/pexels-photo-3149896.jpeg"
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
