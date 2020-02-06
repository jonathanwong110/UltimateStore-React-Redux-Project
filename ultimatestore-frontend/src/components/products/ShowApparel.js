import React from 'react'
import { CardDeck, Container, Row, Col } from 'react-bootstrap';
import Product from './Product'
import CategoryNav from '../navigation/CategoryNav'

export default function ShowApparel(props) {

  let propProducts = props.products

  const apparelProducts = propProducts.filter(product => product.category === "Apparel")
  
  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <CategoryNav/>
      <br></br>
      <br></br>
      <br></br>
      <CardDeck>
        <Container>
          <Row>
              {apparelProducts.map(product => 
                <Col key={product.id} xs="4" md="4">
                  <Product key={product.id} product={product} deleteProduct={props.deleteProduct} addToCart={props.addToCart}/>
                </Col>
              )}
          </Row>
        </Container>
      </CardDeck>
    </>
  );
}

