import React, { Component } from 'react';
import Product from './Product'
import { CardDeck, Container, Row, Col } from 'react-bootstrap';

class Products extends Component {

    componentDidMount() {
        this.props.fetchProducts()
    }

  render() {
    return (
      <CardDeck>
        <Container>
          <Row>
              {this.props.products.map(product => 
                <Col xs="4" md="4">
                  <Product key={product.id} product={product} deleteProduct={this.props.deleteProduct}/>
                </Col>
              )}
          </Row>
        </Container>
      </CardDeck>
    );
  }
};

export default Products;