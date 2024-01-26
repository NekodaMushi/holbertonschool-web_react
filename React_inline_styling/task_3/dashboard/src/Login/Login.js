import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
  return (
    <React.Fragment>
      <p className={css(styles.loginP)}>Login to access the full dashboard</p>
      <div className={css(styles.small)}>
        <label htmlFor="email" className={css(styles.loginLabel)}>Email: </label>
        <input type="email" name="email" id="email"></input>
        <label htmlFor="pwd" className={css(styles.loginLabel)}>Password: </label>
        <input type="password" name="pwd" id="pwd"></input>
        <button className={css(styles.loginButton)}>OK</button>
      </div>
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
    width: 'min-content',
  },

  small: {
    '@media (max-width: 900px)': {
        display: 'flex',
        flexDirection: 'column',
    }
  }
});

export default Login;
