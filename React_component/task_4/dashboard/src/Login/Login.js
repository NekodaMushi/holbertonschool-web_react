import './Login.css';
import React from 'react';

function Login() {
  return (
    <React.Fragment>
      <p>Login to access the full dashboard</p>
      <label htmlFor="email">Email: </label>
      <input type="email" name="email" id="email"></input>
      <label htmlFor="pwd">Password: </label>
      <input type="password" name="pwd" id="pwd"></input>
      <button>OK</button>
    </React.Fragment>
  )
}

export default Login;
