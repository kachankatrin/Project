import React from 'react';
import { GetSingleItem } from './productCharacteristics'

function SmallInfo(props) {
  return (
    <ul>
    {props.products.quantity ? <li><span className='infoName'>Quantity: </span><span>{props.products.quantity}</span></li> : null}
    {props.products.packaging ? <GetSingleItem array={props.products.packaging.split(',')} name='Packaging' /> : null}
    {props.products.brands ? <GetSingleItem array={props.products.brands.split(',')} name='Brands' /> : null}
    {props.products.categories ? <GetSingleItem array={props.products.categories.split(',')} name='Categories' /> : null}
    {props.products.manufacturing_places ? <GetSingleItem array={props.products.manufacturing_places.split(',')} name='Manufacturing or processing places' /> : null}
    {props.products.stores ? <GetSingleItem array={props.products.stores.split(',')} name='Stores' /> : null}
    {props.products.countries_tags ? <GetSingleItem array={props.products.countries_tags} name='Countries' /> : null}
    {props.products.labels ? <GetSingleItem array={props.products.labels.split(',')} name='Labels, certifications, awards' /> : null}
  </ul>
  )
}
export default SmallInfo;