export default function Forgot() {
	return (
		<main className="bg-green-900 flex-grow">
			<div className="flex items-center justify-center h-[calc(100vh-136px)]">
				<div className="bg-red-700 text-white rounded-xl border-neutral-50 border-4 border-solid px-8 py-6 mt-4 text-left bg-grey-100 shadow-lg">
					<h3 className="text-2xl font-bold text-center">
						Forgot your password?
					</h3>
					<p className="mt-4">
						We will send a link to your associated email account
					</p>
					<form action="/user/forgot" method="post">
						<div className="mt-4">
							<div className="">
								<label className="block font-bold">Username</label>
								<input
									type="text"
									name="username"
									placeholder="Your Username"
									className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
									required=""
								/>
							</div>
							<div className="flex items-baseline justify-center">
								<button
									type="submit"
									className="px-6 py-2 mt-8 w-full text-white bg-green-600 rounded-lg hover:bg-green-900"
								>
									Reset my password
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</main>
	);
}
