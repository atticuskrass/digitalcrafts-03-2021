import React from 'react'
import { useDispatch, useSelector } from "react-redux";

export default function Username() {
     const userName = useSelector((state) => state.userName);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Change Username</h1>
            <p>{userName}</p>
            <button onClick={() => dispatch({ type: "CHANGE_USERNAME_TO_JOE"})}></button>
        </div>
    )
}
