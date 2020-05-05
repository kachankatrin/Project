import React from 'react';
import CreatePages from '../components/pages';
import { fetchOOF, handleModalOpen, handleDarkMode, handleSelectModalProduct } from '../store/actions/SomeAction';
import { connect } from 'react-redux';
import Spinner from "../components/Spinner";
import '../App.scss';
import Modal from '../components/modal';
import Product from '../components/Listitem';
class Results extends React.Component {
  state = {
    currentPage: 1,
  }
  handlePagination = (item) => {
    console.log(this.state.currentPage)
    console.log("HP")
    this.setState({
      currentPage: item
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
  componentDidMount() {
    console.log('mount')
    // this.props.fetchOOF(null)
    // this.props.staff.products.length ? 
    //this.props.handleLoader() 
    // : this.props.fetchOOF(null)
    // this.props.fetchOOF(this.props.staff.search, this.state.currentPage, this.props.staff.tagtype, this.props.staff.tagContains, this.props.staff.tag, this.props.staff.tagtype1, this.props.staff.tagContains1, this.props.staff.tag1, this.props.additives, this.props.staff.ingPalmOil, this.props.staff.ingMayBePalmOil, this.props.staff.ingPalmOilORMayBePalmOil, this.props.staff.nutriment, this.props.staff.comparement, this.props.staff.nutrimentValue, this.props.staff.energyUnit, this.props.staff.nutriment1, this.props.staff.comparement1, this.props.staff.nutrimentValue1, this.props.staff.energyUnit1)
    // this.setState({
    //   ...this.state, 
    //   loading: this.props.staff.products.length ? true : false
    // })
  }
  // componentWillUpdate() {
  //   console.log('update')
  //   this.props.handleLoader()
  //   // this.setState({
  //   //   ...this.state, 
  //   //   loading: this.props.staff.products.length ? true : false
  //   // })
  //   // handleLoader()
  // }
  render() {
    console.log(window.location.pathname)
    console.log('render', this.props.staff.loading, 'prod', this.props.staff.products)
    const darkClass = this.props.staff.isDarkMode ? 'dark' : '';
    const darkModal = this.props.staff.isDarkMode ? 'darkModal' : '';
    // if(this.props.staff.loading === true && !this.props.staff.products.length){
    //   this.props.handleLoader()
    // } 
    // const containerStyle = "container " + (this.props.staff.isDarkMode ? 'dark' : '');
    return (
      // {this.handleLoader()}
      <div className={"container page " + darkClass}>
        <h1>{this.props.staff.products.length ? 'Search results' : this.props.staff.text}</h1>
        {!this.props.staff.loading
          ?
          // renderCharacters(this.state.characters)
          (this.props.staff.products.length
                              ?
                                <Product className='gridContainer1' products={this.props.staff.products}
                                handleProductClick={this.handleProductClick}
                              />       
                              : <h5 className="load">No products</h5>
          )
          : <h5 className="load">
                                  <Spinner/>
            </h5>
}
       
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
        
        
          <CreatePages allPages={this.props.staff.totalPages}
                       currentPage={this.state.currentPage}
                       handlePagination={this.handlePagination} />
       

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
  handleSelectModalProduct,
  // handleLoader
}
export default connect(mapStateToProps, mapDispatchToProps)(Results);

          // {this.props.staff.products.map(item => <div className='red' onClick={this.handleProductClick}><h2>{item.product_name_en ? item.product_name_en : item.product_name_fr || item.product_name_de}</h2></div>)}
      //     <Spinner animation="border" role="status">
      //     <span className="sr-only">Loading...</span>
      //  </Spinner>