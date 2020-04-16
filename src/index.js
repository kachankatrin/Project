import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {createBrowserHistory} from 'history';
import { Provider } from 'react-redux';
import { store } from './store/index'
// import {Provider} from 'react-redux';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
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
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();



// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

