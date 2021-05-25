import React, { useState, useEffect} from 'react'
import Films from "./Films.jsx";

export default function FilmContainer() {
    const [films, setFilms] = useState([]);

	useEffect(() => {
		getFilms();
	}, []);

	// const searchCriteria = 

	const getFilms = async () => {
		const filmData = await fetch(
			"http://www.omdbapi.com/?apikey=446be3ac&s=type"
		);
		const filmDataJson = await filmData.json();
		setFilms(filmDataJson.Search);
	};
	console.log(films);
    return (
		<div className="film__filterData">
				{films.map((film) => (
					<Films film={film}/>
				))}
        </div>
    )
}
