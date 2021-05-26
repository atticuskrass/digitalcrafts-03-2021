import React from 'react'
import "../styles/Films.css";

export default function Films({ film }) {
    return (
        <div className="films__getFilmDisplay">
        <center>
            <img className="film__Poster" src={film.Poster} alt=""></img>
        </center>
            </div>
    )
}
