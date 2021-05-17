import React, { Component } from "react";

export default class ForeignCar extends Component {
	render() {
		console.log(this.props);
		return (
			<div>
				<p>{this.props.muscle.foreign[0].name}</p>
			</div>
		);
	}
}
