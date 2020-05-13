import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { actionReducer, naviReducer, favoriteProductReducer } from './reducers/Reducers';
import { compose } from 'redux';

const reducers = combineReducers({ 
  mainState: actionReducer, 
  navi: naviReducer, 
  favProducts: favoriteProductReducer 
});
const enhanceMiddleWare = window.navigator.userAgent.includes('Chrome') 
  ?  compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) 
  : compose(applyMiddleware(thunk));
export const store = createStore(reducers, enhanceMiddleWare);
