import { DATA_LOADED, CHANGE_SEARCH, CHANGE_SELECT, CHANGE_TOGGLE, CHANGE_RADIO, CLEAR_STATE, OPEN_MODAL, DARK_MODE, SELECT_MODAL, OPEN_CRITERIAS, CHANGE_LOADER_STATUS, OPEN_MENU, ADD_PRODUCT, REMOVE_PRODUCT, CHANGE_ACTIVE_INDEX, CLICK_PREVIOUS, GET_PREV_INFO, FAVOTITES_LOADED, SELECT_FAV_MODAL, OPEN_FAV_MODAL, CLICK_NEXT } from '../actions/Actions';

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
  productsForModal: null,
  ismoreCriteriasOpen: false,
  loading: false,
  text: 'Enter valid search query',
}
const naviStore = {
  isMenuOpen: false
}

export const actionReducer = (initialState = initStore, action) => {
  console.log(action.payload)
  if (action.type === DATA_LOADED) {
    console.log(initialState.loading, 'fetchhhhhhhhhh')
    return {
      ...initialState,
      products: action.payload.products,
      loading: false,
      totalPages: Math.ceil(action.payload.count / action.payload.page_size)
    }
  }
  if (action.type === CHANGE_LOADER_STATUS) {
    console.log(initialState.loading, 'xfgfyfjy')
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
    console.log(action.payload.value.split(','))
    const valuesSplited = action.payload.value.split(',')
    const lastKey = valuesSplited.length > 1 ? valuesSplited[1] : null
    return {
      ...initialState,
      [action.payload.key]: valuesSplited[0],
      [action.payload.key1]: lastKey
    }
  }
  if (action.type === CHANGE_TOGGLE) {
    return {
      ...initialState,
      [action.payload.key]: action.payload.target.checked === true ? 'contains' : 'does_not_contain'
    }
  }
  if (action.type === CHANGE_RADIO) {
    console.log(action.payload)
    return {
      ...initialState,
      [action.payload.key]: action.payload.value
    }
  }
  if (action.type === CLEAR_STATE) {
    action.payload.isDarkMode = initialState.isDarkMode
    console.log(initialState, action.payload)
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
    console.log(action.payload, action.type)
    const modalObj = initialState.products.filter(item => item.id === action.payload.id)[0]
    console.log(modalObj, initialState)
    return {
      ...initialState,
      modalProductName: modalObj.product_name,
      productsForModal: modalObj
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
  favoriteProducts: [],
  activeIndex: null,
  productsForModal: null,
  Carousel: null,
  modalProductName: '',
  isFavModalOpen: false
}
export const productReducer = (initialState = favStore, action) => {
  console.log("INITIAL", [...initialState.favoriteProducts])
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
    console.log(action.payload, 'acPayl')
    console.log(action.payload)
    return {
      favoriteProducts: initialState.favoriteProducts.filter((item) => {
        console.log(initialState.favoriteProducts, 'isFavProductINNNNNNN')
        return item.id !== action.payload
      })
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
      activeIndex: initialState.activeIndex > 0 ? initialState.activeIndex - action.payload.true : action.payload.false,
    }
  }
  if (action.type === CLICK_NEXT) {
    return {
      ...initialState,
      activeIndex: initialState.activeIndex < initialState.Carousel.length - 1 ? initialState.activeIndex + action.payload.true : action.payload.false

    }
  }
  if (action.type === GET_PREV_INFO) {
    console.log("FFFFFFF", initialState.activeIndex)
    console.log(initialState.Carousel)
    console.log(initialState.Carousel[initialState.activeIndex])
    return {
      ...initialState,
      productsForModal: initialState.Carousel[initialState.activeIndex], //.filter((item, index) => index === initialState.activeIndex),
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
    console.log(action.payload, action.type)
    const modalObj = initialState.Carousel.filter(item => item.id === action.payload.id)[0]
    console.log(modalObj, initialState)
    return {
      ...initialState,
      modalProductName: modalObj.product_name,
      productsForModal: modalObj
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