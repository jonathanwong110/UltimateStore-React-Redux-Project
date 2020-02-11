import React, { Component } from 'react';
import { Form, Button, Col } from 'react-bootstrap'

class ProductInput extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title: '',
      price: '',
      description: '',
      image: '',
      category: 'Apparel'
    }
  }

  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    });
    console.log('e.target.value', e.target.value)
  }

  handleCategoryChange = (e) => {
    this.setState({
      category: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {...this.state}
    this.setState({
        title: '',
        price: '',
        description: '',
        image: '',
        category: ''
    });
    this.props.addProduct(newProduct)
  }

  render() {
    return (
        <Form onSubmit={e => this.handleSubmit(e)}>
          Create a Product!
          <br></br>
          <br></br>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridTitle">
              <Form.Label>Title: </Form.Label>
                <input type="text" name="title" placeholder="Title" onChange={e => this.handleChange(e)} value={this.state.title}></input> 
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPrice">
              <Form.Label>Price: </Form.Label>
                <input type="text" name="price" placeholder="Price" onChange={e => this.handleChange(e)} value={this.state.price}></input>
            </Form.Group>

          <Form.Group as={Col} controlId="formGridDescription">
              <Form.Label>Description: </Form.Label>
                <input type="text" name="description" placeholder="Description" onChange={e => this.handleChange(e)} value={this.state.description}></input>
            </Form.Group>

          <Form.Group as={Col} controlId="formGridImage">
            <Form.Label>Image URL: </Form.Label>
              <input type="text" name="image" placeholder="Image URL" onChange={e => this.handleChange(e)} value={this.state.image}></input> 
          </Form.Group>

            <Form.Group as={Col} controlId="formGridCategory">
              <Form.Label>Category: </Form.Label>
              <select type="select" onChange={e => this.handleCategoryChange(e)} value={this.state.category}>
                <option value="Apparel">Apparel</option>
                <option value="Electronics">Electronics</option>
                <option value="Miscellaneous">Miscellaneous</option>
              </select>
            </Form.Group>
          </Form.Row>

          <Button variant="success" type="submit">
            Create Product
          </Button>
          <br></br>
          <br></br>
        </Form>
    );
  }
};

export default ProductInput;