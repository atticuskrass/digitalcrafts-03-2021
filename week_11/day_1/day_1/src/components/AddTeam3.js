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
	render() {
		return (
			<div>
				<h1>Change Team Data</h1>
				<p>Team Name: {this.state.teamName}</p>
				<p>Home Ground: {this.state.homeGround}</p>
				<p>Owners: {this.state.owners}</p>
				<p>Manager: {this.state.manager}</p>
				<input type="text" onChange={this.state.teamName} />
				<button
					onClick={() => this.setState({ teamName: this.state.teamName })}
				></button>
			</div>
		);
	}
}
