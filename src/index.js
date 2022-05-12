import React from 'react';

import ReactDOM from 'react-dom/client';

import { createStore, compose, applyMiddleware } from 'redux';

import { Provider } from 'react-redux';

import thunk from '../node_modules/redux-thunk/es/index';

import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

import reducers from './reducers/index';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
