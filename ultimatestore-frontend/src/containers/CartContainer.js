import React, { Component } from 'react'
import Cart from '../components/Cart'
import { connect } from 'react-redux'
import { removeFromCart } from '../actions/cartActions'

class CartContainer extends Component {

  render() {
    return (
      <div>
        <Cart cart={this.props.cart}/>
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