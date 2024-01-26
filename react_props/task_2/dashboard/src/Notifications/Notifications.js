import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';

function close() {
  console.log('Close button has been clicked');
}


function Notifications() {
  return <div className='Notifications'>
    <button aria-label='Close' style={{float: 'right', border: 'none'}} onClick={close}><img src={closeIcon} alt='close'></img></button>
    <p>Here is the list of notifications</p>
    <ul>
      <NotificationItem type="default" value="New course available" />
      <NotificationItem type="urgent" value="New resume available" />
      <NotificationItem type="urgent" html={{ __html: getLatestNotification() }} />
    </ul>
  </div>
}

export default Notifications;
