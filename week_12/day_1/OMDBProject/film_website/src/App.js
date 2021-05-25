import React from "react";
import Header from "./components/Header.jsx";
import FilmContainer from "./components/FilmContainer.jsx";

export default function App() {
	return (
		<div className="app__container">
			<div className="app__header">
				<Header />
			</div>
			<div className="app__filmContainer">
				<FilmContainer />
			</div>
		</div>
	);
}
