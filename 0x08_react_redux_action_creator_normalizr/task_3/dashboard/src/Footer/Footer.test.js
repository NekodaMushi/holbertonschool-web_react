import React from 'react';
import { mount, shallow } from 'enzyme';
import { AppContext, user, logOut } from '../App/AppContext';
import Footer from './Footer';
import { StyleSheetTestUtils } from 'aphrodite';

describe('<Footer />', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  it('renders without craching', () => {
    shallow(<Footer />);
  });

  it('Verify that the components at the very least render the text “Copyright”', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text().includes('Copyright')).toBe(true);
  });

  it('should display "contact us" when user is logged', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: { ...user, isLoggedIn: true}, logOut }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('p')).toHaveLength(2);
    expect(wrapper.find('a').text()).toEqual('Contact us');
  });

  it('should display "contact us" when user is logged', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('p')).toHaveLength(1);
    expect(wrapper.find('a')).toHaveLength(0);
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
})
