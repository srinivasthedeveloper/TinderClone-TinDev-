import React from 'react';
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";

import "./TotalChats.css";

function TotalChats({name,url,lastMessage,timeStamp}) {
	return (
		<div className="totalChats">
		<Badge anchorOrigin={{vertical:'top',horizontal:'right'}} />
			<Avatar variant="circle" src={url} alt={name} children={name.slice(0,2)}/>
			<div className="content">
				<h1>{name}</h1>
				<p>{lastMessage}</p>
			</div>
			<p>{timeStamp}</p>
		</div>
	);
}

export default TotalChats;