import React from 'react'

export default function Jokes({ joke, setJoke}) {
    return (
        <div>
            <h1>Jokes</h1>
            <p>{joke}</p>
        </div>
    )
}
