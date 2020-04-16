import React from 'react';
import CreatePages from '../components/pages';
import {fetchOOF} from '../store/actions/SomeAction';
import { connect } from 'react-redux';

class Results extends React.Component {
  state = {
    // products: [],
    // totalPages: 0,
    currentPage: 1,
  }
  // handlePagination = (i) => {
  //   this.setState({
  //     currentPage: i 
  //   })
  //   console.log(this.state.currentPage, 'in handler')
  //   this.props.fetchOOF(this.state.search, i)
  // }
  handlePagination = (i) => {
    this.setState({
      currentPage: i 
    })
    console.log(this.state.currentPage, 'in handler')
    console.log(this.props.staff.search, 'pagin')
    this.props.fetchOOF(this.props.staff.searchForPaging, i)
  }
  render() {
    console.log(this.props.staff)
    return (
      <div>
        <h1>Here are some results</h1>
        
        <p>
          You can manage your search critiria
        </p>
        {this.props.staff.products.map(item => <div>{item.product_name_en ? item.product_name_en : item.product_name_fr}</div>)}
      <div>
        <ul>
          <CreatePages allPages={this.props.staff.totalPages} 
                       currentPage={this.state.currentPage} 
                       handlePagination={this.handlePagination} />
        </ul>
      </div>
        
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return{
    staff: state.staff
  }
}
const mapDispatchToProps = {
  fetchOOF
}
export default connect(mapStateToProps,mapDispatchToProps)(Results);