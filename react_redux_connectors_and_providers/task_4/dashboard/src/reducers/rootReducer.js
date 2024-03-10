import { uiReducer, initialUiState } from './uiReducer';
import { courseReducer, initialCourseState } from './courseReducer';
import { notifReducer, initialNotificationState } from './notificationReducer';

import { Map } from 'immutable';

export const initialState = {
  courses: Map(initialCourseState),
  notifications: Map(initialNotificationState),
  ui: Map(initialUiState)
}

const rootReducer = {
  courses: courseReducer,
  notifications: notifReducer,
  ui: uiReducer
};

export default rootReducer;
