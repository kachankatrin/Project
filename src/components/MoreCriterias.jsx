import React from 'react';
import { criterion, nutriments, comparements, RemoveUnderscore } from '../utils';
import Select from './SelectComponent';
import Toggle from './ToggleComponent';
import RadioButtons from './RadioButtonsGroup'
function MoreCriterias(props) {
  const { search: { tagtype, tagContains, tagContains1, tag, tagtype1, tag1, additives, ingPalmOil, ingMayBePalmOil, ingPalmOilORMayBePalmOil, nutriment, comparement, nutrimentValue, nutriment1, comparement1, nutrimentValue1 }, darkClass } = props;
  return (
    <div className='more-criterias'>
      <div className="criterias-nutriments">
        <div>
          <h2>Criterion</h2>
          <div className={'inputBg select-margin ' + darkClass}>
            <Select value={tagtype} options={criterion} handleChange={(e) => props.handleSelect(e, 'tagtype')} />
          </div>
          <Toggle label={RemoveUnderscore(tagContains)} handleChange={(e) => props.handleToggle(e, 'tagContains')} />
          <div className={'inputBg ' + darkClass}>
            <input type='search' id="CriteriaSearch1" onChange={(e) => props.handleInput(e, 'tag')} value={tag} placeholder='value' />
          </div>
          <div className={'inputBg select-margin ' + darkClass}>
            <Select value={tagtype1}
              options={criterion}
              handleChange={(e) => props.handleSelect(e, 'tagtype1')}
            />
          </div>
          <Toggle label={RemoveUnderscore(tagContains1)} handleChange={(e) => props.handleToggle(e, 'tagContains1')} />
          <div className={'inputBg ' + darkClass}>
            <input type='search' id="CriteriaSearch2" onChange={(e) => props.handleInput(e, 'tag1')} value={tag1} placeholder='value' />
          </div>
        </div>
        <div className='nutriments'>
          <h2>Nutriments</h2>
          <div className={'inputBg select-margin ' + darkClass}>
            <Select value={nutriment} options={nutriments} handleChange={(e) => props.handleSelect(e, 'nutriment', 'energyUnit')} />
          </div>
          <div className='flex'>
            <div className={'inputBg ' + darkClass}>
              <Select value={comparement} options={comparements} handleChange={(e) => props.handleSelect(e, 'comparement')} />
            </div>
            <div className={'inputBg ' + darkClass}>
              <input type='search' placeholder='qty' onChange={(e) => props.handleInput(e, 'nutrimentValue')} value={nutrimentValue} />
            </div>
          </div>
          <div className={'inputBg select-margin ' + darkClass}>
            <Select value={nutriment1} options={nutriments} handleChange={(e) => props.handleSelect(e, 'nutriment1', 'energyUnit1')} />
          </div>
          <div className='flex start'>
            <div className={'inputBg ' + darkClass}>
              <Select value={comparement1} options={comparements} handleChange={(e) => props.handleSelect(e, 'comparement1')} />
            </div>
            <div className={'inputBg ' + darkClass}>
              <input type='search' placeholder='qty' onChange={(e) => props.handleInput(e, 'nutrimentValue1')} value={nutrimentValue1} />
            </div>
          </div>
        </div>
      </div>
      <div className='Ingredients'>
        <h2>Ingredients</h2>
        <RadioButtons darkClass={darkClass} name='Additives' values={[
          { value: 'with', label: 'With', checked: additives === 'with' },
          { value: 'without', label: 'Without', checked: additives === 'without' },
          { value: 'indifferent', label: 'Indifferent', checked: additives === 'indifferent' }
        ]} handleChange={(e) => props.handleRadio(e, 'additives')}
        />
        <RadioButtons darkClass={darkClass} name='Ingredients from palm oil' values={[{ value: 'with', label: 'With', checked: ingPalmOil === 'with' },
        { value: 'without', label: 'Without', checked: ingPalmOil === 'without' },
        { value: 'indifferent', label: 'Indifferent', checked: ingPalmOil === 'indifferent' }
        ]} handleChange={(e) => props.handleRadio(e, "ingPalmOil")}
        />
        <RadioButtons darkClass={darkClass} name='Ingredients that may be from palm oil' values={[{ value: 'with', label: 'With', checked: ingMayBePalmOil === 'with' },
        { value: 'without', label: 'Without', checked: ingMayBePalmOil === 'without' },
        { value: 'indifferent', label: 'Indifferent', checked: ingMayBePalmOil === 'indifferent' }
        ]} handleChange={(e) => props.handleRadio(e, 'ingMayBePalmOil')} />
        <RadioButtons darkClass={darkClass} name='Ingredients from or that may be from palm oil' values={[{ value: 'with', label: 'With', checked: ingPalmOilORMayBePalmOil === 'with' },
        { value: 'without', label: 'Without', checked: ingPalmOilORMayBePalmOil === 'without' },
        { value: 'indifferent', label: 'Indifferent', checked: ingPalmOilORMayBePalmOil === 'indifferent' }
        ]} handleChange={(e) => props.handleRadio(e, 'ingPalmOilORMayBePalmOil')} />
      </div>

    </div>
  )
}
export default MoreCriterias;