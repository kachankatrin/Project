import React from 'react';
import { Capitalize } from '../utils'

function Product(props) {
  const TextForButton = !props.isFavoriteProduct ? <i className="far fa-heart"></i> : <i className="fas fa-heart"></i>;
  const clickHandler = !props.isFavoriteProduct ? props.addProduct : props.removeProduct;
  console.log(props.isFavoriteProduct)
  return (
    <li value={props.item.product_name} className='grey' key={props.key} id={props.item._id} onClick={props.handleProductClick}>
      <div id={props.item._id} className="product-grid" key={props.key}>
        <div>
          <button className='btnmy' onClick={(e) => { e.stopPropagation(); clickHandler(props.products) }}>{TextForButton}</button>
        </div>
        <img id={props.item._id} key={props.key} src={props.item.image_small_url ? props.item.image_small_url : './img/No_Picture.jpg'} alt={props.item.product_name} />
        <p id={props.item._id}>{props.item.product_name ? Capitalize(props.item.product_name) : Capitalize('no product name')}</p>
      </div>
    </li>
  )
}

export default Product;