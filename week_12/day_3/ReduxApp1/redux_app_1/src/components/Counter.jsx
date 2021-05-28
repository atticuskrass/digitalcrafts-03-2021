import React from 'react'
import { useSelector, useDispatch } from "react-redux";

export default function Counter() {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    return (
        <div className="counter__container">
        <center>
            <h1>The Amazing DigitalCrafts Counter!</h1>
            <p>{counter}</p>
            <button onClick={() => dispatch({ type: "ADD"})}>Add</button>
            <button onClick={() => dispatch({ type: "SUBTRACT"})}>Subtract</button>
        </center>
        </div>
    )
}
