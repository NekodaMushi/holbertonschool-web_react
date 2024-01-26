import React from 'react';
import CourseListRow from './CourseListRow';
import './CourseList.css';

export default function CourseList() {
  return <table id='CourseList'>
    <thead><tr>
      <CourseListRow textFirstCell="Available courses" isHeader={true}/>
      <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true}/>
    </tr></thead>
    <tbody><tr>
      <CourseListRow textFirstCell="ES6" textSecondCell="60" isHeader={false}/>
      <CourseListRow textFirstCell="Webpack" textSecondCell="20" isHeader={false}/>
      <CourseListRow textFirstCell="React" textSecondCell="40" isHeader={false}/>
    </tr></tbody>
  </table>
}
