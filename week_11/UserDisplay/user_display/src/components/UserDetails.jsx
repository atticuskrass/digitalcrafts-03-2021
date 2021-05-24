import React from 'react'

export default function UserDetails({ formValues, resetUserDetails }) {
    return (
        <div className="user__formContainer">
            <h1>User Display</h1>
        <form className="user__form" action="">
            <input 
                type="text"
                value={formValues.userName}
                placeholder="Username"/>
            <input 
                type="password"
                value={formValues.passWord}
                placeholder="Password"/>
            <input 
                type="text"
                value={formValues.email}
                placeholder="Email"/>
        </form>
        <button className="user__clearBtn" onClick={() => resetUserDetails()}>Clear User Details</button>
        </div>
    )
}
