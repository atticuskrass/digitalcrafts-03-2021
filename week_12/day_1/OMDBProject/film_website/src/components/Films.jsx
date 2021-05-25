import React from 'react'

export default function Films({ film }) {
    return (
        <div className="films__filmsDisplay">
            <p>{film.Title}</p>
        </div>
    )
}
