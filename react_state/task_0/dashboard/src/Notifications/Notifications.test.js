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
    expect(wrapper.find('p.menuItemP_hq5slr').text()).toEqual('Here is the list of notifications');
  });

  it('verifies that the first NotificationItem element renders the right html', () => {
    const wrapper = shallow(<Notifications displayDrawer={true}/>);
    expect(wrapper.find('p.menuItemP_hq5slr').text()).toEqual('No new notification for now')
  });

  it('check that the menu item is being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('div.menuItem_4rj5io')).toHaveLength(1);
  });

  it('check that the menu item is being displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true}/>);
    expect(wrapper.find('div.menuItem_4rj5io')).toHaveLength(1);
  });

  it('check that the div.Notifications is not being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('div.Notifications')).toHaveLength(0);
  });

  it('check that the div.Notifications is being displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true}/>);
    expect(wrapper.find('[className^="notifications"]')).toHaveLength(1);
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

  it('should no rerender when updating the props of the component with the same list', () => {
    const listNotifications = [
      { id: 1, value: 'New course available', type: 'default' },
      { id: 2, value: 'New resume available', type: 'urgent' },
      { id: 3, html: { __html: getLatestNotification() }, type: 'urgent' },];
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={ listNotifications }/>);
    const spy = jest.spyOn(wrapper.instance(), 'shouldComponentUpdate');
    wrapper.setProps({ listNotifications: listNotifications });
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveLastReturnedWith(false);
    jest.restoreAllMocks();
  });

  it('should rerender when updating the props of the component with a longer list', () => {
    const listNotifications = [
      { id: 1, value: 'New course available', type: 'default' },
      { id: 2, value: 'New resume available', type: 'urgent' },
      { id: 3, html: { __html: getLatestNotification() }, type: 'urgent' },];
    const listNotifications2 = [
      { id: 1, value: 'New course available', type: 'default' },
      { id: 2, value: 'New resume available', type: 'urgent' },
      { id: 3, html: { __html: getLatestNotification() }, type: 'urgent' },
      { id: 4, value: 'Hello', type: 'default' },
      { id: 5, value: 'Holberton', type: 'urgent' },];
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={ listNotifications }/>);
    const spy = jest.spyOn(wrapper.instance(), 'shouldComponentUpdate');
    wrapper.setProps({ listNotifications: listNotifications2 });
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveLastReturnedWith(true);
    jest.restoreAllMocks();
  });

  it('should call handleDisplayDrawer after clicking on the menu item', () => {
    const handleDisplayDrawer = jest.fn();
    const wrapper = shallow(<Notifications displayDrawer handleDisplayDrawer={handleDisplayDrawer}/>);
    wrapper.find('p.animeBounce_dhc7mf-o_O-animeOpacity_6biaj2').simulate('click');
    expect(handleDisplayDrawer).toHaveBeenCalled();
    jest.restoreAllMocks();
  });

  it('should call handleHideDrawer after clicking on the close button', () => {
    const handleHideDrawer = jest.fn();
    const wrapper = shallow(<Notifications displayDrawer handleHideDrawer={handleHideDrawer}/>);
    wrapper.find('#closeButton').simulate('click');
    expect(handleHideDrawer).toHaveBeenCalled();
    jest.restoreAllMocks();
  });
})
