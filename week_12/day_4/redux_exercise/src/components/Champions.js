import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { changeLeagueChampions } from "../actions/championActions";

export default function Champions() {
	const dispatch = useDispatch();
	const leagueChampions = useSelector((state) => state.leagueChampions);
	return (
		<div>
			<h1>Premier League Champions</h1>
			{leagueChampions.map((data) => (
				<p>{data.club}</p>
			))}
			<button onClick={() => changeLeagueChampions(dispatch)}>
				Change League Champion
			</button>
		</div>
	);
}
