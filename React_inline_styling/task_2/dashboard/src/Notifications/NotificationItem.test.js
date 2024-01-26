import React from 'react';
import { shallow } from 'enzyme';

import NotificationItem from './NotificationItem';

describe('<NotificationItem />', () => {
  it('renders without crashing', () => {
    shallow(<NotificationItem />);
  });

  it('should render <li data-priority="default">test</li>', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.find('li').text()).toEqual('test');
    expect(wrapper.find('li').prop('data-priority')).toEqual('default');
  });

  it('should render <li data-priority="default"><u>test</u></li>', () => {
    const wrapper = shallow(<NotificationItem type="default" html={{ __html: '<u>test</u>' }} />);
    expect(wrapper.html()).toEqual('<li data-priority=\"default\" class=\"priorityDefault_1tsdo2i\"><u>test</u></li>');
  });

  it('should log to the console a string with appropriate id', () => {
    const id = 1;
    const wrapper = shallow(<NotificationItem type='default' value='test' id={id}/>);
    const instance = wrapper.instance();
    instance.markAsRead = jest.fn();
    const listItem = wrapper.find('li').first();
    listItem.simulate('click');
    instance.markAsRead(id);
    expect(instance.markAsRead).toHaveBeenCalledWith(1);
    jest.restoreAllMocks();
  });
})
