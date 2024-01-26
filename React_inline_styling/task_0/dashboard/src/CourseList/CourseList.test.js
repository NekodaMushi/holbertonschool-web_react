import React from 'react';
import { shallow } from 'enzyme';

import CourseList from './CourseList';

describe('<CourseList />', () => {
  it('renders CourseList component without crashing', () => {
    shallow(<CourseList />);
  });

  it('renders the 5 different rows', () => {
    const wrapper = shallow(<CourseList listCourses ={[
      {id: 1, name: 'ES6', credit: 60},
      {id: 2, name: 'Webpack', credit: 20},
      {id: 3, name: 'React', credit: 40}
    ]} />);
    expect(wrapper.html()).toEqual(
      "<table id=\"CourseList\"><thead><tr><th colSpan=\"2\">Available courses</th></tr><tr style=\"background-color:#deb5b545\"><th>Course name</th><th>Credit</th></tr></thead><tbody><tr><td>ES6</td><td>60</td></tr><tr style=\"background-color:#f5f5f5ab\"><td>Webpack</td><td>20</td></tr><tr><td>React</td><td>40</td></tr></tbody></table>"
    );
    expect(wrapper.find('CourseListRow')).toHaveLength(5);
  });

  it('renders 1 line when no list is given', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find('CourseListRow')).toHaveLength(1);
    expect(wrapper.find('CourseListRow').prop('textFirstCell')).toEqual('No course available yet');
  });
})
