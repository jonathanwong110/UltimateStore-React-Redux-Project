import React from 'react'
import { Card } from 'react-bootstrap';
import ShowProduct from './ShowProduct'

export default function Product(props) {
    
  const { product } = props;
  
  return (
    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={product.image} height="200px" width="auto"/>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          {product.category}
          <br></br>
          <br></br>
          ${product.price}
        </Card.Text>
        <ShowProduct products={props}/>
      </Card.Body>
    </Card>
  );
}
