const baseURL = 'http://localhost:3000/api/v1/products'

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_PRODUCTS'})
    fetch(baseURL).then(response => {
      return response.json()
    }).then(responseJSON => {
      dispatch({ type: 'PRODUCTS_FETCHED', products: responseJSON })
    })
  }
}

export const deleteProduct = (id) => {
  return (dispatch) => {
    dispatch({ type: 'DELETE_PRODUCT'})
    fetch(baseURL + id, {
      method: "DELETE",
      header: {'Accept':'application/json',
      'Content-type':'application/json'
      }
    })
  }
}