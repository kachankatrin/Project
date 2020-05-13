import React from 'react';
import { GetSingleItem } from './productCharacteristics';

function Ingredients(props) {
  const newIngredAnalysis = props.product.ingredients_analysis_tags
    ? props.product.ingredients_analysis_tags.filter(item => !item.includes('unknown'))
    : null;

  return (
    <ul>
      <h2>ingredients</h2>
      {props.product.ingredients_text && props.product.ingredients_text.length
        ? <GetSingleItem
          array={props.product.ingredients_text.split(',')}
          name='Ingredients'
        />
        : null
      }
      {props.product.allergens_tags.length
        ? <GetSingleItem
          array={props.product.allergens_tags}
          name='Allergens'
        />
        : null
      }
      {newIngredAnalysis
        ? <GetSingleItem
          array={newIngredAnalysis}
          name='Ingredients analysis'
        />
        : null
      }
      {props.product.traces_tags && props.product.traces_tags.lrength
        ? <GetSingleItem
          array={props.product.traces_tags}
          name='Traces'
        />
        : null
      }
      {props.product.additives_original_tags.length
        ? <GetSingleItem
          array={props.product.additives_original_tags}
          name='Additives'
        />
        : null
      }
      {props.product.ingredients_from_palm_oil_tags.length
        ? <GetSingleItem
          array={props.product.ingredients_from_palm_oil_tags}
          name='Ingredients from palm oil'
        />
        : null
      }
    </ul>
  )
}

export default Ingredients;