import React from 'react';
import { GetSingleItem } from './productCharacteristics';

function SmallInfo(props) {
  return (
    <ul>
      {props.product.quantity
        ? <li>
          <span className='infoName'>Quantity: </span>
          <span>{props.product.quantity}</span>
        </li>
        : null
      }
      {props.product.packaging
        ? <GetSingleItem array={props.product.packaging.split(',')} name='Packaging' />
        : null
      }
      {props.product.brands
        ? <GetSingleItem array={props.product.brands.split(',')} name='Brands' />
        : null
      }
      {props.product.categories
        ? <GetSingleItem array={props.product.categories.split(',')} name='Categories' />
        : null
      }
      {props.product.manufacturing_places
        ? <GetSingleItem array={props.product.manufacturing_places.split(',')} name='Manufacturing or processing places' />
        : null
      }
      {props.product.stores
        ? <GetSingleItem array={props.product.stores.split(',')} name='Stores' />
        : null
      }
      {props.product.countries_tags
        ? <GetSingleItem array={props.product.countries_tags} name='Countries' />
        : null
      }
      {props.product.labels
        ? <GetSingleItem array={props.product.labels.split(',')} name='Labels, certifications, awards' />
        : null
      }
    </ul>
  )
}
export default SmallInfo;