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

const MessageItem = (props) => {
	return <div className={s.message}>{props.message}</div>;
};

const Dialogs = () => {
	let dialogsData = [
		{ id: 1, name: "Atrt" },
		{ id: 2, name: "Dima" },
		{ id: 3, name: "Chera" },
		{ id: 4, name: "Ilased" },
		{ id: 5, name: "Egor" },
	];

	let messagesData = [
		{ id: 1, message: "Gow in lorem text yo" },
		{ id: 2, message: "if go you nown aryon" },
		{ id: 3, message: "lusro asre netou yiout" },
		{ id: 4, message: "netou rawer faqawr " },
		{ id: 5, message: "Egor" },
	];

	let dialogsElem = dialogsData.map((d) => <DialogItem name={d.name} id={d.id} />);

	let messagesElem = messagesData.map((m) => <MessageItem message={m.message} />);
	return (
		<div className={s.dialogs}>
			<div className={s.dialogs__items}>
				{/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
				<DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
				<DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
				<DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
				<DialogItem name={dialogsData[4].name} id={dialogsData[4].id} /> */}
				{dialogsElem}
			</div>
			<div className={s.dialogs__messages}>
				{messagesElem}
			</div>
		</div>
	);
};

export default Dialogs;
