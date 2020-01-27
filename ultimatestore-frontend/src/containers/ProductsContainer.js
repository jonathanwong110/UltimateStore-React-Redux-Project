import React, { Component } from 'react'
import Products from '../components/products/Products'
import ProductInput from '../components/products/ProductInput'
import { fetchProducts } from '../actions/products'
import { connect } from 'react-redux'
import MainNav from '../components/products/MainNav'

class ProductsContainer extends Component {

  render() {
    return (
      <div>
        <MainNav/>
          <ProductInput addProduct={this.props.addProduct}/>
          <Products fetchProducts={this.props.fetchProducts} products={this.props.products} deleteProduct={this.props.deleteProduct}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
      products: state.products,
    }
  }
   
const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
    addProduct: product => dispatch({ type: "ADD_PRODUCT", product }),
    deleteProduct: id => dispatch({ type: "DELETE_PRODUCT", id }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)