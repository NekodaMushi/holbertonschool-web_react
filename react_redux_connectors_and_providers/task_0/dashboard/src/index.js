import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App/App';
import { createStore } from 'redux';
import { uiReducer } from './reducers/uiReducer';
import { Provider } from 'react-redux';

const store = createStore(uiReducer);

const root = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, root
);
