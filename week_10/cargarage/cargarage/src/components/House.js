import React, { Component } from "react";
import Garage from "./Garage";

export default class House extends Component {
	render() {
		return (
			<div>
				<h1>My Vehicle Collection</h1>
				<Garage />
			</div>
		);
	}
}
