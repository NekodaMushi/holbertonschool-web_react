import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from "./uiActionTypes";

const login = (email, password) => {
  return {
    type: LOGIN,
    user: {
      email,
      password,
    }
  };
}

const logout = () => {
  return {
    type: LOGOUT,
  };
}

const displayNotificationDrawer = () => {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER,
  };
}

const hideNotificationDrawer = () => {
  return {
    type: HIDE_NOTIFICATION_DRAWER,
  };
}

const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS,
  };
}

const loginFailure = () => {
  return {
    type: LOGIN_FAILURE,
  };
}


const loginRequest = (email, password) => {
  return (dispatch) => {
    dispatch(login(email, password));
    return fetch('http://localhost:8080/login-success.json')
      .then((res) => 
      {
        if (res.status <= 301) {
          dispatch(loginSuccess());
        } else {
          dispatch(loginFailure());
        }
      })
      .catch((err) => dispatch(loginFailure()));
  };
};

export { login, logout, displayNotificationDrawer, hideNotificationDrawer, loginSuccess, loginFailure, loginRequest };
