import MyPosts from "./MyPosts";
import ProfileInfo from "./ProfileInfo";
import s from "./style.module.css";

const Profile = (props) => {
	return (
		<div className={s.profile}>
			<ProfileInfo />
			<MyPosts
				newPostText={props.postsData.newPostText}
				updateNewPostText={props.updateNewPostText}
				postsData={props.postsData.posts}
				addPost={props.addPost}
			/>
		</div>
	);
};

export default Profile;
