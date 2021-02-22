import Discr from "./Discription";
import s from "./style.module.css";

const ProfileInfo = () => {
	return (
		<div className={s.profile__info}>
			<div className={s.banner}>
				<img
					className={s.banner__img}
					src="https://i.pinimg.com/originals/fd/35/3b/fd353bc805f4ef41f6b2949a0c9e9efe.png"
					alt="fot"
				/>
			</div>
			<Discr />
		</div>
	);
};

export default ProfileInfo;
