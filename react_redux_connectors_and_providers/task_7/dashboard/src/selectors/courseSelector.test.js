import { getListCourses } from "./courseSelector";
import { courseReducer } from "../reducers/courseReducer";

describe('test getAllCourses', () => {
  it('should return a list of courses', () => {
    const action = {
      type: 'FETCH_COURSE_SUCCESS',
      data: [
          {
            "id": "1",
            "name": "ES6",
            "credit": 60
          },
          {
            "id": "2",
            "name": "Webpack",
            "credit": 20
          },
          {
            "id": "3",
            "name": "React",
            "credit": 40
          }
      ]
    };

    const expected = [
      {
        "id": "1",
        "name": "ES6",
        "credit": 60,
        "isSelected": false,
      },
      {
        "id": "2",
        "name": "Webpack",
        "credit": 20,
        "isSelected": false,
      },
      {
        "id": "3",
        "name": "React",
        "credit": 40,
        "isSelected": false,
      }
  ]

    const initialState = {
      courses: []
    };

    initialState.courses = courseReducer(undefined, action);
    const courses = getListCourses(initialState);
    expect(courses.toJS()).toEqual(expected);
  });
})
