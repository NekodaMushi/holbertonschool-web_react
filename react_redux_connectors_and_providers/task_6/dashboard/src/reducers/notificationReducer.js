import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters,
  FETCH_NOTIFICATIONS_SUCCESS,
  SET_LOADING_STATE
} from '../actions/notificationActionTypes';
import { Map, merge, setIn, mergeDeep } from 'immutable';
import { notificationsNormalizer } from '../schema/notifications';

const immutableState = (object) => {
  return Map(object)
};

export const initialNotificationState = immutableState({
  notifications: {},
  filter: NotificationTypeFilters.DEFAULT,
  loadingState: false,
});

export const notificationReducer = (state = initialNotificationState, action) => {
  switch(action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const normalizeData = notificationsNormalizer(action.data);
      Object.keys(normalizeData.notifications).map((key) => {
        normalizeData.notifications[key].isRead = false;
      });
      return state.mergeDeep(normalizeData);

    case MARK_AS_READ:
      return setIn(state, ['messages', String(action.index), 'isRead'], true);

    case SET_TYPE_FILTER:
      return state.set('filter', action.filter);

    case SET_LOADING_STATE:
      return state.set('loading', action.loadingState)

    default: return state;
  }
}
