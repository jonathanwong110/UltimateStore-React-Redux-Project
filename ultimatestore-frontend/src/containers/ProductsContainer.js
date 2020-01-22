import React, { Component } from 'react'
import Products from '../components/products/Products'

class ProductsContainer extends Component {

  render() {
    return (
      <div>
        <Products products={this.props.products}/>
      </div>
    )
  }
}

const mapStateToProps = ({ products }) => ({ products })

export default (ProductsContainer)