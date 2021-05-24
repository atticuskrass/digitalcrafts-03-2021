import React, { Component } from "react";
import { data } from "./Data/data.js";
import CardDisplay from "./components/CardDisplay.jsx";

export class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>Pokemon Search Page</h1>
				<div className="card-display">
					<CardDisplay pokemonData={data} />
				</div>
			</div>
		);
	}
}

export default App;
