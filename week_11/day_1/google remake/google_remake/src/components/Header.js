import React, { Component } from "react";

export default class Header extends Component {
	render() {
		return (
			<div>
				<div className="navbar">
					<ul className="nav-links-1">
						<li>
							<a href="/">About</a>
						</li>
						<li>
							<a href="/store">Store</a>
						</li>
					</ul>
					<ul className="nav-links-2">
						<li>
							<a href="/gmail">Gmail</a>
						</li>
						<li>
							<a href="/Images>">Images</a>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}
