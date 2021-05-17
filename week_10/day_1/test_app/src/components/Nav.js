import React, { Component } from "react";
import "../App.css";
export default class Nav extends Component {
	render() {
		return (
			<div className="nav">
				<a href="home">Home</a>
				<a href="portfolio">Portfolio</a>
			</div>
		);
	}
}
