import React from 'react';
import {Capitalize} from '../utils'
function Product(props) {
  return (
    <ul className={props.className}>
      {props.products.map(item => <li value={item.product_name} className='grey' id={item._id} onClick={props.handleProductClick}><div className="product-grid"><img src={item.image_small_url ? item.image_small_url : './img/No_Picture.jpg'} alt={item.product_name}/><p>{Capitalize(item.product_name)}</p></div></li>)}
    </ul>
  )
}

export default Product

