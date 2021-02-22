import react from "react";
import DialogItem from "./DialogItem";
import MessageItem from "./MessageItem";
import s from "./style.module.css";
import { sendMessageCreator, updateNewBodyCreator } from "../../redux/state";

const Dialogs = (props) => {
	let state = props.store.getState().messagesPage;
	console.log(state);
	debugger;
	let dialogsElem = state.dialogs.map((d) => <DialogItem name={d.name} id={d.id} />);
	let messagesElem = state.messages.map((m) => <MessageItem message={m.message} />);
	let newMessageBody = state.newMessageBody;

	let onSendMEssageClick = () => {
		props.store.dispatch(sendMessageCreator());
	};

	let onNewMessageChange = (e) => {
		let body = e.target.value;
		props.store.dispatch(updateNewBodyCreator(body));
	};

	return (
		<div className={s.dialogs}>
			<div className={s.dialogs__items}>{dialogsElem}</div>
			<div>
				<div className={s.dialogs__messages}>{messagesElem}</div>
				<div className={s.dialogs__textarea}>
					<div>
						<textarea
							value={newMessageBody}
							onChange={onNewMessageChange}
							placeholder="Enter tour new mes"
						></textarea>
					</div>
					<div>
						<button onClick={onSendMEssageClick}>send message</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dialogs;
