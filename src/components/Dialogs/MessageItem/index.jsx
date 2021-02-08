import s from "./style.module.css";

const MessageItem = (props) => {
	return (
		<div>
			<div className={s.message}>{props.message}</div>
		</div>
	);
};

export default MessageItem;
