import React, { Component } from 'react'
import Products from '../components/products/Products'
import ProductInput from '../components/products/ProductInput'
import { fetchProducts, searchProducts, deleteProduct, addProduct } from '../actions/productsActions'
import { addToCart } from '../actions/cartActions'
import { connect } from 'react-redux'
import CategoryNav from '../components/navigation/CategoryNav'

class ProductsContainer extends Component {

  render() {
    return (
      <div>
          <ProductInput addProduct={this.props.addProduct}/>
          <CategoryNav/>
          <br></br>
          <Products fetchProducts={this.props.fetchProducts} products={this.props.products} searchProducts={this.props.searchProducts} deleteProduct={this.props.deleteProduct} addToCart={this.props.addToCart}/>
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
    addToCart: (product) => dispatch(addToCart(product)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)