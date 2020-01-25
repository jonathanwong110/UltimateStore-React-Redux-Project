import React, { Component } from 'react';
import Product from './Product'
import { CardDeck } from 'react-bootstrap';

class Products extends Component {

    componentDidMount() {
        this.props.fetchProducts()
    }

  render() {
    return (
      <CardDeck>
        {this.props.products.map(product => 
          <Product key={product.id} product={product}/>
        )}
      </CardDeck>
    );
  }
};

export default Products;