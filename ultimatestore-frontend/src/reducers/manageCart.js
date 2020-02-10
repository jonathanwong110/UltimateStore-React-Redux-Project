export default function manageCart (state = {
    cart: []
}, action) {
    switch (action.type) {
        case 'LOAD_CART':
            localStorage.getItem('cartproducts', JSON.stringify({
                ...state,
                cart: [...state.cart]
            }))
        return {
                ...state,
                cart: [...state.cart]
        }
        case 'ADD_TO_CART':
            let addedProduct = Object.values(action.payload)
            let newCart = JSON.parse(localStorage.cartproducts).cart
            console.log(newCart)
                localStorage.setItem('cartproducts', JSON.stringify({
                    ...state,
                    cart: [...state.cart, addedProduct]
                }))
            return {
                    ...state,
                    cart: [...state.cart, addedProduct]
            }
        case 'REMOVE_FROM_CART':
            let currentCart = JSON.parse(localStorage.cartproducts).cart
            currentCart = currentCart.filter(cartproduct => cartproduct[0] !== action.payload)
                localStorage.setItem('cartproducts', JSON.stringify({
                    cart: currentCart
                }))
            return {
                ...state,
                cart: [...state.cart]
        }
        default:
            return state
    }
}
