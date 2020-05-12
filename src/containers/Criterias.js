import React from 'react';
import '../App.scss';
import { 
  fetchOOF, 
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

class SearchCriterias extends React.Component {
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
        <form>
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
            <ResButton
              fetchOOF={this.props.fetchOOF}
              search={this.props.mainState.search}
              products={this.props.mainState.products}
              tagtype={this.props.mainState.tagtype}
              tagContains={this.props.mainState.tagContains}
              tag={this.props.mainState.tag}
              tagtype1={this.props.mainState.tagtype1}
              tagContains1={this.props.mainState.tagContains1}
              tag1={this.props.mainState.tag1}
              additives={this.props.mainState.additives}
              ingPalmOil={this.props.mainState.ingPalmOil}
              ingMayBePalmOil={this.props.mainState.ingMayBePalmOil}
              ingPalmOilORMayBePalmOil={this.props.mainState.ingPalmOilORMayBePalmOil}
              nutriment={this.props.mainState.nutriment}
              comparement={this.props.mainState.comparement}
              nutrimentValue={this.props.mainState.nutrimentValue}
              energyUnit={this.props.mainState.energyUnit}
              nutriment1={this.props.mainState.nutriment1}
              comparement1={this.props.mainState.comparement1}
              nutrimentValue1={this.props.mainState.nutrimentValue1}
              energyUnit1={this.props.mainState.energyUnit1}
            />
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
                <ResButton
                  fetchOOF={this.props.fetchOOF}
                  search={this.props.mainState.search}
                  products={this.props.mainState.products}
                  tagtype={this.props.mainState.tagtype}
                  tagContains={this.props.mainState.tagContains}
                  tag={this.props.mainState.tag}
                  tagtype1={this.props.mainState.tagtype1}
                  tagContains1={this.props.mainState.tagContains1}
                  tag1={this.props.mainState.tag1}
                  additives={this.props.mainState.additives}
                  ingPalmOil={this.props.mainState.ingPalmOil}
                  ingMayBePalmOil={this.props.mainState.ingMayBePalmOil}
                  ingPalmOilORMayBePalmOil={this.props.mainState.ingPalmOilORMayBePalmOil}
                  nutriment={this.props.mainState.nutriment}
                  comparement={this.props.mainState.comparement}
                  nutrimentValue={this.props.mainState.nutrimentValue}
                  energyUnit={this.props.mainState.energyUnit}
                  nutriment1={this.props.mainState.nutriment1}
                  comparement1={this.props.mainState.comparement1}
                  nutrimentValue1={this.props.mainState.nutrimentValue1}
                  energyUnit1={this.props.mainState.energyUnit1}
                />
              </div>
            : null}
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
  fetchOOF,
  handleInput,
  handleSelect,
  handleToggle,
  handleRadio,
  handleDarkMode,
  handlemoreCriteriasOpen,
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchCriterias);