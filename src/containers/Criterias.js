import React from 'react';
import '../App.scss';
import { 
  fetchOFF, 
  handleInput, 
  handleSelect, 
  handleToggle, 
  handleRadio, 
  handleDarkMode, 
  handlemoreCriteriasOpen 
} from '../store/actions/Actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ResButton from '../components/button';
import MoreCriterias from '../components/MoreCriterias';
import { withRouter } from "react-router-dom";


class SearchCriterias extends React.Component {
  search = () => {
    this.props.fetchOFF(
      this.props.mainState.search, 
      1,
      this.props.mainState.tagtype,
      this.props.mainState.tagContains,
      this.props.mainState.tag,
      this.props.mainState.tagtype1,
      this.props.mainState.tagContains1,
      this.props.mainState.tag1,
      this.props.mainState.additives,
      this.props.mainState.ingPalmOil,
      this.props.mainState.ingMayBePalmOil,
      this.props.mainState.ingPalmOilORMayBePalmOil,
      this.props.mainState.nutriment,
      this.props.mainState.comparement,
      this.props.mainState.nutrimentValue,
      this.props.mainState.energyUnit,
      this.props.mainState.nutriment1,
      this.props.mainState.comparement1,
      this.props.mainState.nutrimentValue1,
      this.props.mainState.energyUnit1
    )
    this.props.history.push("/results");
  }
  keyPressed = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.search()
    }
  }
  render() {
    const darkClass = this.props.mainState.isDarkMode ? 'dark' : '';
    return (
      <div className={'page search ' + darkClass}>
        <h1>
          <span>F</span>
          <span>o</span>
          <span>o</span>
          <span>d</span>
          <span>l</span>
          <span>e</span>
        </h1>
        <form onKeyPress={this.keyPressed}>
          <div className={'input-bg ' + darkClass}>
            <input
              incremental={true}
              results={5}
              type='search'
              onChange={(e) => this.props.handleInput(e, 'search')}
              value={this.props.mainState.search}
              placeholder='Search...'
            />
          </div>
          <div className='searchLinkBtn'>
            <ResButton handleClick={this.search} />
            <Link to='/search/more' onClick={this.props.handlemoreCriteriasOpen}>Advanced search</Link>
          </div>
          {this.props.mainState.ismoreCriteriasOpen
            ? <div className='advanced'>
                <MoreCriterias 
                  darkClass={darkClass} 
                  search={this.props.mainState} 
                  handleSelect={this.props.handleSelect} 
                  handleInput={this.props.handleInput} 
                  handleToggle={this.props.handleToggle} 
                  handleRadio={this.props.handleRadio} 
                />
                <ResButton handleClick={this.search} />
              </div>
            : null
          }
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    mainState: state.mainState
  }
}
const mapDispatchToProps = {
  fetchOFF,
  handleInput,
  handleSelect,
  handleToggle,
  handleRadio,
  handleDarkMode,
  handlemoreCriteriasOpen,
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SearchCriterias));