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
          <Modal.Title>
            <h1>{products.product.title}</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img 
            alt={products.product.id} src={products.product.image} height="300px" width="300px">
          </img> 
          <br></br>
          <h2>${products.product.price}</h2>
          <br></br>
          <h3>Reviews: </h3>
          {products.product.reviews.length > 0 ?
              products.product.reviews.map(review => {
                return (
                  <ul key={review.id}>
                    <li>
                      {review.content}
                    </li>
                  </ul>
                )  
              })
            :
              <>
                <p>
                  No Reviews so far!
                </p>
              </>
          }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={() => products.deleteProduct(products.product.id)}>
            Delete Product
          </Button>
          <Button variant="success" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DisplayProduct