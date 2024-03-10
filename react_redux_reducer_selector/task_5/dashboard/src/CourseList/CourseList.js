import React from 'react';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

export default function CourseList({ listCourses }) {
  return <table id='CourseList' className={css(styles.general)}>
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

export const styles = StyleSheet.create({
  general: {
    width: '90%',
    border: '1px solid lightgray',
    marginTop: '3%',
    marginLeft: '5%',
    marginRight: '5%',
  },
  generalThead: {
    display: 'grid',
    width: '100%',
    gridTemplateColumns: 'repeat(2, 50%)',
  },
  colspan: {
    gridColumn: '1/2',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  generalTrBody: {
    borderTop: '1px solid lightgray',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 50%)',
  },
  generalTh: {
    display: 'flex',
    justifyContent: 'flex-start',
  }
})
