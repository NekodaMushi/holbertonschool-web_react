import React from 'react';
import { StyleSheet, css } from 'aphrodite';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      email: '',
      password: '',
      enableSubmit: false,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.email !== this.state.email ||
      prevState.password !== this.state.password
    ) {
      this.setState({
        enableSubmit:
          this.state.email.length > 0 && this.state.password.length > 0,
      });
    }
  }

  handleLoginSubmit = (e) => {
    e.preventDefault();
    this.setState({ isLoggedIn: true });
  }

  handleChangeEmail = (event) => {
    this.setState({ email: event.target.value});
  }

  handleChangePassword = (event) => {
    this.setState({ password: event.target.value});
  }

  render() {
    return (
      <React.Fragment>
        <p className={css(styles.loginP)}>Login to access the full dashboard</p>
        <div className={css(styles.logInput)}>
          <form onSubmit={this.handleLoginSubmit} className={(css(styles.small, styles.oneInput))}>
            <label htmlFor="email" className={css(styles.loginLabel)}>Email: </label>
            <input type="email" name="email" id="email" value={this.state.email} onChange={this.handleChangeEmail}></input>
            <label htmlFor="pwd" className={css(styles.loginLabel)}>Password: </label>
            <input type="password" name="pwd" id="pwd" value={this.state.password} onChange={this.handleChangePassword}></input>
            <input type="submit" name="button" value="OK" className={css(styles.loginButton)} disabled={!this.state.enableSubmit}></input>
          </form>
        </div>
      </React.Fragment>
    )
  }
}

const styles = StyleSheet.create({
  loginP: {
    paddingLeft: '3%',
    paddingTop: '2%',
  },

  loginLabel: {
    paddingLeft: '2%',
    paddingRight: '2%',
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
  },

  logInput: {
    display: 'flex',
    flexDirection: 'row'
  },

  oneInput: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: '2%',
  }
});

export default Login;
