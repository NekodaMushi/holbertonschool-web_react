import { selectCourse, unSelectCourse } from "./courseActionCreators";

describe('tests for select or unselect a course', () => {
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
})
