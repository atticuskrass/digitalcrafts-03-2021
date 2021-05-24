import React from "react";
import "./App.css";
import SignUpForm from "./components/SignUpForm.jsx";
import UserDisplay from "./components/UserDisplay.jsx";

export default function App() {
	const [firstName, setFirstName] = useState(initialstate);
	// 	const setInitialState = (e) => {
	// 		const formValues =
	// };
	return (
		<div className="App">
			<div className="sign-up">
				<SignUpForm firstName={firstName} setFirstName={setFirstName} />
			</div>

			<UserDisplay />
		</div>
	);
}
