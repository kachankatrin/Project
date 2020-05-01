import React from 'react';
import CreatePages from '../components/pages';
import { fetchOOF, handleModalOpen, handleDarkMode, handleSelectModalProduct } from '../store/actions/SomeAction';
import { connect } from 'react-redux';
import '../App.scss';
import Modal from '../components/modal';
import Product from '../components/Listitem';
// import {doted} from '../components/pages'
// let modalarr;
class Results extends React.Component {
  state = {
    currentPage: 1,
    doted: {}
  }
  handleDoted = (dotedObj) => {
    this.setState({
      doted: dotedObj
    })
  }
  handlePagination = (item, dotedObj) => {
    // const doted = i > this.state.currentPage.id ? this.state.currentPage + 3 : this.state.currentPage - 3;
    // const currentPage = item === "..." ? doted  : item
    console.log(this.state.currentPage)
    console.log("HP", dotedObj)
    this.setState({
      currentPage: item,
      doted: dotedObj
    })
    console.log(this.state.currentPage, 'in handler')
    console.log(this.props.staff.products, 'search')
    this.props.fetchOOF(this.props.staff.search, item, this.props.staff.tagtype, this.props.staff.tagContains, this.props.staff.tag, this.props.staff.tagtype1, this.props.staff.tagContains1, this.props.staff.tag1, this.props.additives, this.props.staff.ingPalmOil, this.props.staff.ingMayBePalmOil, this.props.staff.ingPalmOilORMayBePalmOil, this.props.staff.nutriment, this.props.staff.comparement, this.props.staff.nutrimentValue, this.props.staff.energyUnit, this.props.staff.nutriment1, this.props.staff.comparement1, this.props.staff.nutrimentValue1, this.props.staff.energyUnit1)
  }
  handleProductClick = (product) => {
    console.log(product)
    this.props.handleModalOpen()
    this.props.handleSelectModalProduct(product)
    // product.stopPropagation()
  }
  render() {
    console.log(this.props.staff)
    const darkClass = this.props.staff.isDarkMode ? 'dark' : '';
    const darkModal = this.props.staff.isDarkMode ? 'darkModal' : '';
    // const containerStyle = "container " + (this.props.staff.isDarkMode ? 'dark' : '');
    return (
      <div className={"page container " + darkClass}>
        <h1>Search results</h1>
        <div>
          <Product className='gridContainer' products={this.props.staff.products}
            handleProductClick={this.handleProductClick}
          />
          {this.props.staff.isModalOpen ? <Modal
            handleModalOpen={this.props.handleModalOpen}
            product={this.props.staff.modalPicture}
            //  picture={{src:this.props.staff.productsForModal.image_front_url}}
            products={this.props.staff.productsForModal}
            //  quantity={this.props.staff.productsForModal.quantity}
            // packaging={this.props.staff.productsForModal.packaging_tags}
            className={darkModal}
          >
          </Modal>
            : null}
        </div>
        <div>
          <CreatePages allPages={this.props.staff.totalPages}
                       currentPage={this.state.currentPage}
                       handlePagination={this.handlePagination} />
        </div>

      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    staff: state.staff
  }
}
const mapDispatchToProps = {
  fetchOOF,
  handleModalOpen,
  handleDarkMode,
  handleSelectModalProduct

}
export default connect(mapStateToProps, mapDispatchToProps)(Results);

          // {this.props.staff.products.map(item => <div className='red' onClick={this.handleProductClick}><h2>{item.product_name_en ? item.product_name_en : item.product_name_fr || item.product_name_de}</h2></div>)}
