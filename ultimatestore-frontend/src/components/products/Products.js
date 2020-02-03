import React, { Component } from 'react';
import Product from './Product'
import { CardDeck, Container, Row, Col } from 'react-bootstrap';

class Products extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      searchEntry: '',
      loading: false
    }
  }

  componentDidMount() {
    this.props.fetchProducts()
  }

  handleChange = (e) => {
    this.setState({
        searchEntry: e.target.value.toLowerCase(), loading: true
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.searchProducts(this.state.searchEntry)
  }

  render() {

    return (
      <CardDeck>
        <Container>
              <div className="searchForm">
                <form onSubmit={e => this.handleSubmit(e)}>
                    <input 
                    type="text" 
                    name="search"
                    value={this.state.searchEntry}
                    placeholder="Search for a Product" 
                    onChange={e => this.handleChange(e)}/> 
                    <button type="submit" onClick={e => this.handleSubmit(e)}>Search</button>
                </form>
            </div>
            <br></br>
          <Row>
              {this.props.products.map(product => 
                <Col key={product.id} xs="4" md="4">
                  <Product key={product.id} product={product} deleteProduct={this.props.deleteProduct} addToCart={this.props.addToCart}/>
                </Col>
              )}
          </Row>
        </Container>
      </CardDeck>
    );
  }
};

export default Products;