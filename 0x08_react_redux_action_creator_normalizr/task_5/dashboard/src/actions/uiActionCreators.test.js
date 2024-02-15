import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from "./uiActionCreators";

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
})
