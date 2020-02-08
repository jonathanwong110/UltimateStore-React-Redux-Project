const baseURL = 'http://localhost:3000/api/v1/products/'

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

export const addProduct = (product) => {
  const newProduct = {product}
  console.log(newProduct)
  return (dispatch) => {
    dispatch({ type: 'ADD_PRODUCT'})
    fetch(baseURL, {
      method: "POST",
      header: {'Accept':'application/json',
      'Content-type':'application/json'}, 
      body: JSON.stringify(newProduct)
    }).then(res => res.json()).then(console.log)
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