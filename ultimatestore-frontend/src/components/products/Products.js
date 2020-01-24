import React, { Component } from 'react';
import Product from './Product'

class Products extends Component {

    componentDidMount() {
        this.props.fetchProducts()
    }

  render() {
    return (
      <ul>
        {this.props.products.map(product => 
          <Product key={product.id} product={product}/>
        )}
      </ul>
    );
  }
};

export default Products;