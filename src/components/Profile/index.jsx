import MyPosts from "./MyPosts";
import ProfileInfo from "./ProfileInfo";
import s from "./style.module.css";

const Profile = (props) => {
	return (
		<div className={s.profile}>
			<ProfileInfo />
			<MyPosts
				newPostText={props.postsData.newPostText}
				dispatch={props.dispatch}
				postsData={props.postsData.posts}
			/>
		</div>
	);
};

export default Profile;
