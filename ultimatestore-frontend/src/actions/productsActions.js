import axios from 'axios'

const baseURL = 'http://localhost:3000/api/v1/products/'

export const loadProducts = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_PRODUCTS'})
    axios.get(baseURL).then(res => {
      console.log('d')
      dispatch({ type: 'PRODUCTS_LOADED', products: res.data })
      }
    )
  }
}

export const addProduct = (product) => {
  return (dispatch) => {
    axios.post(baseURL, product).then(res => {
        dispatch({ type: 'ADD_PRODUCT', product: res.data})
      }
    )
  }
}

export const deleteProduct = (id) => {
  return (dispatch) => {
    axios.delete(baseURL + id).then(res => {
      dispatch({ type: 'DELETE_PRODUCT', id: id})
    })
  }
}