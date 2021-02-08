import react from "react";
import DialogItem from "./DialogItem";
import MessageItem from "./MessageItem";
import s from "./style.module.css";

const Dialogs = (props) => {
	let dialogsElem = props.dialogsData.map((d) => <DialogItem name={d.name} id={d.id} />);

	let messagesElem = props.messagesData.map((m) => <MessageItem message={m.message} />);

	let newMessageElem = react.createRef();

	let addMessage = () => {
		let text = newMessageElem.current.value;
		alert(text);
	};

	return (
		<div className={s.dialogs}>
			<div className={s.dialogs__items}>{dialogsElem}</div>
			<div>
				<div className={s.dialogs__messages}>{messagesElem}</div>
				<div className={s.dialogs__textarea}>
					<textarea ref={newMessageElem} name="" id="" cols="30" rows="10">
						asd
					</textarea>
					<button onClick={addMessage}>send message</button>
				</div>
			</div>
		</div>
	);
};

export default Dialogs;
