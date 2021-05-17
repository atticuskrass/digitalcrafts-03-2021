import React, { Component } from "react";
import AmericanCar from "./AmericanCar";
import ForeignCar from "./ForeignCar";

export default class MuscleCar extends Component {
	render() {
		return (
			<div className="muscle">
				<h3>These are my muscle cars!</h3>
				<p>Here are a few from America</p>
				<ul>
					<li>
						<AmericanCar muscle={this.props.muscle.muscle[0]} />
					</li>
				</ul>
				<p>And some from outside America</p>
				<ul>
					<li>
						<ForeignCar muscle={this.props.muscle.muscle[1]} />
					</li>
				</ul>
			</div>
		);
	}
}
