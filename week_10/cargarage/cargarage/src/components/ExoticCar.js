import React, { Component } from "react";
import AmericanExCars from "./AmericanExCars";
import ForeignExCars from "./ForeignExCars";

export default class ExoticCar extends Component {
	render() {
		return (
			<div>
				<h3>And here I have exotic cars</h3>
				<AmericanExCars />
				<ForeignExCars />
			</div>
		);
	}
}
