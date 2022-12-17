import { useState } from "react";
import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

export default function SignUp() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");

	const handleUsernameChange = (event) => {
		setUsername(event.target.value);
	};

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	async function handleSubmit(event) {
		event.preventDefault();

		const data = {
			username: username,
			email: email,
			password: password,
			passwordConfirm: password,
		};

		try {
			await pb.collection("users").create(data);
			window.location.pathname = "/LogIn";
		} catch (error) {
			alert("couldn't create account.");
		}
		// pb.createUser({ username, password })
		// 	.then((user) => {
		// 		console.log(`Successfully created user: ${user.username}`);
		// 	})
		// 	.catch((error) => {
		// 		console.error(error);
		// 	});
	}
	return (
		<main class="bg-green-900 flex-grow">
			<div class="flex items-center justify-center h-[calc(100vh-136px)]">
				<div class="bg-red-700 text-white rounded-xl border-neutral-50 border-4 border-solid px-8 py-6 mt-4 text-left bg-grey-100 shadow-lg">
					<h2 class="text-2xl font-bold text-center">
						Create Your Account Today!
					</h2>
					<form onSubmit={handleSubmit}>
						<div class="mt-4">
							<div class="mt-4">
								<label class="block">Username</label>
								<input
									type="text"
									name="username"
									placeholder="Username"
									class="w-full text-black px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
									value={username}
									onChange={handleUsernameChange}
								/>
							</div>
							<div class="mt-4">
								<label class="block">Email</label>
								<input
									type="email"
									name="email"
									placeholder="Email"
									class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
									value={email}
									onChange={handleEmailChange}
								/>
							</div>
							<div class="mt-4">
								<label class="block">Password</label>
								<input
									type="password"
									name="password"
									placeholder="Password"
									class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
									value={password}
									onChange={handlePasswordChange}
								/>
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
