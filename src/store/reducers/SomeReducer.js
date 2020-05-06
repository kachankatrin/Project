import {DATA_LOADED, CHANGE_SEARCH, CHANGE_SELECT, CHANGE_TOGGLE, CHANGE_RADIO, CLEAR_STATE, OPEN_MODAL, DARK_MODE, SELECT_MODAL, OPEN_CRITERIAS, CHANGE_LOADER_STATUS, OPEN_MENU} from '../actions/SomeAction';

export const initStore = {
  products: [],
  totalPages: 1,
  search: '',
  tagtype: '', 
  tagContains: 'does_not_contain', 
  tag: '',
  tagtype1: '', 
  tagContains1: 'does_not_contain', 
  tag1: '', 
  additives: 'indifferent', 
  ingPalmOil: 'indifferent',
  ingMayBePalmOil: 'indifferent',
  ingPalmOilORMayBePalmOil: 'indifferent',
  nutriment: '',
  comparement: '',
  nutrimentValue: '',
  nutriment1: '',
  comparement1: '',
  nutrimentValue1: '',
  energyUnit: '',
  energyUnit1: '',
  isModalOpen: false,
  modalPicture: '',
  isDarkMode: false,
  productsForModal: null,
  isMoreCriteriasOpen: false,
  loading: false,
  text: 'Enter valid search query',
  // isMenuOpen: false
}
const naviStore = {
  isMenuOpen: false
}

export const actionReducer = (initialState=initStore, action) => {
  console.log(action.payload)
  if(action.type === DATA_LOADED) {
    console.log(initialState.loading, 'fetchhhhhhhhhh')
    return{
      ...initialState,
      products: action.payload.products,
      loading: false,
      totalPages: Math.ceil(action.payload.count / action.payload.page_size)
    }
  }
  if (action.type === CHANGE_LOADER_STATUS) {
    console.log(initialState.loading, 'xfgfyfjycdgdhcdhfgfdsfddgfhfghgfgfgfhg')
      return {
        ...initialState,
        loading: action.payload.show,
        text: action.payload.text
      }
   
  }
  if(action.type === CHANGE_SEARCH) {
    return {
      ...initialState,
      [action.payload.key]: action.payload.value,
    }
  }
  if(action.type === CHANGE_SELECT) {
    console.log(action.payload.value.split(','))
    const valuesSplited = action.payload.value.split(',')
    const lastKey = valuesSplited.length>1 ? valuesSplited[1] : null
    return {
      ...initialState,
      [action.payload.key]: valuesSplited[0],
      [action.payload.key1]: lastKey
    }
  }
  if(action.type === CHANGE_TOGGLE) {
    return {
      ...initialState,
      [action.payload.key]: action.payload.target.checked === true ? 'contains' : 'does_not_contain' 
    }
  }
  if(action.type === CHANGE_RADIO) {
    console.log(action.payload)
    return {
      ...initialState,
      [action.payload.key]: action.payload.value
    }
  }
  if(action.type === CLEAR_STATE) {
    action.payload.isDarkMode = initialState.isDarkMode
    console.log(initialState, action.payload)
    return initialState = action.payload
  }
  if(action.type === OPEN_MODAL) {
    return {
      ...initialState,
      isModalOpen: !initialState.isModalOpen
    }
  }
  // if(action.type === OPEN_MENU) {
  //   return {
  //     ...initialState,
  //     isMenuOpen: !initialState.isMenuOpen
  //   }
  // }
  if(action.type === OPEN_CRITERIAS) {
    return {
      ...initialState,
      isMoreCriteriasOpen: !initialState.isMoreCriteriasOpen
    }
  }
  if(action.type === DARK_MODE) {
    return {
      ...initialState,
      isDarkMode: !initialState.isDarkMode
    }
  }
  if(action.type === SELECT_MODAL) {

    console.log(action.payload, action.type)
    const modalObj = initialState.products.filter(item => item.id === action.payload.id)[0]
    console.log(modalObj, initialState)
    return {
      ...initialState,
      modalPicture: modalObj.product_name,
      productsForModal: modalObj
    }
  }
  return initialState
}

export const naviReducer = (initialState=naviStore, action) => {
  if(action.type === OPEN_MENU) {
    return {
      ...initialState,
      isMenuOpen: !initialState.isMenuOpen
    }
  }
  return initialState
}