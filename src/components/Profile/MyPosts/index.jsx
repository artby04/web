import Post from "./Post";

const MyPosts = (props) => {
	let postsElemenst = props.postsData.map((p) => (
		<Post message={p.message} likeCount={p.likeCount} />
	));

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
