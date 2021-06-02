import React from "react";
import Inputs from "./components/Inputs.js";
import UserInfo from "./components/UserInfo.js";

export default function App() {
	return (
		<div className="app__container">
			<Inputs />
			<UserInfo />
		</div>
	);
}
