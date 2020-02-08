import React, { Component } from 'react';
import Product from './Product'
import { CardDeck, Container, Row, Col } from 'react-bootstrap';

class Products extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      searchEntry: '',
      searchQuery: '',
      loading: false
    }
  }

  componentDidMount() {
    this.props.fetchProducts()
  }

  render() {

    return (
      <CardDeck>
        <Container>
            <br></br>
          <Row>
              {this.props.products.map(product => {
                return this.props.filterBy === "" || product.category === this.props.filterBy ? 
                  <Col key={product.id} xs="4" md="4">
                    <Product key={product.id} product={product} deleteProduct={this.props.deleteProduct} addToCart={this.props.addToCart}/>
                  </Col> : null
                }
              )}
          </Row>
        </Container>
      </CardDeck>
    );
  }
};

export default Products;