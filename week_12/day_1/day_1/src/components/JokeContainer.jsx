import React, { useState, useEffect } from 'react';
import Jokes from "./Jokes.jsx";

export default function JokeContainer() {
    const [joke, setJoke ] = useState("");

    useEffect(() => {
        getDadJokes()
    }, []);

    const getDadJokes = async () => {
        const response = await fetch("https://icanhazdadjoke.com/", {
            headers: { Accept: "application/json" },
        });
        const parsedData = await response.json();

        setJoke(parsedData.joke);
    }

    return (
        <div>
            <Jokes joke={joke} setJoke={setJoke} />
            <button onClick={() => getDadJokes()}>New Joke</button>
        </div>
    )
}
