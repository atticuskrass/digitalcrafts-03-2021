import React, { Component } from "react";

export default class AddTeam extends Component {
	constructor(props) {
		super(props);
		this.state = {
			teamName: "Liverpool F.C.",
			homeGround: "Anfield",
			owners: "Fenway Sports Group",
			manager: "Jurgen Klopp",
		};
	}
	// mySubmitHandler = (event) => {
	//     event.preventDefault();
	//     alert("Change Submitted " + this.state.teamName)};
	// myChangeHandler = event
	render() {
		return (
			<div>
				<h2>Change Team Data</h2>
				<h3>List of Team(s)</h3>
				<p>Team Name: {this.state.teamName}</p>
				<p>Home Ground: {this.state.homeGround}</p>
				<p>Owners: {this.state.owners}</p>
				<p>Manager: {this.state.manager}</p>
				<input type="text" onChange={this.state.teamName} />
			</div>
		);
	}
}
