import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import PropTypes from 'prop-types';

function close() {
  console.log('Close button has been clicked');
}


function Notifications({ displayDrawer, listNotifications }) {
  return <>
    <div className='menuItem'><p>Your notifications</p></div>
    {displayDrawer && (
      <div className='Notifications'>
            <button aria-label='Close' style={{float: 'right', border: 'none'}} onClick={close}><img src={closeIcon} alt='close'></img></button>
            {listNotifications.length > 0 ? (<>
            <p>Here is the list of notifications</p>
            <ul>
              {listNotifications.map((notif) => (
                <NotificationItem  key={notif.id} html={notif.html} type={notif.type} value={notif.value}/>
              ))}
            </ul></>) : (
              <p>No new notification for now</p>
            )}
          </div>
    )}
  </>
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
