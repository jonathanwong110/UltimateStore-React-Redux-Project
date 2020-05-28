import React, { Component } from 'react';
import Product from './Product'
import { CardDeck, Container, Row, Col } from 'react-bootstrap';
import SearchProducts from './SearchProducts'

class Products extends Component {

  constructor() {
    super();
    this.state = {
      searchEntry: '',
      searchQuery: '',
      loading: false
    }
  }

  componentDidMount() {
    this.props.loadProducts()
  }

  handleChange = (e) => {
    this.setState({
      searchEntry: e.target.value.toLowerCase(),
      loading: true
    })
  }

  onKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleSubmit(e)
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const searchQuery = this.state.searchEntry
    this.setState({
      searchQuery
    })
  }

  render() {

    const { searchEntry, searchQuery } = this.state;
    let { products } = this.props
    if (searchQuery.length > 0) { products = products.filter(item => item.title.toLowerCase().includes(searchQuery)) }

    return (
      <CardDeck>
        <Container>
          <br></br>
          <SearchProducts onKeyPress={this.onKeyPress} {...{ searchEntry, searchQuery }} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
          <Row>
            {products.map(product => {
              return this.props.filterBy === "" || product.category === this.props.filterBy ?
                <Col key={product.id} xs="4" md="4">
                  <Product key={product.id} product={product} deleteProduct={this.props.deleteProduct} addToCart={this.props.addToCart} />
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