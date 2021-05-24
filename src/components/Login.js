import React, { useState } from "react";
import "./styles/Login.css";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  //Register and sign in info from firebase site. Need config file info and Authentication setup. "get started/sign-in method. Enable email/password"

  //you will need to npm i firbase package OR sudo npm i -g firebase-tools for global install
  const signIn = (e) => {
    e.preventDefault()
    //Firebase Login functionality
  }

  const register = (e) => {
    e.preventDefault()
    //Firebase Register functionality
  }
 
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

          <h5>Password</h5>
          <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

          <button onClick={signIn} type='submit' className='login__signInButton'>Sign In</button>
        </form>

        <p>
          By signing-in you agree to CPARROS AMAZON CLONE Condition of Use & Fun. Please see our nonexistent Provacy Notice, Cookie Notice and Interest-Based ads and remember to be KIND to everyone around you.
        </p>

        <button onClick={register} className='login__registerButton'>Create New Amazon Account</button>
      </div>
    </div>
  );
}

export default Login;
