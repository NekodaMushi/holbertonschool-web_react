import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  FETCH_NOTIFICATIONS_SUCCESS,
  SET_LOADING_STATE
} from "./notificationActionTypes";

import 'node-fetch';

export const markAsAread = (index) => {
  return {
    type: MARK_AS_READ,
    index,
  };
};

export const setNotificationFilter = (filter) => {
  return {
    type: SET_TYPE_FILTER,
    filter,
  };
};


export const setLoadingState = (loadingState) => {
  return {
    type: SET_LOADING_STATE,
    loadingState,
  };
};

export const setNotifications = (data) => {
  return {
    type: FETCH_NOTIFICATIONS_SUCCESS,
    data
  };
};

export const fetchNotifications = () => {
  return (dispatch) => {
    dispatch(setLoadingState(true));
    fetch('http://localhost:8080/notifications.json')
      .then((res) => res.json())
      .then((data) => dispatch(setNotifications(data)))
      .catch((error) => {console.log(error)})
      .finally(() => dispatch(setLoadingState(false)))
  }
}
