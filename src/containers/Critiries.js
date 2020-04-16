import React from 'react';
import '../App.css';
import {fetchOOF, handleInput, emptyInput} from '../store/actions/SomeAction';
import { connect } from 'react-redux';
// import {api} from '../utils';
// import {Route, Switch,Link} from 'react-router-dom';
// import CreatePages from '../components/pages';
// import Nav from '../components/Nav';
// import Results from '../containers/Results'
import ResButton from '../components/button'
// const url = 'https://world.openfoodfacts.org'
class SearchCritiries extends React.Component {
  state = {
    // search: '',
    // products: [],
    // totalPages: 0,
    // currentPage: 1,
    query: ''
  }
  // componentDidMount() {
  //   this.fetchOOF()
  // }
//   fetchOOF = async (search, page) => {
//     console.log(page, 'old')
//     const query = search ? `${search}&page=${page}` : '';
//     const data = await fetch(`${api}${query}`, {
//       method: 'GET',
//       mode: 'cors',
//       headers: {
//         'Content-Type': "application/x-www-form-urlencoded",
//         'User-Agent': 'HealthyFoodChoices - Android - Version 1.0 - http://localhost:3002/'
//       },
//       redirect: 'follow'
//     })
//     console.log(data)
//     const json = await data.json();
//     this.setState({
//       products: json.products,
//       totalPages: Math.ceil(json.count / json.page_size)
//     })
//     console.log(page, 'new')
//     console.log(json, 'json')
    
//     // console.log(this.state.pageSize)
//  }

// handleDataSearch =() => {
//   this.fetchOOF(this.state.search, 1)
// }
// handleSwitch = () => {
//   return (<Switch><Route path='/results' component={Results}></Route></Switch>)
// }
// handlePagination = (i) => {
//   // this.fetchOOF(this.state.search)
//   // if (e.target.id === "prev" && this.state.currentPage > 1) {
//   //   this.setState({
//   //     currentPage: this.state.currentPage - 1
//   //   })
//   // } 
//   // if (e.target.id === "next" && this.state.currentPage < this.state.totalPages) {
//   //   this.setState({
//   //     currentPage: this.state.currentPage + 1
//   //   })
//   // } 
//   // if (!e.target.id) {
//   //   console.log("JjksHKJDHLFKJHSDKFKJD", e.target.getAttribute("value"));
//   //   this.setState({
//   //     currentPage: parseInt(e.target.getAttribute("value"))
//   //   })
//   // }
//   this.setState({
//     currentPage: i 
//   })
//   console.log(this.state.currentPage, 'in handler')
//   this.fetchOOF(this.state.search, i)
// }
// handleInput = (e) => {
//   this.setState({
//     search: e.target.value
// })
// }
 render() {
   return (
     <div>
      <input type='search' id='search' onChange={this.props.handleInput} value={this.props.staff.search}/>
      <ResButton 
        fetchOOF={this.props.fetchOOF} 
        emptyInput={this.props.emptyInput}
        search={this.props.staff.search} 
        products={this.props.staff.products}
      />
    
     </div>
   );
 }
}
const mapStateToProps = (state) => {
  return{
    staff: state.staff
  }
}
const mapDispatchToProps = {
  fetchOOF,
  handleInput,
  emptyInput
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchCritiries);



// ${url}/api/v0/product/04963406
// `${url}/api/v0/product/04963406`

// {this.state.products.map(item => <div>{item.product_name_en ? item.product_name_en : item.product_name_fr}</div>)}
//       <div>
//         <ul>
//           <CreatePages allPages={this.state.totalPages} 
//                        currentPage={this.state.currentPage} 
//                        handlePagination={this.handlePagination} />
//         </ul>
//       </div>