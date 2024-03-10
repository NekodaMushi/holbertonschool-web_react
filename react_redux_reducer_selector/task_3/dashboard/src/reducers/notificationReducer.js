import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters,
  FETCH_NOTIFICATIONS_SUCCESS
} from '../actions/notificationActionTypes';

const initialSate = {
  notifications: [],
  filter: NotificationTypeFilters.DEFAULT,
};

export const notifReducer = (state = initialSate, action) => {
  switch(action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        notifications: action.data.map((notif) => {
        return {
          ...notif,
          isRead: false,
        }
      })
     } 

    case MARK_AS_READ:
      return {
        ...state,
        notifications: state.notifications.map((notif) => {
          if (notif.id === action.index) {
            return {
              ...notif,
              isRead: true,
            }
          }
          return notif;
        })
      }

      case SET_TYPE_FILTER:
        return { ...state, filter: action.filter };

      default: state;
  }
}
