export default function LogIn() {
	return (
		<main className="bg-green-900 flex-grow">
			<div className="flex items-center justify-center h-[calc(100vh-136px)]">
				<div className="bg-red-700 text-white rounded-xl border-neutral-50 border-4 border-solid px-8 py-6 mt-4 text-left bg-grey-100 shadow-lg">
					<h3 className="text-2xl font-bold text-center">
						Log in to your account
					</h3>
					<form action="/user/login" method="post">
						<div className="mt-4">
						<div class="flex justify-center">
								<div class="mb-3 xl:w-96">
									<label for="exampleText0" class="form-label font-bold inline-block mb-2 text-white"
									>Username</label
									>
									<input
									type="text"
									class="
										form-control
										block
										w-full
										px-3
										py-1.5
										text-base
										font-bold
										text-black
										placeholder-black
									"
									id="exampleText0"
									placeholder="Username"
									/>
								</div>
							</div>
							<div class="flex justify-center">
								<div class="mb-3 xl:w-96">
									<label for="examplePassword0" class="form-label font-bold inline-block mb-2 text-white">
										Password</label>
									<input
									type="password"
									class="
										form-control
										block
										w-full
										px-3
										py-1.5
										text-base
										font-bold
										text-black
										placeholder-black
									"
									id="examplePassword0"
									placeholder="Password"
									/>
								</div>
							</div>
							<div className="flex items-baseline justify-between">
								<button
									type="submit"
									className="px-6 py-2 mt-4 text-white bg-green-600 rounded-lg hover:bg-green-900"
								>
									Login
								</button>
								<a
									href="/Forgot"
									className="text-sm text-gray-900 hover:underline"
								>
									Forgot password?
								</a>
							</div>
						</div>
					</form>
				</div>
			</div>
		</main>
	);
}
