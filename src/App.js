import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Dialogs from "./components/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";
import News from "./components/News";
import Settings from "./components/Settings";
import Music from "./components/Music";
import { addPost } from "./redux/state";

function App(props) {
	return (
		<BrowserRouter>
			<div className="wrapper">
				<Header></Header>
				<Navbar />
				<div className="app-wrapper-content">
					<Route
						exact
						path="/dialogs"
						render={() => (
							<Dialogs
								messagesData={props.state.messagesPage.messages}
								dialogsData={props.state.messagesPage.dialogs}
							/>
						)}
					/>
					<Route
						path="/profile"
						render={() => (
							<Profile
								updateNewPostText={props.updateNewPostText}
								postsData={props.state.profilePage}
								addPost={props.addPost}
							/>
						)}
					/>

					<Route path="/news" render={() => <News />} />
					<Route path="/music" render={() => <Music />} />
					<Route path="/settings" render={() => <Settings />} />
				</div>
			</div>
		</BrowserRouter>
	);
}
export default App;
