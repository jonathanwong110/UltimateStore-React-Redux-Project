import axios from 'axios'

const baseURL = 'http://localhost:3000/api/v1/carts/1'

export const loadCart = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_CART'})
      axios.get(baseURL).then(res => {
        dispatch({ type: 'CART_LOADED', cart: res.data })
        }
      )
    }
  }

export const addToCart = (product) => {
    return {
        type: 'ADD_TO_CART',
        payload: product
    }
}

export const removeFromCart = (id) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: id
    }
}