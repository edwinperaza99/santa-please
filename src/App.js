import logo from "./logo.svg";
import About from "./components/about";
import Main from "./components/main";
import SignUp from "./components/signup";
import LogIn from "./components/login";
import Forgot from "./components/forgot";
import "./App.css";

function App() {
	let Component;
	switch (window.location.pathname) {
		case "/":
			Component = Main;
			break;
		case "/About":
			Component = About;
			break;
		case "/SignUp":
			Component = SignUp;
			break;
		case "/Forgot":
			Component = Forgot;
			break;
		case "/LogIn":
			Component = LogIn;
			break;
	}
	return (
		<>
			<Component />
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
				</header>
			</div>
		</>
	);
}

export default App;
