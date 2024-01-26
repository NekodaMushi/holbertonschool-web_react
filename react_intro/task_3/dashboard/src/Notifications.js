import React from 'react';
import './Notifications.css';
import { getLatestNotification } from './utils';
import closeIcon from './images/close-icon.png';

function close() {
  console.log('Close button has been clicked');
}


function Notifications()  {
  return <div className='Notifications'>
    <button aria-label='Close' style={{float: 'right', border: 'none'}} onClick={close}><img src={closeIcon} alt='close'></img></button>
    <p>Here is the list of notifications</p>
    <ul>
      <li data-priority="default">New course available</li>
      <li data-priority='urgent'>New resume available</li>
      <li data-priority='urgent' dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
    </ul>
  </div>
}

export default Notifications;
