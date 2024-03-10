import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters,
  FETCH_NOTIFICATIONS_SUCCESS
} from '../actions/notificationActionTypes';
import { Map, merge, setIn } from 'immutable';
import { notificationsNormalizer } from '../schema/notifications';

const immutableState = (object) => {
  return Map(object)
};

export const initialNotificationState = immutableState({
  notifications: [],
  filter: NotificationTypeFilters.DEFAULT,
});

export const notifReducer = (state = initialNotificationState, action) => {
  switch(action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const normalizeData = notificationsNormalizer(action.data);
      Object.keys(normalizeData).map((key) => {
        normalizeData[key].isRead = false;
      });
      return merge(state, { notifications: normalizeData });

    case MARK_AS_READ:
      return setIn(state, ['notifications', String(action.index), 'isRead'], true);

    case SET_TYPE_FILTER:
      return state.set('filter', action.filter);

    default: return state;
  }
}
