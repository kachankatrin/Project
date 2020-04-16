// import React from 'react';
// import './App.css';
// import {api} from './utils';
// import CreatePages from './components/pages'
// // const url = 'https://world.openfoodfacts.org'
// class App extends React.Component {
//   state = {
//     search: '',
//     products: [],
//     totalPages: 0,
//     currentPage: 1,
//     query: ''
//   }
//   // componentDidMount() {
//   //   this.fetchOOF()
//   // }
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
//  handleInput = (e) => {
//   this.setState({
//     search: e.target.value
// })
// }

// handleDataSearch =() => {
//   this.fetchOOF(this.state.search, 1)
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
//  render() {
//    return (
//      <div>
//       <input type='search' onChange={this.handleInput} value={this.state.search}/>
//       <button type='button' onClick={this.handleDataSearch}>search</button>
//       {this.state.products.map(item => <div>{item.product_name_en ? item.product_name_en : item.product_name_fr}</div>)}
//       <div>
//         <ul>
//           <CreatePages allPages={this.state.totalPages} 
//                        currentPage={this.state.currentPage} 
//                        handlePagination={this.handlePagination} />
//         </ul>
//       </div>
//      </div>
//    );
//  }
// }

// export default App;



// ${url}/api/v0/product/04963406
// `${url}/api/v0/product/04963406`

import React from 'react';
import {Route, Switch,Link} from 'react-router-dom';
import SearchCritiries from './containers/Critiries';
import Main from './containers/Main';
import Results from './containers/Results'
import Nav from './components/Nav';
// import {fetchOOF} from './store/actions/SomeAction';
// import { connect } from 'react-redux';
// import {api} from './utils';
import './App.css';

class App extends React.Component {
  state = {
    // products: [],
    // totalPages: 0,
    // search: '',
    // currentPage: 1,
  }
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
//  handleInput = (e) => {
//   this.setState({
//     search: e.target.value
// })
// }
// handlePagination = (i) => {
//   this.setState({
//     currentPage: i 
//   })
//   console.log(this.state.currentPage, 'in handler')
//   this.props.fetchOOF(this.state.search, i)
// }
  render() {
  return (
    <div>
      <Nav>
        <Link to='/'>Main</Link>
        <Link to='/search'>SearchCritiries</Link>
        <Link to='/results'>Results</Link>
      </Nav>
      <Switch>
      <Route path='/' exact component={Main}></Route>
      <Route path='/search' component={() => 
        <SearchCritiries 
          // search={this.state.search} 
          // handleInput={this.handleInput} 
          // products={this.state.products} 
          // totalPages={this.state.totalPages} 
          // fetchOOF={fetchOOF}
        />
      }></Route>
      <Route path='/results' component={() => 
        <Results 
          // currentPage={this.state.currentPage} 
          // handlePagination={this.handlePagination} 
          // search={this.state.search} 
          // products={this.state.products} 
          // totalPages={this.state.totalPages} 
          // fetchOOF={fetchOOF}
        />
      }></Route>
      
      </Switch>
    </div>
  );
  }
}
// const mapStateToProps = (state) => {
//   return{
//     staff: state.staff
//   }
// }
// const mapDispatchToProps = {
//   fetchOOF
// }
export default 
// connect(mapStateToProps, null)
App;