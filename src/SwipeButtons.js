import React from 'react';
import "./SwipeButtouns.css";

import ReplayIcon from '@material-ui/icons/ReplayRounded';
import CloseIcon from '@material-ui/icons/CloseRounded';
import StarRateIcon from '@material-ui/icons/StarRateRounded';
import FavouriteIcon from '@material-ui/icons/FavoriteRounded';
import FlashOnIcon from '@material-ui/icons/FlashOnRounded';


import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";

const useStyles=makeStyles(theme => ({
		repeatHoverFocus:{
			"&:hover, &.Mui-focusVisible":{backgroundColor:"rgba(11,255,0,0.2)",color:"rgba(11,255,0,0.8)"}
		},
		closeHoverFocus:{
			"&:hover, &.Mui-focusVisible":{backgroundColor:"rgba(255,99,20,0.2)",color:"rgba(255,99,20,0.8)"}
		},
		superLikeHoverFocus:{
			"&:hover, &.Mui-focusVisible":{backgroundColor:"rgba(50,110,255,0.2)",color:"rgba(50,110,255,0.8)"}
		},
		likeHoverFocus:{
			"&:hover, &.Mui-focusVisible":{backgroundColor:"rgba(255,24,25,0.2)",color:"rgba(255,24,25,0.8)"}
		},
		flashHoverFocus:{
			"&:hover, &.Mui-focusVisible":{backgroundColor:"rgba(140,25,255,0.2)",color:"rgba(140,25,255,0.8)"}
		}
	}));

	export default function IconButtons(){
		const classes=useStyles();

	return (
		<div className="SwipeButtons">
			{/*<h2>SwipeButtons Here</h2>*/}
			<IconButton className={classes.repeatHoverFocus} >
			<ReplayIcon fontSize="large" className="SwipeButton_Repeat" />
			</IconButton>
			<IconButton className={classes.closeHoverFocus} >
			<CloseIcon fontSize="large" className="SwipeButton_Close" />
			</IconButton>
			<IconButton className={classes.superLikeHoverFocus} >
			<StarRateIcon fontSize="large" className="SwipeButton_SuperLike" />
			</IconButton>
			<IconButton className={classes.likeHoverFocus} >
			<FavouriteIcon fontSize="large" className="SwipeButton_Like" />
			</IconButton>
			<IconButton className={classes.flashHoverFocus} >
			<FlashOnIcon fontSize="large" className="SwipeButton_Flash" />
			</IconButton>
		</div>
	);
}
