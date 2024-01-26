import React from 'react';
import { shallow } from 'enzyme';

import Notifications from './Notifications';

describe('<Notifications />', () => {
  it('renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('renders three list items', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('NotificationItem')).toHaveLength(3);
  });

  it('renders the text: Here is the list of notifications', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('p').text()).toEqual('Here is the list of notifications');
  });

  it('verifies that the first NotificationItem element renders the right html', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('NotificationItem').first().html()).toEqual('<li data-priority="default">New course available</li>')
  })
})
