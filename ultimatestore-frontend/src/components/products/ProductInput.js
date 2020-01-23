import React, { Component } from 'react';

class ProductInput extends Component {

  constructor() {
    super()
    this.state = {
      title: '',
      price: '',
      description: '',
      image: ''
    }
  }

  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addProduct(this.state.text)
    this.setState({
        title: '',
        price: '',
        description: '',
        image: ''
    });
  }


  render() {
    return (
      <div>
        Product Input
        <form onSubmit={e => this.handleSubmit(e)}>
        <br></br>
          <label>
              Title: 
              <input type="text" onChange={e => this.handleChange(e)}></input> 
          </label> 
            <br></br>
            <br></br>
          <label>
              Price: 
              <input type="text" onChange={e => this.handleChange(e)}></input>
          </label>
            <br></br>
            <br></br>
          <label>
              Description: <input type="text" onChange={e => this.handleChange(e)}></input> 
          </label>
            <br></br>
            <br></br>
          <label>
              Image: <input type="text" onChange={e => this.handleChange(e)}></input> 
          </label>
            <br></br>
            <br></br>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
};

export default ProductInput;