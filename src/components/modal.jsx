import React from 'react';
import { nova_groups, nutriscore } from '../utils';
import SmallInfo from '../components/SmallInfo';
import Ingredients from '../components/Ingredients';

function Modal(props) {
  const nutrimentLevelsKeys = Object.keys(props.product.nutrient_levels);
  return (
    <div className={'modal-container ' + props.className}>
      <div className='close-modal'>
        <i className="fas fa-times" onClick={props.handleModalOpen}></i>
      </div>
      <span style={props.style} className='button prev' onClick={props.handlePrevious}>
        <i class="fas fa-chevron-left"></i>
      </span>
      <div className="modal1" id={props.product.id}>
        <h1>{props.productName}</h1>
        <h2>all about product</h2>
        <div className='modal-info flex'>
          <div>
            <SmallInfo product={props.product} />
            {props.product.ingredients_analysis_tags
              ? <Ingredients product={props.product} />
              : null
            }
          </div>
          <picture>
            <source media="(max-width: 450px)" srcset={props.product && props.product.image_front_url} />
            <source media="(max-width: 800px)" srcset={props.product && props.product.image_front_url} />
            <source media="(max-width: 1200px)" srcset={props.product && props.product.image_front_url} />
            <img src={props.product && props.product.image_front_url} />
          </picture>
        </div>
        <div className='nutri-score-nova flex'>
          {props.product.nova_group
            ? <div className='nova'>
                <h2>nova group</h2>
                <img src={props.product.nova_group && nova_groups[props.product.nova_group][0]} />
                <h4>{props.product.nova_group && nova_groups[props.product.nova_group][1]}</h4>
              </div>
            : null
          }
          {Object.keys(props.product.nutrient_levels).length || props.product.nutriscore_grade
            ? <div className='nutrifacts'>
                <h2>nutrition facts</h2>
                <div className="nutrition flex">
                  {props.product.nutriscore_grade
                    ? <div>
                        <h4>NutriScore nutrition grade</h4>
                        <img src={props.product.nutriscore_grade && nutriscore[props.product.nutriscore_grade]} />
                      </div>
                    : null
                  }
                  {Object.keys(props.product.nutrient_levels).length
                    ? <div>
                        <h4>Nutrient levels for 100 g </h4>
                        <ul className="nutrilevels">
                          {nutrimentLevelsKeys.map(item => 
                            <li>
                              <span className={'circle ' + props.product.nutrient_levels[item]}></span> 
                              {props.product.nutriments[item]} 
                              {props.product.nutriments[`${item}_unit`]} {item} in {props.product.nutrient_levels[item]} quantity </li>)}
                        </ul>
                      </div>
                    : null
                  }
              </div>
            </div>
            : null
          }
        </div>
      </div>
      <span 
        style={props.style} 
        className='button next' 
        onClick={props.handleNext}
      >
        <i className="fas fa-chevron-right"></i>
      </span>
    </div>
  )
}
export default Modal;
