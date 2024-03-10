import React from 'react';
import CourseListRow from './CourseListRow';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { fetchCourses, selectCourse, unSelectCourse } from '../actions/courseActionCreators';
import { connect } from 'react-redux';
import { getListCourses } from '../selectors/courseSelector';


export class CourseList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCourses();
  }

  onChangeRow = (id, checked) => {
    if (checked === true) {
      this.props.selectCourse(id);
    } else {
      this.props.unSelectCourse(id);
    }
  }

  render() {
    const { listCourses } = this.props;
    let content;
    if (listCourses.length === 0) {
      content = <CourseListRow textFirstCell='No course available yet'/>
    } else {
      content = listCourses.map((course) => (
        <CourseListRow 
          key={course.id}
          id={course.id}
          textFirstCell={course.name}
          textSecondCell={course.credit}
          isHeader={false}
          isChecked={course.isSelected}
          onChangeRow={this.onChangeRow}/>
      ))
    }
    return (
      <table id='CourseList' className={css(styles.general)}>
        <thead>
          <CourseListRow textFirstCell="Available courses" isHeader={true}/>
          <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true}/>
        </thead>
        <tbody>
          {content}
        </tbody>
      </table>
    )
  }
}

CourseList.propTypes = {
  listCourses: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  fetchCourses: PropTypes.func,
  selectCourse: PropTypes.func,
  unSelectedCourse: PropTypes.func,
};

CourseList.defaultProps = {
  listCourses: [],
  fetchCourses: () => {},
  selectCourse: () => {},
  unSelectCourse: () => {},
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
});

const mapStateToProps = (state) => {
  const allcourses = getListCourses(state);
  return {
    listCourses: allcourses,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCourses: () => dispatch(fetchCourses()),
    selectCourse: (id) => dispatch(selectCourse(id)),
    unSelectCourse: (id) => dispatch(unSelectCourse(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);
