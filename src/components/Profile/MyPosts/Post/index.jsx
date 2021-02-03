import s from "./style.module.css";

const Post = (props) => {
	return (
		<div className={s.item}>
			<img
				src="https://webref.ru/example/image/meduza3.jpg"
				alt="photo"
				className={s.post__photo}
			/>
			{props.message}
			<div>
				<span>{props.likeCount}</span>
			</div>
		</div>
	);
};

export default Post;
