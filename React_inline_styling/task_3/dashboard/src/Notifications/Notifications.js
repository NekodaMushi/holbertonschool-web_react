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
    return nextProps.listNotifications > this.props.listNotifications;
  }

  render() {
    return <>
      <div className={css(styles.menuItem)}><p>Your notifications</p></div>
      {this.props.displayDrawer && (
        <div className={css(styles.notifications, styles.smallNotifications)}>
              <button aria-label='Close' style={{float: 'right', border: 'none'}} onClick={close}><img src={closeIcon} alt='close' className={css(styles.imgButton)}></img></button>
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
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

const styles = StyleSheet.create({
  notifications: {
    border: 'dashed',
    borderColor: 'rgb(237, 100, 100)',
    padding: '2%',
    fontWeight: 'bold',
    float: 'right',
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
  }
})

export default Notifications;
