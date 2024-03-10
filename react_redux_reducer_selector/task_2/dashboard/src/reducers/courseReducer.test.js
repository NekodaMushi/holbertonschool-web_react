import { courseReducer, initi } from "./courseReducer";
import { fetchCourse, selectCourse, unSelectCourse } from "../actions/courseActionCreators";

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
    const datTest = []
    const testReducerCourse = courseReducer(datTest, fetchCourse([]));
    expect(testReducerCourse).toEqual([]);
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
    const testReducerCourse = courseReducer(datTest, fetchCourse(datTest));
    expect(testReducerCourse).toEqual([
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
    ])
  });

  it('should return the right data updated with SELECT_COURSE action', () => {
    const testReducer = courseReducer(dataTest, selectCourse(2));
    expect(testReducer).toEqual([
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
    ])
  });

  it('should return the right data updated with UNSELECT_COURSE action', () => {
    const testReducer = courseReducer(dataTest, unSelectCourse(2));
    expect(testReducer).toEqual([
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
    ])
  });
})
