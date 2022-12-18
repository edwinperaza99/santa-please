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
	}
	return (
		<main className="bg-green-900 flex-grow">
			<div className="flex items-center justify-center h-[calc(100vh-136px)]">
				<div className="bg-red-800 text-white rounded-xl border-neutral-50 border-4 border-solid px-8 py-6 mt-4 text-left bg-grey-100 shadow-lg">
					<h2 className="text-2xl font-bold text-center">
						Create Your Account Today!
					</h2>
					<form onSubmit={handleSubmit}>
						<div className="mt-4">
							<div className="mt-4">
								<label className="block">Username</label>
								<input
									type="text"
									name="username"
									placeholder="Username"
									className="w-full text-black px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
									value={username}
									onChange={handleUsernameChange}
								/>
							</div>
							<div className="mt-4">
								<label className="block">Email</label>
								<input
									type="email"
									name="email"
									placeholder="Email"
									className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
									value={email}
									onChange={handleEmailChange}
								/>
							</div>
							<div className="mt-4">
								<label className="block">Password</label>
								<input
									type="password"
									name="password"
									placeholder="Password"
									className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
									value={password}
									onChange={handlePasswordChange}
								/>
							</div>
							<div className="flex items-baseline justify-between">
								<button
									type="submit"
									className="px-6 py-2 mt-4 text-white bg-green-600 rounded-lg hover:bg-neutral-50 hover:text-green-600"
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
