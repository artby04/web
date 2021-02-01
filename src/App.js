import logo from "./logo.svg";
import "./App.css";

function App() {
	return (
		<div className="wrapper">
			<header className="header">
				<div className="header__content">
					<div className="header__logo">
						<img src={logo} alt="Logo" />
					</div>
				</div>
			</header>
			<nav className="nav">
				<div>
					<a href="">Profile</a>
				</div>
				<div>
					<a href="">Messages</a>
				</div>
				<div>
					<a href="">News</a>
				</div>
				<div>
					<a href="">Music</a>
				</div>
				<div>
					<a href="">Settings</a>
				</div>
			</nav>
			<div className="content">
				<img src="https://miro.medium.com/max/1050/1*Fxa6oJFh2lRD7EnAcZIcQg.png" alt="" />
			</div>
		</div>
	);
}

export default App;
