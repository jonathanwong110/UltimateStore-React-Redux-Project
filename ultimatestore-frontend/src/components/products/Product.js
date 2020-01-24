import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap';

class Product extends Component {

  render() {
    const { product } = this.props;
    
    return (
      <Card style={{ width: '15rem' }}>
        <Card.Img variant="top" src={product.image}/>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
          ${product.price}
          </Card.Text>
          <Button variant="primary">Show Product</Button>
        </Card.Body>
      </Card>
    );
  }
};

export default Product;