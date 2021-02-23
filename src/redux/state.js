// OOP Cont

import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";
import { sidebarReducer } from "./sidebar-reducer";

let store = {
	_state: {
		profilePage: {
			posts: [
				{ id: 1, message: "Hey how are you?", likeCount: 12 },
				{ id: 2, message: "Yo man see", likeCount: 42 },
				{ id: 3, message: "YEs asd it mor", likeCount: 62 },
				{ id: 4, message: "Yo yeah", likeCount: 98 },
			],
			newPostText: "Ваше сообщение",
		},
		messagesPage: {
			messages: [
				{ id: 1, message: "Gow in lorem text yo" },
				{ id: 2, message: "if go you nown aryon" },
				{ id: 3, message: "lusro asre netou yiout" },
				{ id: 4, message: "netou rawer faqawr " },
				{ id: 5, message: "Egor" },
				{ id: 6, message: "Ayrwe" },
				{ id: 7, message: "How" },
			],
			dialogs: [
				{ id: 1, name: "Atrt" },
				{ id: 2, name: "Dima" },
				{ id: 3, name: "Chera" },
				{ id: 4, name: "Ilased" },
				{ id: 5, name: "Egor" },
				{ id: 6, name: "Van" },
				{ id: 7, name: "Уне" },
			],
			newMessageBody: "",
		},
		sidebar: {},
	},
	_callSubscriber() {
		console.log("State was changed");
	},
	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},

	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
		this._state.sidebar = sidebarReducer(this._state.sidebar, action);

		this._callSubscriber(this._state);
	},
};





export default store;
window.store = store;

//41 fixed
