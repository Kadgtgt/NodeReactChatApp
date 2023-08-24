import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from "react-chat-engine-advanced";

const ChatsPage = (props) => {
	const chatProps = useMultiChatLogic(
		"26b78c60-e30a-4423-8838-88267576e46f",
		props.user.username,
		props.user.secret
	);
	return (
		<div style={{ height: "100vh" }}>
			<MultiChatSocket {...chatProps} />
			<MultiChatWindow {...chatProps} style={{ height: "100%" }} />
		</div>
	);
};

export default ChatsPage;
