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

    // const filteredProducts = this.props.products.filter(product => product.title.toLowerCase().includes(this.state.searchQuery))

    return (
      <CardDeck>
        <Container>
            <br></br>
          <Row>
              {this.props.products.map(product => {
                return this.props.filter === "" || product.category === this.props.filter ? 
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