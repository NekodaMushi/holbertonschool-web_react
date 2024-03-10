import BodySection from './BodySection';
import React from 'react';
import { shallow } from 'enzyme';

describe('tests for Bodysection', () => {
  it('should render correctly the children and one h2', () => {
    const wrapper = shallow(
    <BodySection title="test title">
      <p>test children node</p>
    </BodySection>,);
    expect(wrapper.find('h2')).toHaveLength(1);
    expect(wrapper.find('h2').text()).toEqual('test title');
    expect(wrapper.find('p').text()).toEqual('test children node');
  });
})
