import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from './reducers';

import App from 'components/App';

const useLocalStore = store => next => action => {
  next(action);
  localStorage.setItem('store', JSON.stringify(store.getState()));
};

const preloadedState =
  JSON.parse(localStorage.getItem('store')) || rootReducer(undefined, {});
const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), useLocalStore],
  preloadedState,
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
