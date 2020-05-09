import React from 'react';
import { Capitalize } from '../utils'

function Product(props) {
  const TextForButton = !props.isFavoriteProduct ? <i class="far fa-heart"></i> : <i class="fas fa-heart"></i>;
  const clickHandler = !props.isFavoriteProduct ? props.addProduct : props.removeProduct;
  console.log(props.isFavoriteProduct)
  // let product;
  // props.products.map(item=> product = item)
  return (
    <li value={props.item.product_name} className='grey' key={props.key} id={props.item._id} onClick={props.handleProductClick}>
      <div id={props.item._id} className="product-grid" key={props.key}>
        <div>
          <button className='btnmy' onClick={(e) => { e.stopPropagation(); clickHandler(props.products)}}>{TextForButton}</button>
        </div>
        <img id={props.item._id} key={props.key} src={props.item.image_small_url ? props.item.image_small_url : './img/No_Picture.jpg'} alt={props.item.product_name} />
        <p id={props.item._id}>{props.item.product_name ? Capitalize(props.item.product_name) : Capitalize('no product name')}</p>
      </div>
    </li>
  )
}

export default Product


// <ul className={props.className}>
//       {props.products.map(item => <li value={item.product_name} className='grey' id={item._id} onClick={props.handleProductClick}><div className="product-grid"><img src={item.image_small_url ? item.image_small_url : './img/No_Picture.jpg'} alt={item.product_name}/><p>{item.product_name ? Capitalize(item.product_name) : Capitalize('no product name')}</p></div></li>)}
//     </ul>

// return (
//   <ul className={props.className}>
//     {props.products.map(item => {
//       props.isFavoriteProduct.find(product => item.id === product.id)

//       return(
//         <li value={item.product_name} className='grey' id={item._id} onClick={props.handleProductClick}>
//       <div className="product-grid">
//         <div>
//           <button className='btnmy' onClick={(e) => { e.stopPropagation(); clickHandler(props.products) }}>{TextForButton}</button>
//         </div>
//         <img src={item.image_small_url ? item.image_small_url : './img/No_Picture.jpg'} alt={item.product_name} />
//         <p>{item.product_name ? Capitalize(item.product_name) : Capitalize('no product name')}</p>
//       </div>
//     </li>)
//   })}
//   </ul>
// )
