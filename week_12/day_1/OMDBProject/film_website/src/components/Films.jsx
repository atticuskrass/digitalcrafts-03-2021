import React from 'react'
import "../styles/Films.css";

export default function Films({ film }) {
    return (
        <div className="films__filmDisplay">
            <h4 className="film__title">{film.Title}</h4>
            <p className="film__standard">{film.Year}</p>
            <p className="film__standard">{film.Type}</p>
            <img src={film.Poster} alt=""></img>
            </div>
    )
}
