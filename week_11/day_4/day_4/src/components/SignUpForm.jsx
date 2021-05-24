import React, { useState } from "react";
import {
  SignUpButton,
  SignUpFormInput,
  SignUpFormDiv,
} from "./styledComponents/SignUpFormsStyles";

const SignUpForm = (props) => {
  return (
    <div className="sign-up-form-container">
      <h1>Create Account</h1>
      <SignUpFormDiv action="">
        <SignUpFormInput
          onChange={(e) => props.setFirstName(e.target.value)}
          type="text"
          value={props.firstName}
          placeholder="First Name"
        />
        {/* <SignUpFormInput 
          onChange={(e) => props.setLastName(e.target.value)} 
          type="text" 
          value={props.lastName} 
          placeholder="Last Name" />

        <SignUpFormInput 
          onChange={(e) => props.setEmail(e.target.value)} 
          type="text" 
          value={props.email} 
          placeholder="Email" />

        <SignUpFormInput 
          onChange={(e) => props.setPassword(e.target.value)} 
          type="password" 
          value={props.password} 
          placeholder="Password" />

        <SignUpFormInput 
          onChange={(e) => props.setPassword(e.target.value)} 
          type="password" 
          value={props.password} 
          placeholder="Re-Type Password" /> */}
        <SignUpButton>Sign Up</SignUpButton>
      </SignUpFormDiv>
    </div>
  );
};
export default SignUpForm;