import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import PropTypes from 'prop-types';

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
      <div className='menuItem'><p>Your notifications</p></div>
      {this.props.displayDrawer && (
        <div className='Notifications'>
              <button aria-label='Close' style={{float: 'right', border: 'none'}} onClick={close}><img src={closeIcon} alt='close'></img></button>
              {this.props.listNotifications.length > 0 ? (<>
              <p>Here is the list of notifications</p>
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
                <p>No new notification for now</p>
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

export default Notifications;
