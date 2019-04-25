import React from 'react';
import { render } from 'react-dom';
import Provider from 'react-redux/lib/components/Provider';
import App from './App'
import configureStore from './container/store';
import initialState from './container/initialState';

const store = configureStore(initialState);

render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);
