import { 
  SELECT_COURSE,
  UNSELECT_COURSE,
  FETCH_COURSE_SUCCESS
} from "../actions/courseActionTypes";

const initialSate = [];

export const courseReducer = (state = initialSate, action) => {
  switch(action.type) {
    case FETCH_COURSE_SUCCESS:
      return action.data.map((course) => {
        return {
          ...course,
          isSelected: false,
        }
      })
    
    case SELECT_COURSE:
      return state.map((course) => {
        if (course.id === action.index) {
          return {
            ...course,
            isSelected: true,
          }
        }
        return course;
      })

    case UNSELECT_COURSE:
      return state.map((course) => {
        if(course.id === action.id) {
          return  {
            ...course,
            isSelected: false,
          }
        }
        return course;
      })

    default: return state;
  }
}
