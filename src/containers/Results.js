import React from 'react';
import CreatePages from '../components/pages';
import { fetchOOF, handleModalOpen, handleDarkMode, handleSelectModalProduct, addProduct, removeProduct } from '../store/actions/Actions';
import { connect } from 'react-redux';
// import {handleProductClick} from '../utils'
import Spinner from "../components/Spinner";
import '../App.scss';
import Modal from '../components/modal';
import Product from '../components/Listitem';
class Results extends React.Component {
  state = {
    currentPage: 1,
  }
  handlePagination = (item) => {
    this.setState({
      currentPage: item
    })
    this.props.fetchOOF(this.props.mainState.search, item, this.props.mainState.tagtype, this.props.mainState.tagContains, this.props.mainState.tag, this.props.mainState.tagtype1, this.props.mainState.tagContains1, this.props.mainState.tag1, this.props.additives, this.props.mainState.ingPalmOil, this.props.mainState.ingMayBePalmOil, this.props.mainState.ingPalmOilORMayBePalmOil, this.props.mainState.nutriment, this.props.mainState.comparement, this.props.mainState.nutrimentValue, this.props.mainState.energyUnit, this.props.mainState.nutriment1, this.props.mainState.comparement1, this.props.mainState.nutrimentValue1, this.props.mainState.energyUnit1)
  }
    handleProductClick = (product) => {
    this.props.handleModalOpen()
    this.props.handleSelectModalProduct(product)
  }
  componentDidMount() {
    console.log('mount')
  }
  render() {
    console.log(window.location.pathname)
    React.Children.map(this.props.children, child => {console.log(child, 'childjsklsjfglkjsfghkjshgkjhsjghdjghsghdgkdjghdoihoighkghdgkhdghdk'); return child})
    const darkClass = this.props.mainState.isDarkMode ? 'dark' : '';
    const darkModal = this.props.mainState.isDarkMode ? 'darkModal' : '';
    const style = {
      display: 'none'
    }
    return (
      <div className={"container page " + darkClass}>
        <h1>{this.props.mainState.products.length ? 'Search results' : this.props.mainState.text}</h1>
        {!this.props.mainState.loading
          ?
          (this.props.mainState.products.length
            ? <ul className='grid-container'>
              {this.props.mainState.products.map(item =>
                <Product item={item}
                  handleProductClick={this.handleProductClick}
                  addProduct={this.props.addProduct}
                  removeProduct={this.props.removeProduct}
                  products={item}
                  isFavoriteProduct={this.props.product.favoriteProducts.find(product => {
                  console.log(product)   
                    return item.id === product.id
                  }
                    // return item.id === product.id
                  )}
                // isFavoriteProduct={this.props.product.favoriteProducts}
                />)}</ul>
            : <h5 className="load">No products</h5>
          )
          : <h5 className="load">
            <Spinner />
          </h5>
        }

        {this.props.mainState.isModalOpen ?

          <Modal
            handleModalOpen={this.props.handleModalOpen}
            product={this.props.mainState.modalProductName}
            style={style}
            products={this.props.mainState.productForModal}
            className={darkModal}
          />

          : null}
        <CreatePages allPages={this.props.mainState.totalPages}
          currentPage={this.state.currentPage}
          handlePagination={this.handlePagination} />
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    mainState: state.mainState,
    product: state.product
  }
}
const mapDispatchToProps = {
  fetchOOF,
  handleModalOpen,
  handleDarkMode,
  handleSelectModalProduct,
  addProduct,
  removeProduct
}
export default connect(mapStateToProps, mapDispatchToProps)(Results);