import React from 'react';
import {Route, Switch,Link} from 'react-router-dom';
import SearchCriterias from './containers/Criterias';
import Main from './containers/Main';
import { connect } from 'react-redux';
import Results from './containers/Results'
import Nav from './components/Nav';
import './App.scss';
import {handleClearState, handleDarkMode} from './store/actions/SomeAction';
import {initStore} from './store/reducers/SomeReducer'

class App extends React.Component {
  state = {
  }
    render() {
  return (
    <div>
      <Nav>
        <Link className="naviItem" to='/'>Main</Link>
        <Link className="naviItem" to='/search' onClick={() => this.props.handleClearState(initStore)}>Search Criterias</Link>
        <Link className="naviItem" to='/results'>Results</Link>
        <div>
            <input type="checkbox" onChange={this.props.handleDarkMode} className="toggle toggleNavi"></input>
            <label htmlFor='toggle'><span className="naviItem">Change Mode</span></label>
        </div>
      </Nav>
      <Switch>
      <Route path='/' exact component={Main}></Route>
      <Route path='/search' component={() => 
        <SearchCriterias/>
      }></Route>
      <Route path='/results' component={() => 
        <Results/>
      }></Route>
      
      </Switch>
    </div>
  );
  }
}
// const mapStateToProps = (state) => {
//   return{
//     staff: initStore
//   }
// }
const mapDispatchToProps = {
  handleClearState,
  handleDarkMode
}
export default connect(null, mapDispatchToProps)(App);