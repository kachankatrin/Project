import React from 'react';
import {Route, Switch,Link, NavLink} from 'react-router-dom';
import SearchCriterias from './containers/Criterias';
// import Main from './containers/Main';
import { connect } from 'react-redux';
import Results from './containers/Results'
import Nav from './components/Nav';
import './App.scss';
import {handleClearState, handleDarkMode} from './store/actions/SomeAction';
import {initStore} from './store/reducers/SomeReducer'

class App extends React.Component {
    render() {
      console.log(window.document.links, 'windowwwww')
  return (
    <div>
      <Nav>
        <NavLink activeClassName="active"        
        to='/search' className='naviItem'  onClick={() => this.props.handleClearState(initStore)}>Search Criterias</NavLink>
        <NavLink activeClassName="active" className='naviItem' to='/results'>Results</NavLink>
        <div>
            <input type="checkbox" onChange={this.props.handleDarkMode} className="toggle toggleNavi"></input>
            <label htmlFor='toggle'><span className="naviItem">Change Mode</span></label>
        </div>
      </Nav>
      <Switch>
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
const mapDispatchToProps = {
  handleClearState,
  handleDarkMode
}
export default connect(null, mapDispatchToProps)(App);