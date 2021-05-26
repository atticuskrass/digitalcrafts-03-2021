import React from 'react'
import { useState, useEffect } from 'react'
import Films from "./Films.jsx";
import "../styles/Films.css";

export default function FilmContainer() {
    const [films, setFilms] = useState([]);
	const [userInput, setUserInput] = useState("");

	useEffect(() => {
		getFilmsDefault();
	}, []);

	const changeInput = (event) => {
		setUserInput(event.target.value);
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		getFilms()		
	}

	const getFilmsDefault = async () => {
		const filmData = await fetch(
			"http://www.omdbapi.com/?apikey=446be3ac&s=type"
		);
		const filmDataJson = await filmData.json();
		setFilms(filmDataJson.Search);
		};

	const getFilms = async () => {
		const filmData = await fetch(
			`http://www.omdbapi.com/?apikey=446be3ac&s=${userInput}`
		);
		const filmDataJson = await filmData.json();
		setFilms(filmDataJson.Search);
		};
	
    return (
		<div className="film__divContainer">
			<div className="film__cardDataMap">
					{films.map((film) => (
						<Films film={film}/>
					))}
       		</div>
		<form className="film__searchForm" onSubmit={handleSubmit}>
		<input 
			className="film__searchField" 
			type="text" 
			placeholder="Search for film"
			value={userInput}
			onChange={changeInput}
		></input>
		<button className="film__submitBtn" type="submit">Get Films</button>
		</form>
		</div>
    )
}
