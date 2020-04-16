// import React from 'react';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import {actionReducer} from './reducers/SomeReducer';
import {compose} from 'redux';

const reducers = combineReducers({staff: actionReducer});
const enhanceMiddleWare = compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export const store = createStore(reducers, enhanceMiddleWare)