import React,{useState,useEffect} from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import Header from "./Header.js";
import SwipeButtons from "./SwipeButtons.js";
import TinderCards from "./TinderCards.js";
import TotalChats from "./TotalChats.js";
import ChatScreen from "./ChatScreen.js";
import './App.css';

function App() {
  return (
    //BEM
    <div>
	<Router>
		<Switch>

		{/*TOGGLE BETWEEN PERSONAL CHAT TO TOTAL CHAT*/}
			<Route path="/chat/:person">
				<Header backButton="/chat" />
					{/* <h1>I am Personal Chatpage</h1> */}
					<ChatScreen />
			</Route>

		{/*TOGGLE BETWEEN TOTAL CHAT TO HOME PAGE*/}
			<Route path="/chat">
				<Header backButton="/" />
					{/*<h1>I am Chatpage</h1>*/}
					<TotalChats name="Hello Coder" url="./tinder-logo.png" lastMessage="Glad to text you" timeStamp="2 sec ago"/>
					<TotalChats name="Hello Coder" url="./tinder-logo.png" lastMessage="Glad to text you" timeStamp="2 sec ago"/>
			</Route>

		{/*ROOT SHOULD BE ON THE BOTTOM*/}
			<Route path="/">
				<Header />
				<TinderCards />
				<SwipeButtons />
			</Route>
		</Switch>
		{ /* <Cards />   }
		{ <Buttons /> }
		{ <Chats />   }
		{ <Individual_Chats />  */ }
	</Router>
	</div>
  );
}

export default App;