import React from 'react';
import { mount, shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import Header from './Header';
import { user, logOut, AppContext } from '../App/AppContext';

describe('<Header />', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  it('renders without craching', () => {
    shallow(<Header />);
  });

  it('renders an img tag', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img')).toHaveLength(1);
  });

  it('renders a h1 tag', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h1')).toHaveLength(1);
  });

  it('should not create logoutSection', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
          <Header />
      </AppContext.Provider>);
    expect(wrapper.find('#logoutSection')).toHaveLength(0);
  });

  it('should created logoutSection', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: { ...user, isLoggedIn: true}, logOut }}>
          <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find("#logoutSection")).toHaveLength(1);
  });

  it('should call logOut', () => {
    const logOut = jest.fn();
    const wrapper = mount(
      <AppContext.Provider value={{ user: { ...user, isLoggedIn: true}, logOut }}>
          <Header />
      </AppContext.Provider>
    );
    wrapper.find('span').simulate('click');
    expect(logOut).toHaveBeenCalled();
    jest.restoreAllMocks();
  })

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
})
