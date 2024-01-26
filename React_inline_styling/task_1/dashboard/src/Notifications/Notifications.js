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
        <div className={css(styles.notifications)}>
              <button aria-label='Close' style={{float: 'right', border: 'none'}} onClick={close}><img src={closeIcon} alt='close' className={css(styles.imgButton)}></img></button>
              {this.props.listNotifications.length > 0 ? (<>
              <p className={css(styles.menuItemP)}>Here is the list of notifications</p>
              <ul>
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
  }
})

export default Notifications;
