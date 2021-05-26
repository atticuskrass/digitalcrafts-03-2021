import React from "react";
import FilmContainer from "./components/FilmContainer.jsx";
import "./App.css";

export default function App() {
	return (
		<div className="app__container">
			<div className="app__filmContainer">
				<FilmContainer />
			</div>
		</div>
	);
}
