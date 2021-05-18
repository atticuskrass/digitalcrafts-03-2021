import React, { Component } from "react";

export default class Footer extends Component {
	render() {
		return (
			<div className="footer-div">
				<ul className="footer-list">
					<li className="footer-1">Advertising</li>
					<li className="footer-2">Business</li>
					<li className="footer-3">How Search Works</li>
				</ul>
				<ul className="middle-list">
					<li className="middle">Carbon neutral since 2007</li>
				</ul>
				<ul className="right-side">
					<li className="right-side-1">Privacy</li>
					<li className="right-side-2">Terms</li>
					<li className="right-side-3">Settings</li>
				</ul>
			</div>
		);
	}
}
