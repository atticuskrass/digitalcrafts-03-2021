import React from 'react'
import "../styles/Header.css";

export default function Header({ userInput, handleSubmit, changeInput }) {
    return (
        <div className="header__container">
            <img className="header__Logo" src="https://bit.ly/3oY1NXC" alt=""></img>
            <p className="header__name">HorrorVision</p>
        <div>
        <form className="film__searchForm" onSubmit={handleSubmit}>
		    <input 
			    className="film__searchField" 
			    type="text" 
			    placeholder="Search for film"
			    value={userInput}
			    onChange={changeInput}
		    ></input>
		    <button className="film__submitBtn" type="submit">Get Films</button>
		</form>
        </div>
        </div>
       
    )
}
