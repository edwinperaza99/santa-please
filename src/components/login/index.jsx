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
							<div>
								<label className="block">Username</label>
								<input
									type="text"
									name="username"
									placeholder="Username"
									className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
									required=""
								/>
							</div>
							<div className="mt-4">
								<label className="block">Password</label>
								<input
									type="password"
									name="password"
									placeholder="Password"
									className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
									required=""
								/>
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
