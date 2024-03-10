import { notifReducer } from "./notificationReducer";
import {
  markAsAread,
  setNotificationFilter,
  fetchNotifications
} from "../actions/notificationActionCreators";
import { Map } from 'immutable';
import { notificationsNormalizer } from "../schema/notifications";

describe('tests for notifReducer', () => {
  const dataTest = {
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
    const normalizedData = notificationsNormalizer(dataTest.notifications);
    const initialStateNormalized = {
      ...dataTest,
      notifications: {
          ...normalizedData
      }
    };

  it('should send the good data with FETCH action', () => {
    const expectedState = {
      filter: 'DEFAULT',
      notifications: {
          ...normalizedData
      }
    };
    const reducerTest = notifReducer(undefined, fetchNotifications(dataTest.notifications));
    expect(reducerTest.toJS()).toEqual(expectedState);
  });

  it('should send the good data with MARK_AS_READ action', () => {
    const expectedState = {
      filter: 'DEFAULT',
      notifications: {
          ...normalizedData
        }
    };
    expectedState.notifications[2].isRead = true;
    const reducerTest = notifReducer(Map(initialStateNormalized), markAsAread(2));
    expect(reducerTest.toJS()).toEqual(expectedState);
  });

  it('should change the type with SET_TYPE_FILTER action', () => {
    const expectedState = {
      filter: 'URGENT',
      notifications: {
          ...normalizedData
      }
    };
    const testReducer = notifReducer(Map(initialStateNormalized), setNotificationFilter('URGENT'));
    expect(testReducer.toJS()).toEqual(expectedState);
  });
})
