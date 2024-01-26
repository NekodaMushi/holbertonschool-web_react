import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { getLatestNotification } from '../utils/utils';

describe('<App />', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('should contains Notifications component', () => {
    const wrapper = shallow(<App />);
    const listNotifications = [
      { id: 1, value: 'New course available', type: 'default' },
      { id: 2, value: 'New resume available', type: 'urgent' },
      { id: 3, html: { __html: getLatestNotification() }, type: 'urgent' },
    ]
    expect(wrapper.contains(<Notifications listNotifications={listNotifications}/>)).toBe(true);
  });

  it('should contains Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Header />)).toBe(true);
  });

  it('should contains Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Login />)).toBe(true);
  });

  it('should contains Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Footer />)).toBe(true);
  });

  it('should not display CourseList', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('CourseList')).toHaveLength(0);
  });

  it('should verify that the Login component is not included', () => {
    const wrapper = shallow(<App isLoggedIn={true}/>);
    expect(wrapper.find('Login')).toHaveLength(0);
    expect(wrapper.find('CourseList')).toHaveLength(1);
  });

  it('calls an alert when keys Ctrl and H are pressed', () => {
    const events = {};
    window.alert = jest.fn();
    window.addEventListener = jest.fn().mockImplementation((event, cb) => {
      events[event] = cb;
    });

    const logOut = jest.fn();
    shallow(<App logOut={logOut} />);
    events.keydown({ ctrlKey: true, key: 'h' });

    expect(window.alert).toHaveBeenCalledWith('Logging you out');
    expect(logOut).toHaveBeenCalled();

    jest.restoreAllMocks();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
})
