import React, { Component } from 'react';

class ProductInput extends Component {

  constructor() {
    super()
    this.state = {
      image: '',
      price: '',
      description: '',
      title: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      image: e.target.value,
      price: e.target.value,
      description: e.target.value,
      title: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addProduct(this.state.text)
    this.setState({
        image: '',
        price: '',
        description: '',
        title: ''
    });
  }


  render() {
    return (
      <div>
        Product Input
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.image}>
          </input>
          <input type="text" onChange={this.handleChange} value={this.state.price}>
          </input>
          <input type="text" onChange={this.handleChange} value={this.state.description}>
          </input>
          <input type="text" onChange={this.handleChange} value={this.state.title}>
          </input>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
};

export default ProductInput;