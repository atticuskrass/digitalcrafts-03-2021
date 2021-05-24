import React from 'react'

export default function SignUpForm() {
    return (
        <div>
            <form>
                <input type="text" placeholder="Enter First Name"></input>
            </form>
        <button className="sign-up-btn" value={setfirstName(firstName)} onChange={(e) => props.setFirstName(e.target.value)} type="text" placeholder="Sign Up">Sign Up</button>
        </div>
    )
}
