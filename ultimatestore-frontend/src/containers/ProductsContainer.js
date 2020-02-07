import React, { Component } from 'react'
import Products from '../components/products/Products'
import ProductInput from '../components/products/ProductInput'
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
  

export default connect(mapStateToProps)(ProductsContainer)