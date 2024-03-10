import { Map } from 'immutable';

export const filterTypeSelected = (state) => {
  return state.filter;
};

export const getNotifications = (state) => {
  const notif = state.get('notifications');
  return Map(notif);
};

export const getUnreadNotifications = (state) => {
  const notif = Map(state.notifications.get('messages'));
  if(notif) {
    return notif
      .valueSeq()
      .filter((notification) => notification.isRead === false);
  }
  return notif;
  
};
