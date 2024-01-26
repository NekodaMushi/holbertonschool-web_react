import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
  return (
    <React.Fragment>
      <p className={css(styles.loginP)}>Login to access the full dashboard</p>
      <label htmlFor="email" className={css(styles.loginLabel)}>Email: </label>
      <input type="email" name="email" id="email"></input>
      <label htmlFor="pwd" className={css(styles.loginLabel)}>Password: </label>
      <input type="password" name="pwd" id="pwd"></input>
      <button className={css(styles.loginButton)}>OK</button>
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  loginP: {
    paddingLeft: '2%',
    paddingTop: '2%',
  },

  loginLabel: {
    paddingLeft: '2%',
    paddingTop: '2%',
  },

  loginButton: {
    marginLeft: '2%',
  },
});

export default Login;
