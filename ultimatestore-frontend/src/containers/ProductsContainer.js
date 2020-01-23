import React, { Component } from 'react'
// import Products from '../components/products/Products'
import ProductInput from '../components/products/ProductInput'
import { fetchProducts } from '../actions/products'
import { connect } from 'react-redux'

class ProductsContainer extends Component {

  render() {
    return (
      <div>
        {/* <Products products={this.props.products}/> */}
        <ProductInput addProduct={this.props.addProduct}/>
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
      addProduct: (image, title, price, description) => dispatch({ type: "ADD_PRODUCT", image, title, price, description }) 
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)