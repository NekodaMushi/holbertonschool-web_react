import { Map } from 'immutable';

export const getListCourses = (state) => {
  const courses = Map(state.courses);
  if(courses) {
    return courses.valueSeq();
  }
  console.log(courses);
  return courses;
}
