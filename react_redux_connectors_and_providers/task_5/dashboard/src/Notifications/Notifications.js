import React from 'react';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
/*import NotificationItemShape from './NotificationItemShape';*/
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { fetchNotifications } from "../actions/notificationActionCreators";
import { connect } from 'react-redux';


export class Notifications extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchNotifications();
  }

  render() {
    return <>
      <div id="menuItem" className={css(styles.menuItem)} onClick={this.props.handleDisplayDrawer}><p className={css(styles.animeBounce, styles.animeOpacity)}>Your notifications</p></div>
      {this.props.displayDrawer && (
        <div className={css(styles.notifications, styles.smallNotifications)} id="Notifications">
              <button id='closeButton' aria-label='Close' style={{float: 'right', border: 'none'}} onClick={this.props.handleHideDrawer}><img src={closeIcon} alt='close' className={css(styles.imgButton)}></img></button>

              <p className={css(styles.menuItemP)}>Here is the list of notifications</p>
              
              <ul className={css(styles.smallUl)}>
                {!this.props.listNotifications && (<NotificationItem>(
                <p className={css(styles.menuItemP)}>No new notification for now</p>
              )</NotificationItem>)}
                {this.props.listNotifications && 
                Object.values(this.props.listNotifications).map((notif) => (
                  <NotificationItem
                    id={String(notif.guid)}
                    key={notif.guid}
                    html={notif.html}
                    type={notif.type}
                    value={notif.value}
                    markAsRead={this.props.markNotificationAsRead}/>
                ))}
               </ul>
            </div>
      )}
      </>
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.object,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func,
  fetchNotifications: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: {},
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  markNotificationAsRead: () => {},
  fetchNotifications: () => {},
};

const opac = {
  from: {
    opacity: '0.5',
  },
  to: {
    opacity: '1',
  }
};

const bounce = {
  '70%': { 
    transform: 'translateY(0px)',
  },
  '85%': {
    transform: 'translateY(-5px)'
  },
  '100%': {
    transform: 'translateY(5px)'
  },
};

const styles = StyleSheet.create({
  notifications: {
    border: 'dashed',
    borderColor: 'rgb(237, 100, 100)',
    padding: '2%',
    fontWeight: 'bold',
    position: 'fixed',
    top: '0',
    right: '0',
    zIndex: '999',
    background: 'rgba(255, 248, 248, 1)',
  },

  imgButton: {
    width: '15px',
    height: '15px',
  },

  menuItem: {
    display: 'flex',
    justifyContent: 'flex-end',
    fontWeight: 'bold',
  },

  menuItemP: {
    fontWeight: 'bold',
  },

  smallUl: {
    '@media (max-width: 900px)': {
      padding: '0',
      fontSize: '20px',
      listStyleType: 'none',
    }
  },

  smallNotifications: {
    '@media (max-width: 900px)': {
      fontSize: '20px',
      position: 'fixed',
      zIndex: '9999',
      top: '0',
      bottom: '0',
      left: '0',
      right: '0',
      background: 'rgba(255, 255, 255, 1)'
    }
  },

  animeBounce: {
    ':hover': {
      animationName: bounce,
      animationDuration: '0.5s',
      animationIterationCount: '3',
    },
    cursor: 'pointer',
  },

  animeOpacity: {
    ':hover': {
      animationName: opac,
      animationDuration: '1s',
      animationIterationCount: '3',
    }
  }
});

const mapStateToProps = (state) => {
  return {
    listNotifications: state.notifications.get('messages')
  }
};

const mapDispatchToProps = {
  fetchNotifications,
}

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
