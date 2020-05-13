import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Product from '../components/Listitem';
import Modal from '../components/modal';
import {
  removeProduct,
  addProduct,
  handleModalFavOpen,
  handleSelectFavoriteProduct,
  changeActiveIndex,
  handleNext,
  handlePrevious,
  getPreviousInfo,
  handleCarousel
} from '../store/actions/Actions';

function Favorites(props) {
  useEffect(() => {
    window.addEventListener("mousemove", props.handleCarousel);
    return () => {
      window.removeEventListener("mousemove", props.handleCarousel);
    }
  });
  const handleProductClick = (product, index) => {
    props.handleModalFavOpen();
    props.handleSelectFavoriteProduct(product);
    props.changeActiveIndex(index);
  }
  const darkClass = props.mainState.isDarkMode ? 'dark' : '';
  const darkModal = props.mainState.isDarkMode ? 'dark-modal' : '';
  const style = {
    display: 'block'
  }
  return (
    <div className={'page container ' + darkClass}>
      <h1>Favorites</h1>
      <ul className='grid-container'>
        {props.favoriteProducts.map((item, index) => {
          return <Product
            item={item}
            product={item}
            key={index}
            handleProductClick={(product) => handleProductClick(product, index)}
            addProduct={props.addProduct}
            removeProduct={props.removeProduct}
            isFavoriteProduct={props.favoriteProducts.filter(favorite => favorite.id === item.id).length}
          />
        })}
      </ul>
      {props.isFavModalOpen
        ? <Modal
          style={style}
          handlePrevious={() => { props.handlePrevious(props.Carousel); props.getPreviousInfo() }}
          handleNext={() => { props.handleNext(props.Carousel); props.getPreviousInfo() }}
          handleModalOpen={props.handleModalFavOpen}
          productName={props.modalProductName}
          product={props.productForModal}
          className={darkModal}
        />
        : null
      }
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    favoriteProducts: state.favProducts.favoriteProducts,
    mainState: state.mainState,
    activeIndex: state.favProducts.activeIndex,
    Carousel: state.favProducts.Carousel,
    productForModal: state.favProducts.productForModal,
    modalProductName: state.favProducts.modalProductName,
    isFavModalOpen: state.favProducts.isFavModalOpen
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
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
