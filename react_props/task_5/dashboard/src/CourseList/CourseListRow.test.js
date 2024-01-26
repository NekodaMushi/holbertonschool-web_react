import React from 'react';
import { shallow } from 'enzyme';

import CourseListRow from './CourseListRow';

describe('<CourseListRow/>', () => {
  it('test when isHeader is true and textSecondCell does not exist', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Available courses" listCourses = {[
      {id: 1, name: 'ES6', credit: 60},
      {id: 2, name: 'Webpack', credit: 20},
      {id: 3, name: 'React', credit: 40}
    ]}/>);
    expect(wrapper.html()).toContain("<th colSpan=\"2\">Available courses</th>");
  });

  it('test when isHeader is true and textSecondCell is present', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit"/>);
    expect(wrapper.html()).toContain("<th>Course name</th><th>Credit</th>");
  });

  it('test when isHeader is false', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="Course name" textSecondCell="Credit"/>);
    expect(wrapper.html()).toContain("<td>Course name</td><td>Credit</td>");
  });
})
