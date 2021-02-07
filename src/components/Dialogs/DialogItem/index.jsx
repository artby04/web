import { NavLink } from "react-router-dom";
import s from "./style.module.css";

const DialogItem = (props) => {
	return (
		<div className={s.dialog + " " + s.active}>
			<NavLink className={s.navlink} to={"/dialogs/" + props.id}>
				{props.name}
			</NavLink>
		</div>
	);
};

export default DialogItem;
