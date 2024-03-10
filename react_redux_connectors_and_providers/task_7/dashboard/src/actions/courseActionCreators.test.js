import { selectCourse, unSelectCourse, fetchCourses } from "./courseActionCreators";
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);

describe('tests for course action creator', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('should call the creator for selection with index 1', () => {
    const result = selectCourse(1);
    const expectedResult = { type: 'SELECT_COURSE', index: 1 };
    expect(result).toEqual(expectedResult);
  });

  it('should call the creator for unselection with index 1', () => {
    const result = unSelectCourse(1);
    const expectedResult = { type: 'UNSELECT_COURSE', index: 1 };
    expect(result).toEqual(expectedResult);
  });

  it('should fetch correctly', () => {
    const store = mockStore({});
    fetchMock.get('http://localhost:8080/courses.json', {
      status: 200,
      body: [],
    });
    const expectedAction = [
      {
        type: 'FETCH_COURSE_SUCCESS', 
        data: []
      }
    ];

    return store.dispatch(fetchCourses()).then(() => {
      expect(store.getActions()).toEqual(expectedAction)
    })
  })
})
