import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from "./courseActionTypes";
import 'node-fetch';

const selectCourse = (index) => {
  return {
    type: SELECT_COURSE,
    index,
  }
}

const unSelectCourse = (index) => {
  return {
    type: UNSELECT_COURSE,
    index,
  }
}

const setCourses = (data) => {
  return {
    type: FETCH_COURSE_SUCCESS,
    data,
  }
}

const fetchCourses = () => {
  return (dispatch) => {
    return fetch('http://localhost:8080/courses.json')
      .then((res) => res.json())
      .then((data) => dispatch(setCourses(data)))
      .catch((error) => console.log(error))
  }
}

export { selectCourse, unSelectCourse, fetchCourses, setCourses };
