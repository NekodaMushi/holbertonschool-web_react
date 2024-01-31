import React from 'react';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function close() {
  console.log('Close button has been clicked');
}


class Notifications extends React.Component {
  constructor (props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications > this.props.listNotifications ||
      nextProps.displayDrawer != this.props.displayDrawer
    )
  }

  render() {
    return <>
      <div className={css(styles.menuItem)} onClick={this.props.handleDisplayDrawer}><p className={css(styles.animeBounce, styles.animeOpacity)}>Your notifications</p></div>
      {this.props.displayDrawer && (
        <div className={css(styles.notifications, styles.smallNotifications)}>
              <button id='closeButton' aria-label='Close' style={{float: 'right', border: 'none'}} onClick={this.props.handleHideDrawer}><img src={closeIcon} alt='close' className={css(styles.imgButton)}></img></button>
              {this.props.listNotifications.length > 0 ? (<>
              <p className={css(styles.menuItemP)}>Here is the list of notifications</p>
              <ul className={css(styles.smallUl)}>
                {this.props.listNotifications.map((notif) => (
                  <NotificationItem
                    id={notif.id}
                    key={notif.id}
                    html={notif.html}
                    type={notif.type}
                    value={notif.value}
                    markAsRead={this.markAsRead}/>
                ))}
              </ul></>) : (
                <p className={css(styles.menuItemP)}>No new notification for now</p>
              )}
            </div>
      )}
      </>
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
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

export default Notifications;
