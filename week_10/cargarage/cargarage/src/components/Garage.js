import React, { Component } from "react";
import MuscleCar from "./MuscleCar";
import ExoticCar from "./ExoticCar";
import Motorcycle from "./Motorcycle";

export default class Garage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			vehicles: [
				{
					muscle: [
						{ american: [{ name: "Ford Taurus 3000" }] },
						{ foreign: [{ name: "Le Vroom 2021" }] },
					],
				},
				{
					exotic: [{ american: [{}] }, { foreign: [{}] }],
				},
				{
					motorcycles: [{ american: [{}] }, { foreign: [{}] }],
				},
			],
		};
	}
	render() {
		const { vehicles } = this.state;
		return (
			<div className="garage">
				<h3>Welcome to my Garage!</h3>
				<MuscleCar muscle={vehicles[0]} />
				<ExoticCar exotic={vehicles[1]} />
				<Motorcycle motorcycles={vehicles[2]} />
			</div>
		);
	}
}
