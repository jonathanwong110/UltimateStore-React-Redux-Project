import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

class CartProduct extends Component {

  render() {

    return (
        <tr key={this.props.cartProduct[0]}>
            <td>
                <strong>{this.props.cartProduct[1]}</strong>
                <br></br>
                <img src={this.props.cartProduct[4]} alt={this.props.cartProduct[1]}height='100px' width='100px'>
                </img>
            </td>
            <td>
                {this.props.cartProduct[3]}
            </td>
            <td>
                {this.props.cartProduct[2]}
            </td>
            <td>
                <Button variant="danger" onClick={() => this.props.removeFromCart(this.props.cartProduct[0])}>Remove from Cart</Button>
            </td>
        </tr>        
    );
  }
};

export default CartProduct;