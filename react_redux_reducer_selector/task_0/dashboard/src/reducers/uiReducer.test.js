import { reducer } from './uiReducer';
import { displayNotificationDrawer, loginSuccess } from '../actions/uiActionCreators';

describe('test for reducer function', () => {
  const previousState = { 
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
  };
  it('should equal the initial state when no action is passed', () => {
    const testReducer = reducer(previousState, '');
    expect(testReducer).toEqual(previousState);
  });

  it('should equal the initial state when the action SELECT_COURSE is passed', () => {
    const action = {
      type: 'SELECT_COURSE',
    };
    const testReducer = reducer(previousState, action);
    expect(testReducer).toEqual(previousState);
  });

  it('should change correctly the isNotificationDrawerVisible property,  when the action DISPLAY_NOTIFICATION_DRAWER is passed', () => {
    expect(reducer(previousState, displayNotificationDrawer())).toEqual({
      isNotificationDrawerVisible: true,
      isUserLoggedIn: false,
      user: {},
    });
  });

  it('should change isUserLoggedIn when the action loginSuccess is passed', () => {
    expect(reducer(previousState, loginSuccess())).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: true,
      user: {},
    });
  });

})
