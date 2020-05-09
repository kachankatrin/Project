import { api } from '../../utils'
// import MoreCriterias from '../../components/moreCriterias';
export const DATA_LOADED = 'DATA LOADED';
export const CHANGE_SEARCH = 'CHANGE_SEARCH';
export const CHANGE_SELECT = 'CHANGE_SELECT';
export const CHANGE_TOGGLE = 'CHANGE_TOGGLE';
export const CHANGE_RADIO = 'CHANGE_RADIO';
export const CLEAR_STATE = 'CLEAR_STATE';
export const OPEN_MODAL = 'OPEN_MODAL';
export const DARK_MODE = 'DARK_MODE';
export const SELECT_MODAL = 'SELECT_MODAL';
export const OPEN_CRITERIAS = 'OPEN_CRITERIAS';
export const CHANGE_LOADER_STATUS = 'CHANGE_LOADER_STATUS';
export const OPEN_MENU = 'OPEN_MENU';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const MODAL_PRODUCT = 'MODAL_PRODUCT';
export const CHANGE_ACTIVE_INDEX = 'CHANGE_ACTIVE_INDEX';
export const CLICK_PREVIOUS = 'CLICK_PREVIOUS';
export const GET_PREV_INFO = 'GET_PREV_INFO';
export const FAVOTITES_LOADED = 'FAVOTITES_LOADED';
export const SELECT_FAV_MODAL = 'SELECT_FAV_MODAL';
export const OPEN_FAV_MODAL = 'OPEN_FAV_MODAL';
export const CLICK_NEXT = 'CLICK_NEXT'

export const fetchOOF = (search, page, tagtype, tagContains, tag, tagtype1, tagContains1, tag1, additives, ingPalmOil, ingMayBePalmOil, ingPalmOilORMayBePalmOil, nutriment, comparement, nutrimentValue, energyUnit, nutriment1, comparement1, nutrimentValue1, energyUnit1) => {
  const searchCritiria = `${search}&page=${page}&tagtype_0=${tagtype}&tag_contains_0=${tagContains}&tag_0=${tag}&tagtype_1=${tagtype1}&tag_contains_1=${tagContains1}&tag_1=${tag1}&additives=${additives}&ingredients_from_palm_oil=${ingPalmOil}&ingredients_that_may_be_from_palm_oil=${ingMayBePalmOil}&ingredients_from_or_that_may_be_from_palm_oil=${ingPalmOilORMayBePalmOil}&nutriment_0=${nutriment}&nutriment_energy_unit_0=${energyUnit}&nutriment_compare_0=${comparement}&nutriment_value_0=${nutrimentValue}&nutriment_1=${nutriment1}&nutriment_energy_unit_1=${energyUnit1}&nutriment_compare_1=${comparement1}&nutriment_value_1=${nutrimentValue1}`
  // const query = search ? `${search}&page=${page}&tagtype_0=${tagtype}&tag_contains_0=${tagContains}&tag_0=${tag}` : '';
  return async (dispatch) => {
    dispatch({ type: CHANGE_LOADER_STATUS, payload: { show: true, text: 'Loading...' } })
    console.log("HERE OOF", api, searchCritiria)
    const data = await fetch(`${api}${searchCritiria}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': "application/x-www-form-urlencoded",
        'User-Agent': 'HealthyFoodChoices - Android - Version 1.0 - http://localhost:3002/'
      },
      redirect: 'follow'
    })
    console.log(data)

    const json = await data.json();
    const res = await dispatch({ type: DATA_LOADED, payload: json })
    dispatch({ type: CHANGE_LOADER_STATUS, payload: { show: false } })
    console.log(res)
  }
}
// export const handleLoader = (e) =>{
//   return {
//     type: CHANGE_LOADER_STATUS
//   }
// }
export const handleInput = (e, key) => {
  console.log(CHANGE_SEARCH, e.target)
  return {
    type: CHANGE_SEARCH,
    payload: { value: e.target.value, key }
  }
}
export const handleSelect = (e, key, key1) => {
  console.log(CHANGE_SELECT, e)
  return {
    type: CHANGE_SELECT,
    payload: { value: e.target.value, key, key1 }
  }
}
export const handleToggle = (e, key) => {

  return {
    type: CHANGE_TOGGLE,
    payload: { target: e.target, key }
  }
}
export const handleRadio = (e, key) => {
  return {
    type: CHANGE_RADIO,
    payload: { value: e.target.value, key }
  }
}
export const handleClearState = (oldObj) => {
  console.log(oldObj)
  return {
    type: CLEAR_STATE,
    payload: oldObj
  }
}
export const handleModalOpen = (e) => {
  return {
    type: OPEN_MODAL
  }
}

export const handleModalFavOpen = (e) => {
  return {
    type: OPEN_FAV_MODAL
  }
}

export const handleMoreCriteriasOpen = (e) => {
  return {
    type: OPEN_CRITERIAS
  }
}

export const handleDarkMode = () => {
  return {
    type: DARK_MODE
  }
}
export const handleMenuOpen = (e) => {
  return {
    type: OPEN_MENU
  }
}

export const handleSelectModalProduct = (e) => {

  console.log(e, 'aaaaaaaaaaaaaaasssfgdfdgfdgdgfdgfdhgfdhfdhgffghfdgfdgfbfvhgfbcdbxgxgvxf')
  e.persist()
  return {
    type: SELECT_MODAL,
    payload: { id: e.currentTarget.id }
  }
}
export const handleSelectFavoriteProduct = (e) => {

  console.log(e, 'aaaaaaaaaaaaaaasssfgdfdgfdgdgfdgfdhgfdhfdhgffghfdgfdgfbfvhgfbcdbxgxgvxf')
  e.persist()
  return {
    type: SELECT_FAV_MODAL,
    payload: { id: e.currentTarget.id }
  }
}

export const getPreviousInfo = () => {
  return {
    type: GET_PREV_INFO,

  }
}




export function addProduct(product) {
  console.log("ADD_CHARACTER", product)
  return {
    type: ADD_PRODUCT,
    payload: product
  }
}

export function removeProduct(product) {
  console.log('REMOVE product', product.id)
  return {
    type: REMOVE_PRODUCT,
    payload: product.id
  }
}

export const changeActiveIndex = (key) => {
  console.log(key)
  // e.stopPropagation()
  return {
    type: CHANGE_ACTIVE_INDEX,
    payload: key
  }

}

export const handlePrevious = (arr) => {
  console.log(arr)
  console.log(arr.length)
  return {
    type: CLICK_PREVIOUS,
    payload: { true: 1, false: arr.length - 1 }
  }
}
export const handleNext = (arr) => {
  return {
    type: CLICK_NEXT,
    payload: {true: 1, false: 0}
  }
}
export const handleCarousel = () => {
  return {
    type: FAVOTITES_LOADED
  }
}


// handlePrevious = (e) => {
//   console.log(this.state.modalPicture, 'modal')
//   this.setState({
//     modalPicture: (this.state.modalPicture.id > 1) ? {id: this.state.modalPicture.id - 1} : {id: this.state.modalPicture.id = this.state.pictures.length}
//   })
//   e.stopPropagation()
//   console.log(this.state.modalPicture.id, "new")
// }