import react from "react";
import Post from "./Post";

const MyPosts = (props) => {
	let postsElemenst = props.postsData.map((p) => (
		<Post message={p.message} likeCount={p.likeCount} />
	));

	let newPostElement = react.createRef();

	let addPost = () => {
		let text = newPostElement.current.value;
		props.addPost(text);
	};

	return (
		<div>
			My posts
			<div>
				<textarea ref={newPostElement}></textarea>
				<div>
					<button onClick={addPost}>Add</button>
				</div>
			</div>
			<div>{postsElemenst}</div>
		</div>
	);
};

export default MyPosts;
