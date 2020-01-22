import React, { Component } from 'react'
import Products from '../components/products/Products'
import { fetchProducts } from '../actions/products'
import { connect } from 'react-redux'

class ProductsContainer extends Component {

  render() {
    return (
      <div>
        <Products products={this.props.products}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
      products: state.products,
      loading: state.loading
    }
  }
   
  const mapDispatchToProps = dispatch => {
    return {
      fetchProducts: () => dispatch(fetchProducts())
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)