import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';
import React from 'react';
import { shallow } from 'enzyme';

describe('test <BodySectionWithMarginBottom />', () => {
  const props = {
    title: 'test title',
    children: React.createElement('p', 'test child'),
  }
  it('should render correctly a BodySection component and that the props are passed correctly to the child component', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="test title">
        <p>test children node</p>
      </BodySectionWithMarginBottom>,
    );
  
    const div = wrapper.find('div.bodySectionWithMargin');
    expect(div.length).toEqual(1);
  })
})
