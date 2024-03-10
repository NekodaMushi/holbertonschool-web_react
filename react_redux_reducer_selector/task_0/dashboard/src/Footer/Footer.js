import { getFullYear } from '../utils/utils';
import { getFooterCopy } from '../utils/utils';
import { AppContext } from '../App/AppContext';
import { useContext } from 'react';
import { StyleSheet, css } from 'aphrodite';

function Footer() {
  const value = useContext(AppContext);
  return (
      <div className="App-footer">
        {value.user.isLoggedIn && <p className={css(styles.contact)}><a href='https://www.linkedin.com/company/holberton-school-france?originalSubdomain=fr'>Contact us</a></p>}
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>
  )
}

const styles = StyleSheet.create({
  contact: {
    display: 'flex',
    justifyContent: 'flex-start',
  }
});

export default Footer;
