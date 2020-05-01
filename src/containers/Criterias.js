import React from 'react';
import '../App.scss';
import { fetchOOF, handleInput, handleSelect, handleToggle, handleRadio, handleDarkMode, handleMoreCriteriasOpen } from '../store/actions/SomeAction';
import { connect } from 'react-redux';
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
          <a href='#' onClick={this.props.handleMoreCriteriasOpen}>Advanced search</a>
          </div>
          {this.props.staff.isMoreCriteriasOpen ? 
            <MoreCriterias darkClass={darkClass} search={this.props.staff} handleSelect={this.props.handleSelect} handleInput={this.props.handleInput} handleToggle={this.props.handleToggle} handleRadio={this.props.handleRadio}/>
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
  handleMoreCriteriasOpen
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchCriterias);


// <div className='moreCriterias'>
// <div>
//   <h2>Critiria</h2>

//   <Select value={this.props.staff.tagtype} options={criterion} id='select1' handleChange={(e) => this.props.handleSelect(e, 'tagtype')} />
//   <Toggle id='toggle1' handleChange={(e) => this.props.handleToggle(e, 'tagContains')} />
//   <input type='search' id="critiriaSearch1" onChange={(e) => this.props.handleInput(e, 'tag')} value={this.props.staff.tag} placeholder='value' />

//   <Select id='select2'
//     value={this.props.staff.tagtype1}
//     options={criterion}
//     handleChange={(e) => this.props.handleSelect(e, 'tagtype1')}
//   />
//   <Toggle id='toggle2' handleChange={(e) => this.props.handleToggle(e, 'tagContains1')} />
//   <input type='search' id="critiriaSearch2" onChange={(e) => this.props.handleInput(e, 'tag1')} value={this.props.staff.tag1} placeholder='value' />
// </div>
// <div>
//   <h2>Ingredients</h2>
//   <RadioButtons name='Additives' values={[
//     { value: 'with', label: 'With', checked: this.props.staff.additives === 'with' },
//     { value: 'without', label: 'Without', checked: this.props.staff.additives === 'without' },
//     { value: 'indifferent', label: 'Indifferent', checked: this.props.staff.additives === 'indifferent' }
//   ]} handleChange={(e) => this.props.handleRadio(e, 'additives')}
//   />


//   <RadioButtons name='Ingredients from palm oil' values={[{ value: 'with', label: 'With', checked: this.props.staff.ingPalmOil === 'with' },
//   { value: 'without', label: 'Without', checked: this.props.staff.ingPalmOil === 'without' },
//   { value: 'indifferent', label: 'Indifferent', checked: this.props.staff.ingPalmOil === 'indifferent' }
//   ]} handleChange={(e) => this.props.handleRadio(e, "ingPalmOil")}
//   />




//   <RadioButtons name='Ingredients that may be from palm oil' values={[{ value: 'with', label: 'With', checked: this.props.staff.ingMayBePalmOil === 'with' },
//   { value: 'without', label: 'Without', checked: this.props.staff.ingMayBePalmOil === 'without' },
//   { value: 'indifferent', label: 'Indifferent', checked: this.props.staff.ingMayBePalmOil === 'indifferent' }
//   ]} handleChange={(e) => this.props.handleRadio(e, 'ingMayBePalmOil')} />
//   <RadioButtons name='Ingredients from or that may be from palm oil' values={[{ value: 'with', label: 'With', checked: this.props.staff.ingPalmOilORMayBePalmOil === 'with' },
//   { value: 'without', label: 'Without', checked: this.props.staff.ingPalmOilORMayBePalmOil === 'without' },
//   { value: 'indifferent', label: 'Indifferent', checked: this.props.staff.ingPalmOilORMayBePalmOil === 'indifferent' }
//   ]} handleChange={(e) => this.props.handleRadio(e, 'ingPalmOilORMayBePalmOil')} />
// </div>
// <div>
//   <h2>Nutriments</h2>
//   <Select value={this.props.staff.nutriment} options={nutriments} handleChange={(e) => this.props.handleSelect(e, 'nutriment', 'energyUnit')} />
//   <Select value={this.props.staff.comparement} options={comparement} handleChange={(e) => this.props.handleSelect(e, 'comparement')} />
//   <input type='search' onChange={(e) => this.props.handleInput(e, 'nutrimentValue')} value={this.props.staff.nutrimentValue} />
//   <Select value={this.props.staff.nutriment1} options={nutriments} handleChange={(e) => this.props.handleSelect(e, 'nutriment1', 'energyUnit1')} />
//   <Select value={this.props.staff.comparement1} options={comparement} handleChange={(e) => this.props.handleSelect(e, 'comparement1')} />
//   <input type='search' onChange={(e) => this.props.handleInput(e, 'nutrimentValue1')} value={this.props.staff.nutrimentValue1} />
// </div>
// </div> 
