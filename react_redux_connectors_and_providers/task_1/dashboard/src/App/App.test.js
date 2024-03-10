import React from 'react';
import { mount, shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import { mapStateToProps } from './App';
import ConnectedApp from './App';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import { user, logOut, AppContext } from '../App/AppContext';
import { Map } from 'immutable';

describe('<App />', () => {
  it('should test mapStateToProps and return an object', () => {
    const state = Map({
      isUserLoggedIn: true,
      isNotificationDrawerVisible: false
    });
    const expected = {
      isLoggedIn: true,
      displayDrawer: false
    };
    const mapState = mapStateToProps(state);
    expect(mapState).toEqual(expected);
  });

  it('should test mapStateToProps and return an object', () => {
    const state = Map({
      isUserLoggedIn: false,
      isNotificationDrawerVisible: true
    });
    const expected = {
      isLoggedIn: false,
      displayDrawer: true
    };
    const mapState = mapStateToProps(state);
    expect(mapState).toEqual(expected);
  });
})
