import React, { Component } from "react";
import AmericanCycles from "./AmericanCycles";
import ForeignCycles from "./ForeignCycles";

export default class Motorcycle extends Component {
	render() {
		return (
			<div>
				<h3>I also collect motorcycles</h3>
				<AmericanCycles />
				<ForeignCycles />
			</div>
		);
	}
}
