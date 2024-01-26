import React from 'react';
import CourseListRow from './CourseListRow';
import './CourseList.css';
import CourseShape from './CourseShape';
import PropTypes from 'prop-types';

export default function CourseList({ listCourses }) {
  return <table id='CourseList'>
    {listCourses.length > 0 ? (<>
    <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true}/>
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true}/>
    </thead>
    <tbody>
      {listCourses.map((course) => (
        <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} />
      ))}
    </tbody></>) : (
    <tbody>
        <CourseListRow textFirstCell='No course available yet'/>
    </tbody>)
    }
  </table>
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};
