import React from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends React.Component {
  render() {
    if (this.props.html) {
      return <li
        onClick={() => this.props.markAsRead(this.props.id)}
        data-priority={this.props.type} dangerouslySetInnerHTML={this.props.html}>
      </li>
    } else {
      return <li
        onClick={() => this.props.markAsRead(this.props.id)}
        data-priority={this.props.type}>
        {this.props.value}
      </li>
    }
  }
}

NotificationItem.propTypes = {
  id: PropTypes.number,
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string }),
  markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => {},
}

export default NotificationItem;
