import React from 'react'
import "../styles/Films.css";

export default function Films({ film }) {
    return (
        <div className="films__filmDisplay">
            <h4>{film.Title}</h4>
        </div>
    )
}
