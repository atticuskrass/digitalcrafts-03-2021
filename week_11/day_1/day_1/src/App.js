import React, { Component } from "react";
import AddTeam from "./components/AddTeam.js";

export default class App extends Component {
	render() {
		return (
			<div>
				<h1>Soccer Team List</h1>
				<AddTeam />
			</div>
		);
	}
}
