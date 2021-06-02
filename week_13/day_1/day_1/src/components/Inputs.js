import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserName } from "../actions/user-actions.js";
import { setEmail } from "../actions/email-actions.js";
import { setUserInfo } from "../actions/userInfo-actions.js";

export default function Inputs() {
	const dispatch = useDispatch();
	const userName = useSelector((state) => state.userName);
	const email = useSelector((state) => state.email);
	return (
		<div className="inputs__container">
			<h1 className="inputs__headline">Log In Please!</h1>
			<form className="inputs__Form">
				<input
					className="inputs__UserName"
					type="text"
					placeholder="Enter username"
					onChange={(e) => setUserName(dispatch, e.target.value)}
				></input>
				<input
					className="inputs__Email"
					type="text"
					placeholder="Enter email"
					onChange={(e) => setEmail(dispatch, e.target.value)}
				></input>
				<button
					type="submit"
					onClick={() => setUserInfo(dispatch, userName, email)}
				>
					Submit
				</button>
			</form>
		</div>
	);
}
