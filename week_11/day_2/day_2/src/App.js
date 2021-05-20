import React, { Component } from "react";
import CardContainer from "./components/CardContainer.jsx";
import { data } from "./data/data";
import "./App.css";

export class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>Pokemon Search Page</h1>
				<CardContainer pokemonData={data} />
			</div>
		);
	}
}

export default App;
