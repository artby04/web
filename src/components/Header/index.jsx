import s from "./style.module.css";

const Header = () => {
	return (
		<header className={s.header}>
			<div className={s.header__content}>
				<div className={s.header__logo}>
               Rafber
				</div>
			</div>
		</header>
	);
};

export default Header;
