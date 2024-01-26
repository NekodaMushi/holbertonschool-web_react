import React from 'react';
import { shallow } from 'enzyme';
import logo from '../assets/logo.jpg';

import Header from './Header';

describe('<Header />', () => {
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
  })
})
