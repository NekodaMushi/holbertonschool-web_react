import { courseReducer } from "./courseReducer";
import { setCourses, selectCourse, unSelectCourse } from "../actions/courseActionCreators";
import { coursesNormalizer } from "../schema/courses";
import { Map, fromJS } from 'immutable';

describe('tests for courseReducer', () => {
  const dataTest = [
    {
      id: 1,
      name: "ES6",
      isSelected: false,
      credit: 60
    },
    {
      id: 2,
      name: "Webpack",
      isSelected: false,
      credit: 20
    },
    {
      id: 3,
      name: "React",
      isSelected: false,
      credit: 40
    }
  ]
  it('should return an empty array', () => {
    const testReducerCourse = courseReducer(undefined, '');
    expect(testReducerCourse).toEqual(Map([]));
  });

  it('should return the data passed with FETCH_COURSE ACTION', () => {
    const datTest = [
      {
        id: 1,
        name: "ES6",
        credit: 60
      },
      {
        id: 2,
        name: "Webpack",
        credit: 20
      },
      {
        id: 3,
        name: "React",
        credit: 40
      }
    ]
    const testReducerCourse = courseReducer(Map(datTest), setCourses(datTest));
    expect(testReducerCourse.toJS()).toEqual(coursesNormalizer(dataTest))
  });

  it('should return the right data updated with SELECT_COURSE action', () => {
    const dataExpected = [
      {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: true,
        credit: 20
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40
      }
    ];
    const testReducer = courseReducer(fromJS(coursesNormalizer(dataTest)), selectCourse(2));
    expect(testReducer.toJS()).toEqual(coursesNormalizer(dataExpected));
  });

  it('should return the right data updated with UNSELECT_COURSE action', () => {
    const testReducer = courseReducer(fromJS(coursesNormalizer(dataTest)), unSelectCourse(2));
    expect(testReducer.toJS()).toEqual(coursesNormalizer([
      {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: false,
        credit: 20
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40
      }
    ]))
  });
})
