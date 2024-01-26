import logo from '../assets/logo.jpg';
import { StyleSheet, css } from 'aphrodite';

function Header() {
  return (
      <div className={css(styles.AppHeader)}>
        <img src={logo} className={css(styles.AppLogo)} alt="logo" />
        <h1 className={css(styles.AppHeaderH1)}>
          School dashboard
        </h1>
      </div>
  );
}

const styles = StyleSheet.create({
  AppHeader: {
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
  }
})

export default Header;
