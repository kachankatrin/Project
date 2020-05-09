import React from 'react';
import '../App.scss';
import { fetchOOF, handleInput, handleSelect, handleToggle, handleRadio, handleDarkMode, handleMoreCriteriasOpen } from '../store/actions/SomeAction';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import ResButton from '../components/button';
// import Select from '../components/SelectComponent';
// import Toggle from '../components/ToggleComponent';
// import RadioButtons from '../components/RadioButtonsGroup'
// import { criterion, nutriments, comparement } from '../utils';
import MoreCriterias from '../components/moreCriterias';
class SearchCriterias extends React.Component {
  state = {
  }
  render() {
    console.log(React.Children, 'childrennnnnnnnnnnnnnnnnnnnnnnnnn')

    console.log(window.document.links)
    console.log(window.location.pathname)
    const darkClass = this.props.staff.isDarkMode ? 'dark' : ''
    return (
      <div className={'page search ' + darkClass}>
      <h1><span>F</span><span>o</span><span>o</span><span>d</span><span>l</span><span>e</span></h1>
        <form>
          <div className={'inputBg ' + darkClass}>
          <input incremental={true} results={5} type='search' id='mainSearch' onChange={(e) => this.props.handleInput(e, 'search')} value={this.props.staff.search} placeholder='Search...' />
          </div>
          <div className='searchLinkBtn'>
          <ResButton
            fetchOOF={this.props.fetchOOF}
            search={this.props.staff.search}
            products={this.props.staff.products}
            tagtype={this.props.staff.tagtype}
            tagContains={this.props.staff.tagContains}
            tag={this.props.staff.tag}
            tagtype1={this.props.staff.tagtype1}
            tagContains1={this.props.staff.tagContains1}
            tag1={this.props.staff.tag1}
            additives={this.props.staff.additives}
            ingPalmOil={this.props.staff.ingPalmOil}
            ingMayBePalmOil={this.props.staff.ingMayBePalmOil}
            ingPalmOilORMayBePalmOil={this.props.staff.ingPalmOilORMayBePalmOil}
            nutriment={this.props.staff.nutriment}
            comparement={this.props.staff.comparement}
            nutrimentValue={this.props.staff.nutrimentValue}
            energyUnit={this.props.staff.energyUnit}
            nutriment1={this.props.staff.nutriment1}
            comparement1={this.props.staff.comparement1}
            nutrimentValue1={this.props.staff.nutrimentValue1}
            energyUnit1={this.props.staff.energyUnit1}
          />
          <Link to='/search/more' onClick={this.props.handleMoreCriteriasOpen}>Advanced search</Link>
          </div>
          {this.props.staff.isMoreCriteriasOpen ? 
           <div className='advanced'>
            <MoreCriterias darkClass={darkClass} search={this.props.staff} handleSelect={this.props.handleSelect} handleInput={this.props.handleInput} handleToggle={this.props.handleToggle} handleRadio={this.props.handleRadio}/>
            <ResButton
            fetchOOF={this.props.fetchOOF}
            search={this.props.staff.search}
            products={this.props.staff.products}
            tagtype={this.props.staff.tagtype}
            tagContains={this.props.staff.tagContains}
            tag={this.props.staff.tag}
            tagtype1={this.props.staff.tagtype1}
            tagContains1={this.props.staff.tagContains1}
            tag1={this.props.staff.tag1}
            additives={this.props.staff.additives}
            ingPalmOil={this.props.staff.ingPalmOil}
            ingMayBePalmOil={this.props.staff.ingMayBePalmOil}
            ingPalmOilORMayBePalmOil={this.props.staff.ingPalmOilORMayBePalmOil}
            nutriment={this.props.staff.nutriment}
            comparement={this.props.staff.comparement}
            nutrimentValue={this.props.staff.nutrimentValue}
            energyUnit={this.props.staff.energyUnit}
            nutriment1={this.props.staff.nutriment1}
            comparement1={this.props.staff.comparement1}
            nutrimentValue1={this.props.staff.nutrimentValue1}
            energyUnit1={this.props.staff.energyUnit1}
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
    staff: state.staff
  }
}
const mapDispatchToProps = {
  fetchOOF,
  handleInput,
  handleSelect,
  handleToggle,
  handleRadio,
  handleDarkMode,
  handleMoreCriteriasOpen,
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchCriterias);