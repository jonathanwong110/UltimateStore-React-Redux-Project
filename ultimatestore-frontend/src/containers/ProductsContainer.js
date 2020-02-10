import React, { Component } from 'react'
import Products from '../components/products/Products'
import ProductInput from '../components/products/ProductInput'
import { connect } from 'react-redux'
import CategoryNav from '../components/navigation/CategoryNav'
import { Container, Row, Col } from 'react-bootstrap'

class ProductsContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      filterBy: ""
    }
  }

  filterBy = category => {
    this.setState({
      filterBy: category === this.state.filterBy ? "" : category
    })
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <ProductInput addProduct={this.props.addProduct}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <CategoryNav filterBy={this.filterBy}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <Products filterBy={this.state.filterBy} loadProducts={this.props.loadProducts} products={this.props.products} deleteProduct={this.props.deleteProduct} addToCart={this.props.addToCart}/>
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.products.products,
  }
}
  

export default connect(mapStateToProps)(ProductsContainer)