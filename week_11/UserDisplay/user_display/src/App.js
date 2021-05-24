import React, { useState } from "react";
import SignUpForm from "./components/SignUpForm.jsx";
import UserDisplay from "./components/UserDisplay.jsx";
import "./App.css";

// creating initialState, receives formValues and userDetails for values
const initialState = {
	userName: "",
	passWord: "",
	email: "",
};

export default function App() {
	// Creating State
	const [formValues, setFormValues] = useState(initialState);
	const [userDetails, setUserDetails] = useState(initialState);

	// Takes in input values and updates initialState values
	const setUserAndResetForm = (formValues) => {
		setUserDetails(formValues);
		setFormValues(initialState);
	};

	return (
		<div className="app">
			{/* PROPS */}
			<SignUpForm
				formValues={formValues}
				setFormValues={setFormValues}
				setUserAndResetForm={setUserAndResetForm}
			/>
			<UserDisplay userDetails={userDetails} />
		</div>
	);
}
