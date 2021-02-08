import MyPosts from "./MyPosts";
import ProfileInfo from "./ProfileInfo";
import s from "./style.module.css";

const Profile = (props) => {


	return (
		<div className={s.profile}>
			<ProfileInfo />
			<MyPosts postsData={props.postsData} addPost={props.addPost}/>
		</div>
	);
};

export default Profile;
