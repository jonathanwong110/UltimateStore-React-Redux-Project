import React, { Component } from 'react'
import Products from '../components/products/Products'
import ProductInput from '../components/products/ProductInput'
import { fetchProducts, searchProducts, deleteProduct, addProduct } from '../actions/productsActions'
import { connect } from 'react-redux'
import MainNav from '../components/MainNav'

class ProductsContainer extends Component {

  render() {
    return (
      <div>
        <MainNav/>
          <ProductInput addProduct={this.props.addProduct}/>
          <Products fetchProducts={this.props.fetchProducts} products={this.props.products} searchProducts={this.props.searchProducts} deleteProduct={this.props.deleteProduct}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
      products: state.products.products,
    }
  }
   
const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
    searchProducts: () => dispatch(searchProducts()),
    addProduct: (product) => dispatch(addProduct(product)),
    deleteProduct: (id) => dispatch(deleteProduct(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)