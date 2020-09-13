import React,{useState} from 'react';
import Avatar from "@material-ui/core/Avatar";

import "./ChatScreen.css";

function ChatScreen() {

	const [messages,setMessages]=useState([
	{
		name:'Alan',
		image:'',
		message:"Hey hello",
	},
	{
		name:'Mark',
		image:'',
		message:"Hello there, Who are you?",
	}
	])

	return (
		<div className="chatScreen">
			{/* <h1>Hello i am personal chats</h1> */}
			<p> You matched with Alan at today,2:00 pm </p>
			{messages.map((message) => (
				<div className="chatScreen_Messages">
					<Avatar 
					variant="circle" 
					src={message.image} 
					alt={message.name} 
					children={message.name.slice(0,2)}/>
					<p className="chatScreen_Text">{message.message}</p>
				</div>
				))}
		</div>
	);
}

export default ChatScreen;