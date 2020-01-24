import React, { Component } from 'react'

class Product extends Component {

  render() {
    const { product } = this.props;
    
    return (
      <div>
        <img alt={product.id} src={product.image} height="100px" width="100px"/>
        <h2> {product.title} </h2>
        <h3> {product.price} </h3>
        <p> {product.description} </p>
      </div>
    );
  }
};

export default Product;