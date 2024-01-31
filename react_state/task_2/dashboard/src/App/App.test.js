import React from 'react';
import { mount, shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import { user, logOut, AppContext } from '../App/AppContext';

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
    expect(wrapper.find('Notifications')).toHaveLength(1);
  });

  it('should contains Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Header />)).toBe(true);
  });

  it('should contains Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Login')).toHaveLength(1);
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
    const wrapper = shallow(<App/>);
    wrapper.setState({ user: {email: 'de@de.de', password:'123', isLoggedIn: true}})
    expect(wrapper.contains('Login')).toBe(false);
    expect(wrapper.contains('CourseList'));
  });

  it('calls an alert when keys Ctrl and H are pressed', () => {
    window.alert = jest.fn();
    const wrapper = mount(<App />);
    wrapper.setState({ user: {isLoggedIn: true}});
    const event = new KeyboardEvent('keydown', { key: 'h', ctrlKey: true });
    window.dispatchEvent(event);
    expect(window.alert).toHaveBeenCalledWith('Logging you out');
    expect(wrapper.state().user.isLoggedIn).toBe(false);
    jest.restoreAllMocks();
  });

  it('should have a default state for displayDrawer to false', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.state('displayDrawer')).toEqual(false);
  });

  it('should have a state for displayDrawer to true after handleDisplayDrawer call', () => {
    const wrapper = shallow(<App/>);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state('displayDrawer')).toEqual(true);
  });

  it('should have a state for displayDrawer to false after handleHideDrawer call', () => {
    const wrapper = shallow(<App/>);
    wrapper.setState({ displayDrawer: true });
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state('displayDrawer')).toEqual(false);
  });

  it('should updates the state when logIn is called', () => {
    const wrapper = mount(<App/>);
    wrapper.setState({ user: {email: 'de@de.de', password:'123', isLoggedIn: true}});
    wrapper.instance().logOut();
    expect(wrapper.state().user.isLoggedIn).toBe(false);
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
})
