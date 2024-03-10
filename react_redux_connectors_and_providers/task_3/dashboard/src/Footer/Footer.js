import { getFullYear } from '../utils/utils';
import { getFooterCopy } from '../utils/utils';
/*import { AppContext } from '../App/AppContext';
import { useContext } from 'react';*/
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export function Footer(props) {
  return (
      <div className="App-footer">
        {props.user && <p className={css(styles.contact)}><a href='https://www.linkedin.com/company/holberton-school-france?originalSubdomain=fr'>Contact us</a></p>}
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

Footer.propTypes = {
  user: PropTypes.object
}

Footer.defaultProps = {
  user: null
}

export const mapStateToProps = (state) => {
  return {
    user: state.get('user')
  }
}

export default connect(mapStateToProps)(Footer);
