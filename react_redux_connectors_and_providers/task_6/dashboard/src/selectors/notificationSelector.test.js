import { 
  filterTypeSelected,
  getNotifications,
  getUnreadNotifications
} from "./notificationSelector";
import { notificationReducer } from '../reducers/notificationReducer';
import { Map, fromJS } from 'immutable';
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
  const StateReducer = notificationReducer(previousState, action);

  it('should select state.filter with filterTypeSelected', () => {
    const filterSelected = filterTypeSelected(StateReducer);
    expect(filterSelected).toEqual('DEFAULT');
  });

  it('should select state.filter with filterTypeSelected when Map(state)', () => {
    const StateReduce = notificationReducer(Map(previousState), action);
    const filterSelected = filterTypeSelected(StateReduce.toJS());
    expect(filterSelected).toEqual('DEFAULT');
  })

  it('should return a list of messages', () => {
    const StateReduce = notificationReducer(Map(previousState), action);
    const getNotif = getNotifications(StateReduce);
    const expected = Map(previousState.notifications);
    expect(getNotif).toEqual(expected);
  });

  it('should return a list of unread messages', () => {
    const state = {
      notifications: Map({
        messages: {
          1: {
            guid: 1,
            type: "default",
            value: "New course available",
            isRead: true,
          },
          2: {
            guid: 2,
            type: "urgent",
            value: "New resume available",
            isRead: false,
          },
          3: {
            guid: 3,
            type: "urgent",
            html: { __html: "xxx" },
            isRead: true,
          },
        },
      }),
    };

    const expectedResult = [
      {
        guid: 2,
        type: "urgent",
        value: "New resume available",
        isRead: false,
      },
    ];
    const selected = getUnreadNotifications(state);
    expect(selected.toJS()).toEqual(expectedResult);
  })
})
