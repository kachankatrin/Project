import React from 'react'
import { GetSingleItem, GetSingleItemWithoutLang } from './productCharacteristics'

function Ingredients(props) {
  const newIngredAnalysis = props.products.ingredients_analysis_tags ? props.products.ingredients_analysis_tags.filter(item => !item.includes('unknown')) : null;

  return(
    <ul>
            <h2>ingredients</h2>
              {props.products.ingredients_text && props.products.ingredients_text.length ? <GetSingleItem array={props.products.ingredients_text.split(',')} name='Ingredients' /> : null}
              {props.products.allergens_tags.length ? <GetSingleItem array={props.products.allergens_tags} name='Allergens' /> : null}
              {newIngredAnalysis ? <GetSingleItem array={newIngredAnalysis} name='Ingredients analysis' /> : null}
              {props.products.traces_tags && props.products.traces_tags.lrength ? <GetSingleItem array={props.products.traces_tags} name='Traces' /> : null}
              {props.products.additives_original_tags.length ? <GetSingleItem array={props.products.additives_original_tags} name='Additives' /> : null}
              {props.products.ingredients_from_palm_oil_tags.length ? <GetSingleItem array={props.products.ingredients_from_palm_oil_tags} name='Ingredients from palm oil' /> : null}
            </ul>
  )
}

export default Ingredients;