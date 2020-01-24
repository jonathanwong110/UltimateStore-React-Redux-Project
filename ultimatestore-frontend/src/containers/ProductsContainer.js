import React, { Component } from 'react'
import Products from '../components/products/Products'
import ProductInput from '../components/products/ProductInput'
import { fetchProducts } from '../actions/products'
import { connect } from 'react-redux'

class ProductsContainer extends Component {

  render() {
    return (
      <div>
        <ProductInput addProduct={this.props.addProduct}/>
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
      fetchProducts: () => dispatch(fetchProducts()),
      addProduct: product => dispatch({ type: "ADD_PRODUCT", product }) 
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)