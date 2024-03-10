import { 
  SELECT_COURSE,
  UNSELECT_COURSE,
  FETCH_COURSE_SUCCESS
} from "../actions/courseActionTypes";
import { Map, setIn, merge } from 'immutable';
import { coursesNormalizer } from "../schema/courses";

export const initialCourseState = [];

export const courseReducer = (state = Map(initialCourseState), action) => {
  switch(action.type) {
    case FETCH_COURSE_SUCCESS:
      const neWData = action.data.map((course) => {
        return {
          ...course,
          isSelected: false,
        }
      })
      const normalizeData = coursesNormalizer(neWData);
      return merge(state, normalizeData)

    
    case SELECT_COURSE:
      return setIn(state, [String(action.index), 'isSelected'], true);


    case UNSELECT_COURSE:
      return setIn(state, [String(action.index), 'isSelected'], false);

    default: return state;
  }
}
