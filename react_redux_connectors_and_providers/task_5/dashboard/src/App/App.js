import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import { displayNotificationDrawer, hideNotificationDrawer, loginRequest, logout } from '../actions/uiActionCreators';

const listCourses = [
  {id: 1, name: 'ES6', credit: 60},
  {id: 2, name: 'Webpack', credit: 20},
  {id: 3, name: 'React', credit: 40}
];

/*export const listNotifications = [
  { id: 1, value: 'New course available', type: 'default' },
  { id: 2, value: 'New resume available', type: 'urgent' },
  { id: 3, html: { __html: getLatestNotification() }, type: 'urgent' },
]*/

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleKey = this.handleKey.bind(this);
    this.state = {
      user: {
        email: '',
        password:'',
        /*isLoggedIn: false,*/
      },
      /*logOut: this.logOut,*/
      /*listNotifications: listNotifications,*/
    };
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKey);
  }

  handleKey = e => {
    if (e.key == 'h' && e.ctrlKey) {
      e.preventDefault();
      alert('Logging you out');
      this.props.logout();
    }
  }

  /*logIn = (email, password) => {
    this.setState({ user: {
      email: email,
      password: password,
      isLoggedIn: true,
    }})
  }

  logOut = () => {
    this.setState({ user: {
      email: '',
      password: '',
      isLoggedIn: false,
    } })
  }*/

  /*markNotificationAsRead = (id) => {
    const newList = this.state.listNotifications.filter((element) => {
      return element.id !== id;
    });
    this.setState({ listNotifications: newList });
  }*/

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKey);
  }

  render() {
    const {listNotifications} = this.state;
    const { displayDrawer, isLoggedIn, displayNotificationDrawer, hideNotificationDrawer, login } = this.props;
    return (
      <>
        <Notifications displayDrawer={displayDrawer}
                       handleDisplayDrawer={displayNotificationDrawer}
                       handleHideDrawer={hideNotificationDrawer}
                       markNotificationAsRead={this.markNotificationAsRead}/>
        <div className={css(style.app)}>
          <Header></Header>
          <div className={css(style.body)}>
            { isLoggedIn ?
              <BodySectionWithMarginBottom title={'Course list'}><CourseList listCourses={listCourses} /> </BodySectionWithMarginBottom>
              : <BodySectionWithMarginBottom title={'Log in to continue'}><Login logIn={login}/></BodySectionWithMarginBottom> }
            <BodySection title={'News from the School'}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                pharetra commodo sem sit amet rutrum. Nam tempus elit non
                sagittis varius. Etiam sed turpis scelerisque, commodo risus
                rhoncus, convallis dolor. Vestibulum nec nisi ipsum. Interdum et
                malesuada fames ac ante ipsum primis in faucibus. Nunc nunc leo,
                bibendum eget pulvinar vitae, luctus id enim. Quisque iaculis
                dapibus pellentesque. Cras maximus vulputate est eu tempus.
                Praesent facilisis lacus eget lectus dignissim, condimentum
                ultricies urna sagittis. Maecenas cursus mauris sed risus
                commodo semper. Morbi sed pellentesque justo. In risus lorem,
                viverra pellentesque ante id, rhoncus rhoncus felis. Fusce porta
                iaculis justo, finibus malesuada augue consequat vitae. Fusce
                dignissim orci dignissim lobortis suscipit. Class aptent taciti
                sociosqu ad litora torquent per conubia nostra, per inceptos
                himenaeos</p>
            </BodySection>
          </div>
          <div className={css(style.footer)}>
            <Footer></Footer>
          </div>
        </div>
      </>
    )
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  displayNotificationDrawer: PropTypes.func,
  hideNotificationDrawer: PropTypes.func,
  login: PropTypes.func,
  logout: PropTypes.func
}

App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
  displayNotificationDrawer: () => {},
  hideNotificationDrawer: () => {},
  login: () => {},
  logout: () => {}
}

const style = StyleSheet.create({
  app: {
    fontFamily: 'Arial, Helvetica, sans-serif',
  },

  body: {
    height: '500px',
  },

  footer: {
    display: 'flex',
    textAlign: 'center',
    flexDirection: 'column',
    fontStyle: 'italic',
    borderTop: 'solid 2px #eb4034',
  },
});

export const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.ui.get('isUserLoggedIn'),
    displayDrawer: state.ui.get('isNotificationDrawerVisible')
  }
};

export const mapDispatchToProps = {
    displayNotificationDrawer,
    hideNotificationDrawer,
    login: loginRequest,
    logout
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
