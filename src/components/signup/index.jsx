export default function SignUp() {
	const handleSubmit = async (event) => {
		event.preventDefault();
	};
	return (
		<main class="bg-green-900 flex-grow">
			<div class="flex items-center justify-center h-[calc(100vh-136px)]">
				<div class="bg-red-700 text-white rounded-xl border-neutral-50 border-4 border-solid px-8 py-6 mt-4 text-left bg-grey-100 shadow-lg">
					<h2 class="text-2xl font-bold text-center">
						Create Your Account Today!
					</h2>
					<form onSubmit={handleSubmit}>
						<div class="mt-4">
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
									<label for="exampleEmail0" class="form-label font-bold inline-block mb-2 text-white"
									>Email</label
									>
									<input
									type="email"
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
									id="exampleEmail0"
									placeholder="Email"
									/>
								</div>
							</div>
							<div class="flex justify-center">
								<div class="mb-3 xl:w-96">
									<label for="Password" class="form-label font-bold inline-block mb-2 text-white"
									>Password</label
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
									id="Password"
									placeholder="Password"
									/>
								</div>
							</div>
							<div class="flex items-baseline justify-between">
								<button
									type="submit"
									class="px-6 py-2 mt-4 text-white bg-green-600 rounded-lg hover:bg-green-900"
								>
									Sign up
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</main>
	);
}
