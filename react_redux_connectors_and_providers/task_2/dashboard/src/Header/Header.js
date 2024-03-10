import logo from '../assets/logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import { AppContext }from '../App/AppContext';
import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/uiActionCreators';
import PropTypes from 'prop-types';
import { is } from 'immutable';

export class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { user, logout } = this.props;
    return (
      <div className={css(styles.header)}>
        <img src={logo} className={css(styles.AppLogo)} alt="logo" />
        <h1 className={css(styles.AppHeaderH1)}>
          School dashboard
        </h1>
        {user && (
          <p id='logoutSection' className={css(styles.welcome)}>Welcome{' '} <b>{user.email}</b><span onClick={logout}>(logout)</span></p>
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

Header.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func
}

Header.defaultProps = {
  user: null,
  logout: () => {}
}

export const mapStateToProps = (state) => {
  return {
    user: state.get('user')
  }
}

export const mapDispatchToProps = {
  logout
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
