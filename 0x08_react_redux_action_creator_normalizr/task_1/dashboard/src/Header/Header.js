import logo from '../assets/logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import { AppContext }from '../App/AppContext';
import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={css(styles.header)}>
        <img src={logo} className={css(styles.AppLogo)} alt="logo" />
        <h1 className={css(styles.AppHeaderH1)}>
          School dashboard
        </h1>
        {this.context.user && this.context.user.isLoggedIn && (
          <p id='logoutSection' className={css(styles.welcome)}>Welcome{' '} <b>{this.context.user.email}</b><span onClick={this.context.logOut}>(logout)</span></p>
        )}
      </div>
    );
  }
  
}

Header.contextType = AppContext;

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: 'solid 2px #eb4034'
  },

  AppHeaderH1: {
    color: '#eb4034',
  },

  AppLogo: {
    width: '200px',
    height: '200px',
  },

  welcome: {
    position: 'absolute',
    right: '0',
    paddingTop: '10rem'
  }
})

export default Header;
