import DialogItem from "./DialogItem";
import MessageItem from "./MessageItem";
import s from "./style.module.css";

const Dialogs = (props) => {
	let dialogsElem = props.dialogsData.map((d) => <DialogItem name={d.name} id={d.id} />);

	let messagesElem = props.messagesData.map((m) => <MessageItem message={m.message} />);
	return (
		<div className={s.dialogs}>
			<div className={s.dialogs__items}>{dialogsElem}</div>
			<div className={s.dialogs__messages}>{messagesElem}</div>
		</div>
	);
};

export default Dialogs;
