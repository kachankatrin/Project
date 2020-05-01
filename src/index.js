import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {createBrowserHistory} from 'history';
import { Provider } from 'react-redux';
import { store } from './store/index'
import './App.scss';
import App from './App';
const history = createBrowserHistory;
ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter history={history}>
      <App />
    </BrowserRouter>
    </Provider>
    ,
  document.getElementById('root')
)