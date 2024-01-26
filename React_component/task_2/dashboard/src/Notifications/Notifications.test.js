import React from 'react';
import { shallow } from 'enzyme';
import { getLatestNotification } from '../utils/utils';

import Notifications from './Notifications';

describe('<Notifications />', () => {
  it('renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('renders three list items', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[{ id: 1, value: 'New course available', type: 'default' },
    { id: 2, value: 'New resume available', type: 'urgent' },
    { id: 3, html: { __html: getLatestNotification() }, type: 'urgent' },]}/>);
    expect(wrapper.find('NotificationItem')).toHaveLength(3);
  });

  it('renders the text: Here is the list of notifications', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[{ id: 1, value: 'New course available', type: 'default' },
    { id: 2, value: 'New resume available', type: 'urgent' },
    { id: 3, html: { __html: getLatestNotification() }, type: 'urgent' },]}/>);
    expect(wrapper.find('div.Notifications p').text()).toEqual('Here is the list of notifications');
  });

  it('verifies that the first NotificationItem element renders the right html', () => {
    const wrapper = shallow(<Notifications displayDrawer={true}/>);
    expect(wrapper.find('div.Notifications p').text()).toEqual('No new notification for now')
  });

  it('check that the menu item is being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('div.menuItem')).toHaveLength(1);
  });

  it('check that the menu item is being displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true}/>);
    expect(wrapper.find('div.menuItem')).toHaveLength(1);
  });

  it('check that the div.Notifications is not being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('div.Notifications')).toHaveLength(0);
  });

  it('check that the div.Notifications is being displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true}/>);
    expect(wrapper.find('div.Notifications')).toHaveLength(1);
  });

  it('should console.log Notification ${id} has been marked as read', () => {
    const log = jest.spyOn(console, 'log');
    const listNotifications = [
      { id: 1, value: 'New course available', type: 'default' },
      { id: 2, value: 'New resume available', type: 'urgent' },
      { id: 3, html: { __html: getLatestNotification() }, type: 'urgent' },];
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={ listNotifications }/>);
    wrapper.instance().markAsRead(2);
    expect(log.mock.calls[0][0]).toEqual("Notification 2 has been marked as read");
    jest.restoreAllMocks();
  });
})
