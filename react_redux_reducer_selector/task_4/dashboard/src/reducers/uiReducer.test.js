import { reducer } from './uiReducer';
import { displayNotificationDrawer } from '../actions/uiActionCreators';
import { Map } from 'immutable';

describe('test for reducer function', () => {
  const previousState = Map({
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
  })
  it('should equal the initial state when no action is passed', () => {
    const testReducer = reducer(previousState, '');
    expect(testReducer.get('isNotificationDrawerVisible')).toEqual(false);
    expect(testReducer.get('isUserLoggedIn')).toEqual(false);
  });

  it('should equal the initial state when the action SELECT_COURSE is passed', () => {
    const action = {
      type: 'SELECT_COURSE',
    };
    const testReducer = reducer(previousState, action).toJS();
    expect(testReducer).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    })
  });

  it('should change correctly the isNotificationDrawerVisible property,  when the action DISPLAY_NOTIFICATION_DRAWER is passed', () => {
    const testReducer = reducer(previousState, displayNotificationDrawer());
    expect(testReducer.get('isNotificationDrawerVisible')).toEqual(true);
    expect(testReducer.get('isUserLoggedIn')).toEqual(false);
  });

})
