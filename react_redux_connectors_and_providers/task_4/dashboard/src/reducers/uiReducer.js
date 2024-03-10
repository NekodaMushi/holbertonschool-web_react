import { 
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN
} from '../actions/uiActionTypes';
import { Map } from 'immutable';

const immutableState = (object) => {
  return Map(object)
};

export const initialUiState = immutableState({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: null,
});

export const uiReducer = (state = initialUiState, action) => {
  switch(action.type) {
    case DISPLAY_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', true);

    case HIDE_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', false);

    case LOGIN_SUCCESS:
      return state.set('isUserLoggedIn', true);

    case LOGIN_FAILURE:
      return state.set('isUserLoggedIn', false);

    case LOGOUT:
      return state.set('isUserLoggedIn', false).set('user', null);

    case LOGIN:
      return state.set('user', action.user)

    default: return state;
  }
}
