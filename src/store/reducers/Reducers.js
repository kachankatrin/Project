import { 
  DATA_LOADED, 
  CHANGE_SEARCH, 
  CHANGE_SELECT, 
  CHANGE_TOGGLE, 
  CHANGE_RADIO, 
  CLEAR_STATE, 
  OPEN_MODAL, 
  DARK_MODE, 
  SELECT_MODAL, 
  OPEN_CRITERIAS, 
  CHANGE_LOADER_STATUS, 
  OPEN_MENU, 
  ADD_PRODUCT, 
  REMOVE_PRODUCT, 
  CHANGE_ACTIVE_INDEX, 
  CLICK_PREVIOUS, 
  GET_CURRENT_INFO, 
  FAVOTITES_LOADED, 
  SELECT_FAV_MODAL, 
  OPEN_FAV_MODAL, 
  CLICK_NEXT,
  CHANGE_ANIMATION 
} from '../actions/Actions';
import { loadStateFromLocalStorage } from '../../utils';

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
  modalProductName: '',
  isDarkMode: false,
  productForModal: null,
  ismoreCriteriasOpen: false,
  loading: false,
  text: 'Enter valid search query',
  animation: 'zoom'
}
const naviStore = {
  isMenuOpen: false
}

export const actionReducer = (initialState = initStore, action) => {
  if (action.type === DATA_LOADED) {
    return {
      ...initialState,
      products: action.payload.products,
      loading: false,
      totalPages: Math.ceil(action.payload.count / action.payload.page_size)
    }
  }
  if (action.type === CHANGE_LOADER_STATUS) {
    return {
      ...initialState,
      loading: action.payload.show,
      text: action.payload.text
    }
  }
  if (action.type === CHANGE_SEARCH) {
    return {
      ...initialState,
      [action.payload.key]: action.payload.value,
    }
  }
  if (action.type === CHANGE_SELECT) {
    const valuesSplited = action.payload.value.split(',');
    const lastKey = valuesSplited.length > 1 ? valuesSplited[1] : null;
    return {
      ...initialState,
      [action.payload.key]: valuesSplited[0],
      [action.payload.key1]: lastKey
    }
  }
  if (action.type === CHANGE_TOGGLE) {
    return {
      ...initialState,
      [action.payload.key]: action.payload.target.checked === true 
        ? 'contains' 
        : 'does_not_contain'
    }
  }
  if (action.type === CHANGE_RADIO) {
    return {
      ...initialState,
      [action.payload.key]: action.payload.value
    }
  }
  if (action.type === CLEAR_STATE) {
    action.payload.isDarkMode = initialState.isDarkMode;
    return initialState = action.payload
  }
  if (action.type === OPEN_MODAL) {
    return {
      ...initialState,
      isModalOpen: !initialState.isModalOpen
    }
  }
  if (action.type === OPEN_CRITERIAS) {
    return {
      ...initialState,
      ismoreCriteriasOpen: !initialState.ismoreCriteriasOpen
    }
  }
  if (action.type === DARK_MODE) {
    return {
      ...initialState,
      isDarkMode: !initialState.isDarkMode
    }
  }
  if (action.type === SELECT_MODAL) {
    const modalObj = initialState.products.filter(item => item._id === action.payload.id)[0];
    return {
      ...initialState,
      modalProductName: modalObj.product_name,
      productForModal: modalObj
    }
  }
  if (action.type === CHANGE_ANIMATION) {
    return {
      ...initialState,
      animation: action.payload
    }
  }
  return initialState
}

export const naviReducer = (initialState = naviStore, action) => {
  if (action.type === OPEN_MENU) {
    return {
      ...initialState,
      isMenuOpen: !initialState.isMenuOpen
    }
  }
  return initialState
}

const favStore = {
  favoriteProducts: loadStateFromLocalStorage() || [],
  activeIndex: null,
  productForModal: null,
  Carousel: null,
  modalProductName: '',
  isFavModalOpen: false
}
export const favoriteProductReducer = (initialState = favStore, action) => {
  let newProductsArr = [];
  initialState.favoriteProducts.map((item, index) => {
    let obj = {};
    obj[index] = item;
    return newProductsArr.push(obj)
  })
  if (action.type === ADD_PRODUCT) {
    return {
      ...initialState,
      favoriteProducts: [...initialState.favoriteProducts, action.payload]
    }
  }
  if (action.type === REMOVE_PRODUCT) {
    return {
      favoriteProducts: initialState.favoriteProducts.filter((item) => item.id !== action.payload)
    }
  }
  if (action.type === CHANGE_ACTIVE_INDEX) {
    return {
      ...initialState,
      activeIndex: action.payload
    }
  }
  if (action.type === CLICK_PREVIOUS) {
    return {
      ...initialState,
      activeIndex: initialState.activeIndex > 0 
        ? initialState.activeIndex - action.payload.true 
        : action.payload.false,
    }
  }
  if (action.type === CLICK_NEXT) {
    return {
      ...initialState,
      activeIndex: initialState.activeIndex < initialState.Carousel.length - 1 
        ? initialState.activeIndex + action.payload.true 
        : action.payload.false

    }
  }
  if (action.type === GET_CURRENT_INFO) {
    return {
      ...initialState,
      productForModal: initialState.Carousel[initialState.activeIndex], //.filter((item, index) => index === initialState.activeIndex),
      modalProductName: initialState.Carousel.filter((item, index) => index === initialState.activeIndex)[0].product_name
    }
  }
  if (action.type === FAVOTITES_LOADED) {
    return {
      ...initialState,
      Carousel: newProductsArr.map((item, index) => item[index])
    }
  }
  if (action.type === SELECT_FAV_MODAL) {
    const modalObj = initialState.Carousel.filter(item => item.id === action.payload.id)[0]
    return {
      ...initialState,
      modalProductName: modalObj.product_name,
      productForModal: modalObj
    }
  }
  if (action.type === OPEN_FAV_MODAL) {
    return {
      ...initialState,
      isFavModalOpen: !initialState.isFavModalOpen
    }
  }
  return initialState
}