import {api, api1} from '../../utils'
export const DATA_LOADED = 'DATA LOADED';
export const CHANGE_SEARCH = 'CHANGE_SEARCH';
export const CHANGE_SELECT = 'CHANGE_SELECT';
export const CHANGE_TOGGLE= 'CHANGE_TOGGLE';
export const CHANGE_RADIO = 'CHANGE_RADIO';
export const CLEAR_STATE = 'CLEAR_STATE';
export const OPEN_MODAL = 'OPEN_MODAL';
export const DARK_MODE = 'DARK_MODE';
export const SELECT_MODAL = 'SELECT_MODAL';
export const OPEN_CRITERIAS = 'OPEN_CRITERIAS';
export const CHANGE_LOADER_STATUS = 'CHANGE_LOADER_STATUS'

export const fetchOOF = (search, page, tagtype, tagContains, tag, tagtype1, tagContains1, tag1, additives, ingPalmOil, ingMayBePalmOil, ingPalmOilORMayBePalmOil, nutriment, comparement, nutrimentValue,  energyUnit, nutriment1, comparement1, nutrimentValue1,  energyUnit1) => {
  const searchCritiria = `${search}&page=${page}&tagtype_0=${tagtype}&tag_contains_0=${tagContains}&tag_0=${tag}&tagtype_1=${tagtype1}&tag_contains_1=${tagContains1}&tag_1=${tag1}&additives=${additives}&ingredients_from_palm_oil=${ingPalmOil}&ingredients_that_may_be_from_palm_oil=${ingMayBePalmOil}&ingredients_from_or_that_may_be_from_palm_oil=${ingPalmOilORMayBePalmOil}&nutriment_0=${nutriment}&nutriment_energy_unit_0=${energyUnit}&nutriment_compare_0=${comparement}&nutriment_value_0=${nutrimentValue}&nutriment_1=${nutriment1}&nutriment_energy_unit_1=${energyUnit1}&nutriment_compare_1=${comparement1}&nutriment_value_1=${nutrimentValue1}`
  const query = search === null ? api1 : api;
  // const query = search ? `${search}&page=${page}&tagtype_0=${tagtype}&tag_contains_0=${tagContains}&tag_0=${tag}` : '';
  return async (dispatch) => {
    dispatch({type: CHANGE_LOADER_STATUS, payload: {show: true, text: 'Loading...'}})
    console.log("HERE OOF", api, searchCritiria)
  const data = await fetch(`${query}${searchCritiria}`, {
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
  const res = await dispatch({type: DATA_LOADED, payload: json})
  dispatch({type: CHANGE_LOADER_STATUS, payload: {show: false, text: 'enter valid search'}})
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
    payload: {value: e.target.value, key}
  }
}
export const handleSelect = (e, key, key1) => {
  console.log(CHANGE_SELECT, e)
  return {
    type: CHANGE_SELECT,
    payload: {value: e.target.value, key, key1}
  }
}
export const handleToggle = (e, key) => {
  
  return {
    type: CHANGE_TOGGLE,
    payload: {target: e.target, key}
  }
}
export const handleRadio = (e, key) => {
  return {
    type: CHANGE_RADIO,
    payload: {value: e.target.value, key}
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
export const handleMoreCriteriasOpen = (e) => {
  return {
    type: OPEN_CRITERIAS
  }
}

export const handleDarkMode =() => {
  return {
    type: DARK_MODE
  }
}

export const handleSelectModalProduct = (e) => {
  
  console.log(e, 'aaaaaaaaaaaaaaasssfgdfdgfdgdgfdgfdhgfdhfdhgffghfdgfdgfbfvhgfbcdbxgxgvxf')
  // e.stopPropagation()
  e.persist()
  // e.stopPropagation()
  return {
    type: SELECT_MODAL,
    payload: {value: e.currentTarget.textContent, id: e.currentTarget.id}
  }
}
