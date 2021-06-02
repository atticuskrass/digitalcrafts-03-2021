import React from "react";
import { useSelector } from "react-redux";

export default function UserInfo() {
	const userInfo = useSelector((state) => state.userInfo);
	return (
		<div className="userinfo__container">
			<h1>Logged In Users</h1>
			<p>{userInfo.email}</p>
			<p>{userInfo.userName}</p>
		</div>
	);
}
