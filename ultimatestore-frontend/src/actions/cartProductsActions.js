// import axios from 'axios'

// const baseURL = 'http://localhost:3000/api/v1/cartproducts/'

// export const addToCart = (cartproduct) => {
//     return (dispatch) => {
//         axios.post(baseURL, cartproduct).then(res => {
//             dispatch({ type: 'ADD_PRODUCT', product: res.data})
//           }
//         )
//       }
//     }

// export const removeFromCart = (id) => {
//   return (dispatch) => {
//     axios.delete(baseURL + id).then(res => {
//       dispatch({ type: 'DELETE_PRODUCT', id: id})
//     })
//   }
// }