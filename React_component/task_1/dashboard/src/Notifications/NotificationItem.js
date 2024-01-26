import React from 'react';
import PropTypes from 'prop-types';

export default function NotificationItem({type, html, value}) {
  if (html) {
    return <li data-priority={type} dangerouslySetInnerHTML={html}>
    </li>
  } else {
    return <li data-priority={type}>
      {value}
    </li>
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string }),
};

NotificationItem.defaultProps = {
  type: 'default',
}
