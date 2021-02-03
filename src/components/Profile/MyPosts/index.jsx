import Post from "./Post";
import s from "./style.module.css";

const MyPosts = () => {
	let postsData = [
		{ id: 1, message: "Hey how are you?", likeCount: 12 },
		{ id: 2, message: "Yo man see", likeCount: 42 },
		{ id: 3, message: "YEs asd it mor", likeCount: 62 },
		{ id: 4, message: "Yo yeah", likeCount: 98 },
	];

	let postsElemenst = postsData.map((p) => <Post message={p.message} likeCount={p.likeCount} />);

	return (
		<div>
			My posts
			<div>
				<textarea></textarea>
				<div>
					<button>Add</button>
				</div>
			</div>
			<div>{postsElemenst}</div>
		</div>
	);
};

export default MyPosts;
