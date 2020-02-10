import React, { Component } from 'react'
import Cart from '../components/cart/Cart'
import { connect } from 'react-redux'
import { removeFromCart } from '../actions/cartProductsActions'

class CartContainer extends Component {

  render() {
    return (
      <div>
        <Cart cart={this.props.cart} loadCart={this.props.loadCart} removeFromCart={this.props.removeFromCart}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart.cart,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)