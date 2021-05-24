import React from 'react'

export default function SignUpForm({ formValues, setFormValues, setUserAndResetForm }) {
    return (
        <div className="signup__formContainer">
            <h1>Create Account</h1>
            {/* inputs entered in field, spread operator to open formValues and add values from inputs */}
            <form className="signup__form" action="">
            <input 
                type="text"
                value={formValues.userName}
                placeholder="Enter a username"
                onChange={(event) =>
                    setFormValues({...formValues, userName: event.target.value})}
            />
             <input 
                type="password"
                value={formValues.passWord}
                placeholder="Enter a password"
                onChange={(event) =>
                    setFormValues({...formValues, passWord: event.target.value})}
            />
             <input 
                type="text"
                value={formValues.email}
                placeholder="Enter a email"
                onChange={(event) =>
                    setFormValues({...formValues, email: event.target.value})}
            />
            {/* takes formValues with new value data and sets the UserDetails and initialState */}
            <button className="signup__signupBtn" onClick={() => setUserAndResetForm(formValues)}>Sign Up</button>
            </form>
        {/* <div className="user__display">
            <h3>Username</h3>
            <p>{formValues.userName}</p>
        </div> */}
        </div>
    )
}
