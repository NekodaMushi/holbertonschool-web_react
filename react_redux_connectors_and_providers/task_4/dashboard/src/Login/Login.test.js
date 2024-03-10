import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import Login from './Login';

describe('<Login />', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  it('renders without craching', () => {
    shallow(<Login />);
  });

  it('renders 2 input tags', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input')).toHaveLength(3);
  });

  it('renders 2 label tags', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('label')).toHaveLength(2);
  });

  it('should have the button disabled by default', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input[name="button"]').prop('disabled')).toBe(true);
  });

  it('should have the button enabled when pwd and email are not empty', () => {
    const wrapper = shallow(<Login />);
    wrapper.find('input[name="email"]').simulate('change', { target: { name: 'email', value: 'de@de.de'}});
    wrapper.find('input[name="pwd"]').simulate('change', { target : { name: 'password', value: '123' }});
    expect(wrapper.find('input[name="button"]').prop('disabled')).toBe(false);
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
})
