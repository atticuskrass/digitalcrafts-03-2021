import React, { Component } from "react";

export default class AmericanCar extends Component {
	render() {
		console.log(this.props);
		return (
			<div>
				<p>{this.props.muscle.american[0].name}</p>
			</div>
		);
	}
}
