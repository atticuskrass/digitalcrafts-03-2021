import React from 'react'
import "../styles/Films.css";

export default function Films({ film }) {
    return (
        <div className="films__getFilmDisplay">
            <h4 className="film__title">{film.Title}</h4>
            <p className="film__standard">{film.Year}</p>
            {/* <p className="film__standard">{film.Type}</p> */}
            <img className="film__Poster" src={film.Poster} alt=""></img>
            </div>
    )
}
