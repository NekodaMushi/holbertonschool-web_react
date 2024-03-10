import { Map } from 'immutable';

export const filterTypeSelected = (state) => {
  return state.filter;
};

export const getNotifications = (state) => {
  const notif = state.get('notifications');
  return Map(notif);
};

export const getUnreadNotifications = (state) => {
  const notif = state.get('notifications');
  return Map(Object.keys(notif)
    .map((key) => notif[key])
    .filter((notification) => notification.isRead === false));
};
