import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';
import { StyleSheetTestUtils } from 'aphrodite';

describe('<CourseListRow/>', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  it('test when isHeader is true and textSecondCell does not exist', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Available courses" listCourses = {[
      {id: 1, name: 'ES6', credit: 60},
      {id: 2, name: 'Webpack', credit: 20},
      {id: 3, name: 'React', credit: 40}
    ]}/>);
    expect(wrapper.html()).toContain("<tr class=\"generalThead_ewt1bg\"><th colSpan=\"2\" class=\"colspan_10pd9d0\">Available courses</th></tr>");
  });

  it('test when isHeader is true and textSecondCell is present', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit"/>);
    expect(wrapper.html()).toContain("<tr style=\"background-color:#deb5b545\" class=\"generalThead_ewt1bg\"><th class=\"generalTh_bwhx0f\">Course name</th><th class=\"generalTh_bwhx0f\">Credit</th></tr>");
  });

  it('test when isHeader is false', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="Course name" textSecondCell="Credit"/>);
    expect(wrapper.html()).toContain("<tr class=\"generalTrBody_1moduum\"><td><input type=\"checkbox\" name=\"check\"/>Course name</td><td>Credit</td></tr>");
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
})
