export const DATA_LOADED = 'DATA LOADED';
// export const ERROR_LOADING_DATA = 'ERROR LOADING DATA';
export const CHANGE_SEARCH = 'CHANGE_SEARCH';
export const EMPTY_INPUT_FIELD = 'EMPTY_INPUT_FIELD'

const api = `https://world.openfoodfacts.org/cgi/search.pl?search_simple=1&json=true&action=process&sort_by=unique_scans_n&page_size=20&search_terms=`

export const fetchOOF = (search, page) => {
  const query = search ? `${search}&page=${page}` : '';
  return async(dispatch) => {
  const data = await fetch(`${api}${query}`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': "application/x-www-form-urlencoded",
      'User-Agent': 'HealthyFoodChoices - Android - Version 1.0 - http://localhost:3002/'
    },
    redirect: 'follow'
  })
  console.log(query)
  console.log(data)
  const json = await data.json();
  const res = await dispatch({type: DATA_LOADED, payload: json})
  console.log(res)
  }
}

export const handleInput = (e) => {
  console.log(CHANGE_SEARCH, e)
  return {
    type: CHANGE_SEARCH,
    payload: e
  }
}

export const emptyInput = () => {
  console.log(EMPTY_INPUT_FIELD)
  return {
    type: EMPTY_INPUT_FIELD,
    payload: ''
  }
}










// fetchOOF = async (search, page) => {
  
  // const query = search ? `${search}&page=${page}` : '';
  // const data = await fetch(`${api}${query}`, {
  //   method: 'GET',
  //   mode: 'cors',
  //   headers: {
  //     'Content-Type': "application/x-www-form-urlencoded",
  //     'User-Agent': 'HealthyFoodChoices - Android - Version 1.0 - http://localhost:3002/'
  //   },
  //   redirect: 'follow'
  // })
  // console.log(data)
  // const json = await data.json();
  // const res = await dispatch({type: DATA_LOADED, payload: json})
  // this.setState({
  //   products: json.products,
  //   totalPages: Math.ceil(json.count / json.page_size)
  // })
  // console.log(page, 'new')
  // console.log(json, 'json')
  
  // console.log(this.state.pageSize)
// }