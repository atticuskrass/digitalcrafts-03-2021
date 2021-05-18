import React, { Component } from "react";
import googlelogo from "../img/googlelogo.png";

export default class Logo extends Component {
	render() {
		return (
			<div className="logo">
				<img src={googlelogo} alt=""></img>
			</div>
		);
	}
}
