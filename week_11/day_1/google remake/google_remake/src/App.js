import React, { Component } from "react";
import Header from "./components/Header.js";
import Input from "./components/Search.js";
import Buttons from "./components/Buttons.js";
import Logo from "./components/Logo.js";
import Footer from "./components/Footer.js";
import "./App.css";

export default class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="header">
					<Header />
				</div>
				<div className="logo">
					<Logo />
				</div>
				<div className="search">
					<Input />
				</div>
				<div className="btns">
					<Buttons />
				</div>
				<div className="footer">
					<Footer />
				</div>
			</div>
		);
	}
}
