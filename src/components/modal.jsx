import React from 'react';
// import { GetSingleItem, GetSingleItemWithoutLang } from './productCharacteristics'
import { nova_groups, nutriscore } from '../utils';
import SmallInfo from '../components/SmallInfo';
import Ingredients from '../components/Ingredients';
function Modal(props) {
  console.log("pppp", props)
  console.log("pppp", props.products.id, 'products')
  const nutrimentLevelsKeys = Object.keys(props.products.nutrient_levels)
  console.log(nutrimentLevelsKeys, props.products.nutrient_levels)
  // const TextForButton = !props.isFavoriteProduct ? <i class="far fa-heart"></i> : <i class="fas fa-heart"></i>;
  // const clickHandler = !props.isFavoriteProduct ? props.addProduct : props.removeProduct;
  console.log(props.isFavoriteProduct)
  // console.log(props.children)
  return (
    <div className={'modalcont ' + props.className}>
      <div className='close-modal'>
        <i className="fas fa-times" onClick={props.handleModalOpen} ></i>
      </div>
      <button style={props.style} className='button prev' onClick={props.handlePrevious}>Previous</button>

      <div className="modal1" id={props.products.id}>
        <h1>{props.product}</h1>
        <h2>all about product</h2>
        <div className='modalInfo flex'>
          <div className>
            <SmallInfo products={props.products} />
            {props.products.ingredients_analysis_tags
              ? <Ingredients products={props.products} />
              : null
            }
          </div>

          <picture>
            <source media="(max-width: 450px)" srcset={props.products && props.products.image_front_url} />
            <source media="(max-width: 800px)" srcset={props.product && props.products.image_front_url} />
            <source media="(max-width: 1200px)" srcset={props.product && props.products.image_front_url} />
            <img src={props.product && props.products.image_front_url} />
          </picture>
        </div>
        <div className='nScoreNova flex'>
          {props.products.nova_group
            ? <div className='nova'>
              <h2>nova group</h2>
              <img src={props.products.nova_group && nova_groups[props.products.nova_group][0]} />
              <h4>{props.products.nova_group && nova_groups[props.products.nova_group][1]}</h4>
            </div>
            : null
          }
          {Object.keys(props.products.nutrient_levels).length || props.products.nutriscore_grade
            ? <div className='nutrifacts'>
              <h2>nutrition facts</h2>
              <div className="nutrition flex">
                {props.products.nutriscore_grade
                  ? <div>
                    <h4>NutriScore nutrition grade</h4>
                    <img src={props.products.nutriscore_grade && nutriscore[props.products.nutriscore_grade]} />
                  </div>
                  : null
                }
                {Object.keys(props.products.nutrient_levels).length
                  ? <div>
                    <h4>Nutrient levels for 100 g </h4>
                    <ul className="nutrilevels">
                      {nutrimentLevelsKeys.map(item => <li><span className={'circle ' + props.products.nutrient_levels[item]}></span> {props.products.nutriments[item]} {props.products.nutriments[`${item}_unit`]} {item} in {props.products.nutrient_levels[item]} quantity </li>)}
                    </ul>
                  </div>
                  : null}
              </div>
            </div>
            : null}

        </div>
      </div>
      <button style={props.style} className='button next' onClick={props.handleNext}>Next</button>

    </div>
  )
}
export default Modal;
