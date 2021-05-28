import React from 'react'
import { useSelector, useDispatch } from "react-redux";

export default function Counter() {
    const dispatch = useDispatch()
    const counter = useSelector((state) => state.counter)

    return (
        <div>
            <h1>Counter</h1>
        </div>
    )
}
