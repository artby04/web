import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Dialogs from "./components/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";
import News from "./components/News";
import Settings from "./components/Settings";
import Music from "./components/Music";

function App() {
	return (
		<BrowserRouter>
			<div className="wrapper">
				<Header></Header>
				<Navbar />
				<div className="app-wrapper-content">
					<Route exact path="/dialogs" component={Dialogs} />
					<Route exact path="/profile" component={Profile} />
					<Route exact path="/news" component={News} />
					<Route exact path="/music" component={Music} />
					<Route exact path="/settings" component={Settings} />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
