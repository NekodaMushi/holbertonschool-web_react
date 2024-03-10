import { 
  filterTypeSelected,
  getNotifications,
  getUnreadNotifications
} from "./notificationSelector";
import { notifReducer } from '../reducers/notificationReducer';
import { Map } from 'immutable';
import { FETCH_NOTIFICATIONS_SUCCESS } from "../actions/notificationActionTypes";

describe('tests for notification selectors', () => {
  const previousState = {
    filter: "DEFAULT",
    notifications: [
      {
        id: 1,
        isRead: false,
        type: "default",
        value: "New course available"
      },
      {
        id: 2,
        isRead: false,
        type: "urgent",
        value: "New resume available"
      },
      {
        id: 3,
        isRead: false,
        type: "urgent",
        value: "New data available"
      }
    ]
  };
  const action = {
    type: 'MARK_AS_READ',
    index: 2,
  };
  const StateReducer = notifReducer(previousState, action);

  it('should select state.filter with filterTypeSelected', () => {
    const filterSelected = filterTypeSelected(StateReducer);
    expect(filterSelected).toEqual('DEFAULT');
  });

  it('should select state.filter with filterTypeSelected when Map(state)', () => {
    const StateReduce = notifReducer(Map(previousState), action);
    const filterSelected = filterTypeSelected(StateReduce.toJS());
    expect(filterSelected).toEqual('DEFAULT');
  })

  it('should return a list of messages', () => {
    const StateReduce = notifReducer(Map(previousState), action);
    const getNotif = getNotifications(StateReduce);
    const expected = Map(previousState.notifications);
    expect(getNotif).toEqual(expected);
  });

  it('should return a list of unread messages', () => {
    const StateReduce = notifReducer(Map(previousState), action);
    const getUnread = getUnreadNotifications(StateReduce);
    const listNotif = [previousState.notifications[0], previousState.notifications[1]];
    const expected = Map(listNotif);
    expect(getUnread).toEqual(expected);
  })
})
