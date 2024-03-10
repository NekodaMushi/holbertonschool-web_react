import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

describe('test <BodySectionWithMarginBottom />', () => {
  const props = {
    title: 'test title',
    children: React.createElement('p', 'test child'),
  }
  it('should render correctly a BodySection component and that the props are passed correctly to the child component', () => {
    StyleSheetTestUtils.suppressStyleInjection();
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="test title">
        <p>test children node</p>
      </BodySectionWithMarginBottom>,
    );
  
    const div = wrapper.find('div.bodySectionWithMargin_13jnc9w');
    expect(div.length).toEqual(1);
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  })
})
