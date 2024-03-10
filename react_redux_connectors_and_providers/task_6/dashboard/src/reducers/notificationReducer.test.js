import { notificationReducer } from "./notificationReducer";
import {
  markAsAread,
  setNotificationFilter,
  fetchNotifications
} from "../actions/notificationActionCreators";
import { Map, fromJS } from 'immutable';
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

    it("Tests that FETCH_NOTIFICATIONS_SUCCESS returns the data passed", function () {
      const action = {
        type: 'FETCH_NOTIFICATIONS_SUCCESS',
        data: [
          {
            id: 1,
            type: "default",
            value: "New course available",
          },
          {
            id: 2,
            type: "urgent",
            value: "New resume available",
          },
          {
            id: 3,
            type: "urgent",
            value: "New data available",
          },
        ],
      };
  
      const data = [
        {
          id: 1,
          type: "default",
          value: "New course available",
        },
        {
          id: 2,
          type: "urgent",
          value: "New resume available",
        },
        {
          id: 3,
          type: "urgent",
          value: "New data available",
        },
      ];
  
      const normalizedData = notificationsNormalizer(data);
  
      const expectedData = {
        filter: "DEFAULT",
        loadingState: false,
        ...normalizedData,
      };
      expectedData.notifications[1].isRead = false;
      expectedData.notifications[2].isRead = false;
      expectedData.notifications[3].isRead = false;
  
      const state = notificationReducer(undefined, action);
  
      expect(state.toJS()).toEqual(expectedData);
    });

    it("Tests that MARK_AS_READ returns the data with the right item updated", function () {
      const initialState = {
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
        },
      };
  
      const action = {
        type: 'MARK_AS_READ',
        index: 2,
      };
  
      const expectedData = {
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
            isRead: true,
          },
        },
      };
  
      const state = notificationReducer(Map(initialState), action);
  
      expect(state.toJS()).toEqual(expectedData);
    });

  it('should change the type with SET_TYPE_FILTER action', () => {
    const expectedState = {
      filter: 'URGENT',
      notifications: {
          ...normalizedData
      }
    };
    const testReducer = notificationReducer(Map(initialStateNormalized), setNotificationFilter('URGENT'));
    expect(testReducer.toJS()).toEqual(expectedState);
  });
})
