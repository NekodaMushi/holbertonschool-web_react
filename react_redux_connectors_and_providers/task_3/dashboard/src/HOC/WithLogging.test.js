import { shallow } from 'enzyme';
import React from 'react';
import WithLogging from './WithLogging';
import Login from '../Login/Login';

describe('test HOC', () => {
  it('should called console log on mount and on unmount with Component', () => {
    console.log = jest.fn();
    const HOC = WithLogging(() => <p />);
    const wrapper = shallow(<HOC />);

    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith('Component Component is mounted');
    wrapper.unmount();
    expect(console.log).toHaveBeenCalledTimes(2);
    expect(console.log).toHaveBeenCalledWith('Component Component is going to unmount');
  });

  it('should called console log on mount and on unmount with the name of the component', () => {
    console.log = jest.fn();
    const HOC = WithLogging(Login);
    const wrapper = shallow(<HOC />);
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith('Component Login is mounted');
    wrapper.unmount();
    expect(console.log).toHaveBeenCalledTimes(2);
    expect(console.log).toHaveBeenCalledWith('Component Login is going to unmount');
  });
})
