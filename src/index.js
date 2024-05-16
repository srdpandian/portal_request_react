import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "./app/redux/store";
import App from './app/App';
import $ from 'jquery';
import "./i18n";


import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename="/portal_request">
      <App />
    </BrowserRouter>
  </Provider>
, document.getElementById('root'));

serviceWorker.unregister();