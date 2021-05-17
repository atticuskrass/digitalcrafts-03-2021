import "./App.css";
import React, { Component } from "react";
export default class App extends Component {
	// create the constructor (props)
	// invoke super inside of the constructor, pass it props as an argument
	// define this.state={}
	constructor(props) {
		super(props);
		// state management
		// the process of components passing data to each other
		// is called props
		// the process of a component managing it's own data
		// and preserving it in a holding space, temporarily
		// this is called state management
		// initializing state
		this.state = {
			counter: 0,
			title: "State Management",
			itIsRainingInHouston: true,
		};
		//this.setState({})
		// this is the built in function to manipulate any state variable
		// you will only use this.setState to change state.
	}
	render() {
		const { counter, title } = this.state;
		return (
			<div>
				<h1>State Management</h1>
				<p>{title}</p>
				<p>Counter {counter}</p>
			</div>
		);
	}
}
