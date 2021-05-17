import React, { Component } from "react";
import AboutMe from "./AboutMe";
import "../App.css";

export default class AboutContainer extends Component {
	render() {
		return (
			<div className="aboutcontainer">
				<AboutMe />
			</div>
		);
	}
}
