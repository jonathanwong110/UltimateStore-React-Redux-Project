import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function DisplayProduct(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { products } = props
  if (!products) return null

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Show Product
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Showing {products.product.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img 
            alt={products.product.id} src={products.product.image} height="300px" width="300px">
          </img> 
          <br></br>
          <h2>${products.product.price}</h2>
          <br></br>
          <h4>Reviews: </h4> {products.product.reviews.map(review => 
          <ul>
            <li>
              {review.content}
            </li>
          </ul>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DisplayProduct