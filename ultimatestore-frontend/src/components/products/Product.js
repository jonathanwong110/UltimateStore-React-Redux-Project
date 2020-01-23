import React, { Component } from 'react'

class Product extends Component {

  render() {
    const { product } = this.props;
    
    return (
      <div>
        <img alt={product.id} src={product.image}> </img>
        <h2 key={product.id}> {product.title} </h2>
        <h3 key={product.id}> {product.price} </h3>
        <p key={product.id}> {product.description} </p>
      </div>
    );
  }
};

export default Product;