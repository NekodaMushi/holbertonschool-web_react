import { login, logout, displayNotificationDrawer, hideNotificationDrawer, loginRequest } from "./uiActionCreators";
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('test for UI actions', () => {
  it('should create the action with type LOGIN', () => {
    const result = login('de@de.de', '123pwd');
    const expectedResult = { type: 'LOGIN', user: { email:'de@de.de', password:'123pwd'}};
    expect(result).toEqual(expectedResult);
  });

  it('should create action with type LOGOUT', () => {
    const result = logout();
    const expectedResult = {type: 'LOGOUT'};
    expect(result).toEqual(expectedResult);
  });

  it('should create action with type DISPLAY_NOTIFICATION', () => {
    const result = displayNotificationDrawer();
    const expectedResult = {type: 'DISPLAY_NOTIFICATION_DRAWER'};
    expect(result).toEqual(expectedResult);
  });

  it('should create action with type HIDE_NOTIFICATION', () => {
    const result = hideNotificationDrawer();
    const expectedResult = {type: 'HIDE_NOTIFICATION_DRAWER'};
    expect(result).toEqual(expectedResult);
  });

  it('should login success action', () => {
    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);
    const store = mockStore({});
    fetchMock.restore();
    fetchMock.get('http://localhost:8080/login-success.json', '{}');
    return store.dispatch(loginRequest('email', 'password')).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'LOGIN',
        user: { email: 'email', password: 'password' },
      });
      expect(actions[1]).toEqual({ type: 'LOGIN_SUCCESS' });
    });
  });

  it('should return login failure action', () => {
    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);
    const store = mockStore({});
    fetchMock.restore();
    fetchMock.get('http://localhost:8080/login-success.json', 500);
    return store.dispatch(loginRequest('email', 'password')).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'LOGIN',
        user: { email: 'email', password: 'password' },
      });
      expect(actions[1]).toEqual({ type: 'LOGIN_FAILURE' });
    });
  });
})
