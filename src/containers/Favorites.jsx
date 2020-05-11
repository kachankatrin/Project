import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import Product from '../components/Listitem';
import Modal from '../components/modal'
import {removeProduct, addProduct, handleModalFavOpen, handleSelectFavoriteProduct, changeActiveIndex, handleNext, handlePrevious, getPreviousInfo, handleCarousel} from '../store/actions/Actions'

function Favorites(props) {
  useEffect(() => {
    window.addEventListener("mousemove", props.handleCarousel);
  // console.log("Created");
  return () => {
    // console.log("Cleaned up");
    window.removeEventListener("mousemove", props.handleCarousel);
  };
    // props.handleCarousel()
  })
  console.log(props)
  // props.handleCarousel()
  const handleProductClick = (product, index) => {
    console.log(product)
    props.handleModalFavOpen()
    props.handleSelectFavoriteProduct(product)
    props.changeActiveIndex(index)
    // props.handleCarousel()
  }
  const darkClass = props.mainState.isDarkMode ? 'dark' : '';
  const darkModal = props.mainState.isDarkMode ? 'darkModal' : '';
  const style = {
    display: 'block'
  }
  
  // let newProductsArr = []
  // props.favoriteProducts.map((item, index) => {
  //   let obj ={};
  //   obj[index] = item;
  //   return newProductsArr.push(obj)})
  // console.log(Object.values(newProductsArr))
  // const Carousel = newProductsArr.map((item,index) => {console.log((item)); return item[index]})
  // console.log(Carousel.length)
  // function getPrevInfo(arr, currIndex) {
  //   let result
  //   arr.filter((item,index) => {
  //     if(index === currIndex) {
  //       return result = item
  //     }
  //     return result
  //   })
  // }
  return (
    <div className={'page container ' + darkClass}>
    <h1>Products</h1>
    <ul className='gridContainer1'>
      {props.favoriteProducts.map((item, index) => {
        return <Product item={item} products={item} key={index} handleProductClick={(product)=> handleProductClick(product, index) } addProduct={props.addProduct} removeProduct={props.removeProduct} isFavoriteProduct={props.favoriteProducts.filter(favorite => favorite.id === item.id).length}/>
      })}
      </ul>
      {props.isFavModalOpen ?

        <Modal
          style={style}
          handlePrevious={() => {props.handlePrevious(props.Carousel); props.getPreviousInfo()}}
          handleNext={() => {props.handleNext(props.Carousel); props.getPreviousInfo()}}
          handleModalOpen={props.handleModalFavOpen}
          product={props.modalProductName}
          products={props.productsForModal}
          className={darkModal}
        />

        : null}
    </div>
  )
}

const mapStateToProps = (state)=> {
  return {
    favoriteProducts: state.product.favoriteProducts,
    mainState: state.mainState,
    activeIndex: state.product.activeIndex,
    Carousel: state.product.Carousel,
    productsForModal: state.product.productsForModal,
    modalProductName: state.product.modalProductName,
    isFavModalOpen: state.product.isFavModalOpen
  }
}
const mapDispatchToProps = {
  removeProduct,
  addProduct,
  handleSelectFavoriteProduct,
  handleModalFavOpen,
  changeActiveIndex,
  handlePrevious,
  getPreviousInfo,
  handleCarousel,
  handleNext
}
export default connect(mapStateToProps, mapDispatchToProps)(Favorites)
// isFavoriteCharacter={(props.favoriteCharacters.filter(fav => { console.log(props.favoriteCharacters, 'inside favorite'); return fav.id === item.id })).length}