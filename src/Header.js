import React from 'react';
import ProfileIcon from '@material-ui/icons/PersonRounded';
import ChatIcon from '@material-ui/icons/ForumRounded';
import BackIcon from '@material-ui/icons/ArrowBackIosRounded';

import {Link, useHistory} from "react-router-dom";

import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import "./Header.css";


// function Header() {

	const useStyles=makeStyles(theme => ({
		customHoverFocus:{
			"&:hover, &.Mui-focusVisible":{backgroundColor:"rgba(255,255,255,.2)"}
		}
	}));

	function IconButtons({ backButton }){
		const classes=useStyles();
		const history=useHistory();
	

	return(
			<div className="Header">
			{backButton ? (
				<IconButton className={classes.customHoverFocus}  onClick={() => history.replace(backButton)}>
					<BackIcon className="Header_Icon" fontSize="large" />
		    	</IconButton>
				):(
				<IconButton className={classes.customHoverFocus}>
			    	<ProfileIcon className="Header_Icon" fontSize="large" />
		    	</IconButton>
				)}
		    	{/*<a href="/"><img className="tinder_logo" src="./tinder-logo.png" alt=""/></a>*/}
		    {/* <a href="/chat"><IconButton className={classes.customHoverFocus}>
		    	<ChatIcon className="Header_Icon" fontSize="large" />
			</IconButton></a>  with reload to chage*/}

		    <Link to="/">
		    	<img className="tinder_logo" src="./tinder-logo.png" alt=""/>
		    </Link>	
			<Link to="/chat">
				<IconButton className={classes.customHoverFocus}>
			    	<ChatIcon className="Header_Icon" fontSize="large" />
				</IconButton>
			</Link>
			{/*without reloading to changes*/}
			</div>
		);
}

export default IconButtons;
// }

// export default Header;
