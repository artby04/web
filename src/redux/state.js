// OOP Cont

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

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
		},
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
		if (action.type === ADD_POST) {
			let newPost = {
				id: 5,
				message: this._state.profilePage.newPostText,
				likeCount: 0,
			};
			this._state.profilePage.posts.push(newPost);
			this._state.profilePage.newPostText = "";
			this._callSubscriber(this._state);
		} else if (action.type === UPDATE_NEW_POST_TEXT) {
			this._state.profilePage.newPostText = action.newText;
			this._callSubscriber(this._state);
		}
	},
};

export const addPostActionCreater = () => ({ type: ADD_POST });
export const updateNEwPostTextActionCreator = (text) => ({
	type: UPDATE_NEW_POST_TEXT,
	newText: text,
});

export default store;
window.store = store;
