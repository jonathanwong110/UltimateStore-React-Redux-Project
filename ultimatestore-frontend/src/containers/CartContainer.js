import React, { Component } from 'react'
import Cart from '../components/Cart'
import { connect } from 'react-redux'

class CartContainer extends Component {

  render() {
    return (
      <div>
        <Cart/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addtoCart: (id) => dispatch(addProduct(id)),
    removeFromCart: (id) => dispatch(removeFromCart(id))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)