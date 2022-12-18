import About from "./components/about";
import Main from "./components/main";
import SignUp from "./components/signup";
import LogIn from "./components/login";
import Forgot from "./components/forgot";
import Wishlists from "./components/wishlists";
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
		case "/Dashboard":
			Component = Wishlists;
			break;
	}
	return (
		<>
			<Component />
		</>
	);
}

export default App;
