import React from 'react'

export default function Header() {
    return (
        <div className="header__container">
            <img className="header__headerImage" src="" alt=""></img>
            <form className="header__searchForm">
            <input 
                className="header__filmSearch" 
                type="text" 
                placeholder="Search for films"
                onChange="">
            </input>
            </form>
        </div>
    )
}
