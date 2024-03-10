import { Map } from 'immutable';
import { createSelector } from 'reselect';

export const filterTypeSelected = (state) => {
  return state.filter;
};

export const getNotifications = (state) => {
  const notif = state.get('notifications');
  return Map(notif);
};

/*export const getUnreadNotifications = (state) => {
  const notif = Map(state.notifications.get('messages'));
  if(notif) {
    return notif
      .valueSeq()
      .filter((notification) => notification.isRead === false);
  }
  return notif;
  
};*/

const getMessages = (state) => state.notifications.get('messages');
const getFilter = (state) => state.notifications.get('filter');

export const getUnreadNotificationsByType = createSelector(
  getFilter,
  getMessages,
  (filter, messages) => {
    if (messages) {
      if (filter === 'URGENT') {
        return messages
          .valueSeq()
          .filter((notification) => notification.get('isRead') === false && notification.get('type') === 'urgent')
      } else {
        return messages
          .valueSeq()
          .filter((notification) => notification.get('isRead') === false)
      }
    }
    return messages;
  }
)
