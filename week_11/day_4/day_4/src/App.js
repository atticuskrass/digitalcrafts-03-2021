import "./App.css";
import React, { useState } from "react";
import { AppStyle } from "./components/styledComponents/AppStyles";
import SignUpForm from "./components/SignUpForm";
import UserDetails from "./components/UserDetails";

function App() {
	const [firstName, setFirstName] = useState(""));
	return (
		<AppStyle className="App">
			<SignUpForm firstName={firstName} setFirstName={setFirstName} />
			<UserDetails />
		</AppStyle>
	);
}

export default App;
