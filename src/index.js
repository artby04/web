import "./index.css";
import reportWebVitals from "./reportWebVitals";
import state from "./redux/state";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { addPost } from "./redux/state";
import { updateNewPostText } from "./redux/state";
import { subscribe } from "./redux/state";
import { BrowserRouter } from "react-router-dom";

let rerenderEntireTree = (state) => {
	ReactDOM.render(
		<BrowserRouter>
			<App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
		</BrowserRouter>,
		document.getElementById("root")
	);
};
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
rerenderEntireTree(state);
subscribe(rerenderEntireTree);
reportWebVitals();
