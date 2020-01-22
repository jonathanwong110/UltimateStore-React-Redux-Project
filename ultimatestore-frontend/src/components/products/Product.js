import React, { Component } from 'react'

class Product extends Component {

  render() {
    const { product } = this.props;

    return (
      <div>
        <h2 key={product.id}> {product.title}
        </h2>
      </div>
    );
  }
};

export default Product;