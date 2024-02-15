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
import { AppContext } from './AppContext';

const listCourses = [
  {id: 1, name: 'ES6', credit: 60},
  {id: 2, name: 'Webpack', credit: 20},
  {id: 3, name: 'React', credit: 40}
];

const listNotifications = [
  { id: 1, value: 'New course available', type: 'default' },
  { id: 2, value: 'New resume available', type: 'urgent' },
  { id: 3, html: { __html: getLatestNotification() }, type: 'urgent' },
]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleKey = this.handleKey.bind(this);
    this.state = {
      displayDrawer: false,
      user: {
        email: '',
        password:'',
        isLoggedIn: false,
      },
      logOut: this.logOut,
      listNotifications: listNotifications,
    };
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKey);
  }

  handleKey = e => {
    if (e.key == 'h' && e.ctrlKey) {
      e.preventDefault();
      alert('Logging you out');
      this.state.logOut();
    }
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true })
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false })
  }

  logIn = (email, password) => {
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
  }

  markNotificationAsRead = (id) => {
    const newList = this.state.listNotifications.filter((element) => {
      return element.id !== id;
    });
    this.setState({ listNotifications: newList });
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKey);
  }

  render() {
    const {displayDrawer, listNotifications, user, logOut} = this.state;
    return (
      <AppContext.Provider value={{ user, logOut }}>
        <Notifications listNotifications={listNotifications}
                       displayDrawer={displayDrawer}
                       handleDisplayDrawer={this.handleDisplayDrawer}
                       handleHideDrawer={this.handleHideDrawer}
                       markNotificationAsRead={this.markNotificationAsRead}/>
        <div className={css(style.app)}>
          <Header></Header>
          <div className={css(style.body)}>
            { this.state.user.isLoggedIn ?
              <BodySectionWithMarginBottom title={'Course list'}><CourseList listCourses={listCourses} /> </BodySectionWithMarginBottom>
              : <BodySectionWithMarginBottom title={'Log in to continue'}><Login logIn={this.logIn}/></BodySectionWithMarginBottom> }
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
      </AppContext.Provider>
    )
  }
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

export default App;
