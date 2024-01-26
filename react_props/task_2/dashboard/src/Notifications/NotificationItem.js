import React from 'react';

export default function NotificationItem(props) {
  if (props.html) {
    return <li data-priority={props.type} dangerouslySetInnerHTML={props.html}>
    </li>
  } else {
    return <li data-priority={props.type}>
      {props.value}
    </li>
  }
}
