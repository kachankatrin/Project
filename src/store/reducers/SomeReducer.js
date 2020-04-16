import {DATA_LOADED, CHANGE_SEARCH, EMPTY_INPUT_FIELD} from '../actions/SomeAction';

const initStore = {
  products: [],
  totalPages: 1,
  search: '',
  searchForPaging: ''
}

export const actionReducer = (initialState=initStore, action) => {
  if(action.type === DATA_LOADED) {
    return{
      ...initialState,
      products: action.payload.products,
      totalPages: Math.ceil(action.payload.count / action.payload.page_size)
    }
  }
  if(action.type === CHANGE_SEARCH) {
    return {
      ...initialState,
      search: action.payload.target.value,
      searchForPaging: action.payload.target.value
    }
  }
  if(action.type === EMPTY_INPUT_FIELD) {
    return {
      ...initialState,
      search: action.payload
    }
  }
  return initialState
}