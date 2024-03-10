import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from "./courseActionTypes";

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

const fetchCourse = (data) => {
  return {
    type: FETCH_COURSE_SUCCESS,
    data,
  }
}

export { selectCourse, unSelectCourse, fetchCourse };
