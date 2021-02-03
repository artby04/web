import MyPosts from "./MyPosts";
import ProfileInfo from "./ProfileInfo";
import s from "./style.module.css";

const Profile = () => {
	return (
		<div className={s.profile}>
			<ProfileInfo /> 
			<MyPosts />
		</div>
	);
};

export default Profile;
