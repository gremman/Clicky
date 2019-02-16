//sets up the reusable Jumbotron component
import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => (
	<header className = "header">
		<h1>Donut Click Memory Game</h1>
		<h2>Click on any image to earn a point. Click any image more than once and you lose. Click all 12 images and you win!</h2>
	</header>
);

export default Jumbotron;