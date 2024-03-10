import rootReducer from "./rootReducer";
import { combineReducers } from 'redux';
import { Map } from 'immutable';

describe('test for rootReducer', () => {
  it('should render the good structure', () => {
    const expectedState = {
      courses: Map({}),
      notifications: Map({
        "notifications": {},
        "filter": "DEFAULT",
        "loadingState": false
      }),
      ui: Map({
        "isNotificationDrawerVisible": false,
        "isUserLoggedIn": false,
        "user": null
      })
    };

    const action = { type : 'RANDOM'};

    const reducerTest = combineReducers(rootReducer);
    const state = reducerTest(undefined, action);
    expect(state).toEqual(expectedState);
  })
})
