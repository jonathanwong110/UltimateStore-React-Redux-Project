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
