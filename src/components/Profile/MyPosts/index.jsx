import react from "react";
import Post from "./Post";

const MyPosts = (props) => {
	let postsElemenst = props.postsData.map((p) => (
		<Post message={p.message} likeCount={p.likeCount} />
	));

	let newPostElement = react.createRef();

	let addPost = () => {
		props.dispatch({ type: "ADD-POST" });
	};

	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.dispatch({ type: "UPDATE-NEW-POST-TEXT", newText: text });
	};

	return (
		<div>
			My posts
			<div>
				<textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
				<div>
					<button onClick={addPost}>Add</button>
				</div>
			</div>
			<div>{postsElemenst}</div>
		</div>
	);
};

export default MyPosts;
