import React from 'react';
import { nova_groups, nutriscore } from '../utils';
import SmallInfo from '../components/SmallInfo';
import Ingredients from '../components/Ingredients';

function Modal(props) {
  const nutrimentLevelsKeys = Object.keys(props.products.nutrient_levels)
  return (
    <div className={'modal-container ' + props.className}>
      <div className='close-modal'>
        <i className="fas fa-times" onClick={props.handleModalOpen}></i>
      </div>
      <span style={props.style} className='button prev' onClick={props.handlePrevious}>
        <i class="fas fa-chevron-left"></i>
      </span>

      <div className="modal1" id={props.products.id}>
        <h1>{props.product}</h1>
        <h2>all about product</h2>
        <div className='modal-info flex'>
          <div>
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
        <div className='nutri-score-nova flex'>
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
            : null
          }

        </div>
      </div>
      <span style={props.style} className='button next' onClick={props.handleNext}><i className="fas fa-chevron-right"></i></span>
    </div>
  )
}
export default Modal;
