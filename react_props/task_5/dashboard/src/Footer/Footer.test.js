import React from 'react';
import { shallow } from 'enzyme';

import Footer from './Footer';

describe('<Footer />', () => {
  it('renders without craching', () => {
    shallow(<Footer />);
  });

  it('Verify that the components at the very least render the text “Copyright”', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text().includes('Copyright')).toBe(true);
  })
})
