import React, { useState } from "react";
import AboutMe from "./components/AboutMe";
import Blog from "./components/Blog";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	return (
		<div>
			<Router>
				<div>
					<nav>
						<Link to="/">Home</Link>
						<Link to="/aboutme">About Me</Link>
						<Link to="/blog">Blog</Link>
					</nav>
				</div>
				<Switch>
					<Route path="/aboutme">
						<AboutMe />
					</Route>
					<Route path="/blog">
						<Blog />
					</Route>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="*">
						<h1>Error Error Error!</h1>
					</Route>
				</Switch>
			</Router>
		</div>
	);
}
