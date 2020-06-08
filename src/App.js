import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import SearchCriterias from './containers/Criterias';
import Results from './containers/Results';
import Favorites from './containers/Favorites'
import Nav from './components/Nav';
import { connect } from 'react-redux';
import 'rodal/lib/rodal.css';
import './App.scss';
import { handleClearState, handleDarkMode, handleMenuOpen } from './store/actions/Actions';
import { initStore } from './store/reducers/Reducers';
class App extends React.Component {
  render() {
    return (
      <div>
        <Nav handleMenuOpen={this.props.handleMenuOpen} isMenuOpen={this.props.navi.isMenuOpen}>
          <NavLink 
            activeClassName="active"
            to='/search' 
            className='naviItem' 
            onClick={() => this.props.handleClearState(initStore)}>
              Search Criterias
          </NavLink>
          <NavLink 
            activeClassName="active" 
            className='naviItem' 
            to='/results'>
              Results
          </NavLink>
          <NavLink 
            activeClassName="active" 
            className='naviItem' 
            to='/favorites'
          >
              Favorites
          </NavLink>
          <div>
            <input 
              type="checkbox" 
              onChange={this.props.handleDarkMode} 
              className="toggle toggleNavi">
            </input>
            <label htmlFor='toggle'>
              <span className="naviItem">Change Mode</span>
            </label>
          </div>
        </Nav>
        <Switch>
          <Route path='/' exact component={ () => <SearchCriterias /> } />
          <Route path='/search' component={ () => <SearchCriterias /> }></Route>
          <Route path='/results' component={ () => <Results /> }></Route>
          <Route path='/favorites' component={ () => <Favorites /> }></Route>
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    navi: state.navi
  }
}
const mapDispatchToProps = {
  handleClearState,
  handleDarkMode,
  handleMenuOpen
}
export default connect(mapStateToProps, mapDispatchToProps)(App);