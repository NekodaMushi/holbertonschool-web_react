import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from "./notificationActionTypes";
import { markAsAread, setNotificationFilter } from "./notificationActionCreators";

describe('tests for creation actions for the notification list', () => {
  it('should call type MARK_AS_READ', () => {
    const result = markAsAread(1);
    const expectedResult = {
      type: MARK_AS_READ,
      index: 1
    };
    expect(result).toEqual(expectedResult);
  });

  it('should call type SET_TYPE_FILTER', () => {
    const result = setNotificationFilter(NotificationTypeFilters.DEFAULT);
    const expectedResult = {
      type: SET_TYPE_FILTER,
      filter: "DEFAULT"
    };
    expect(result).toEqual(expectedResult);
  })
})
