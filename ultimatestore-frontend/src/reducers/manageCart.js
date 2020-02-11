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
            console.log('first currentCart', currentCart)
            currentCart = currentCart.filter(cartproduct => cartproduct[0] !== action.payload)
            console.log('second currentCart', currentCart)
            console.log('localStorage', localStorage)
            debugger
            localStorage.setItem('cartproducts', JSON.stringify({
                cart: [...state.cart]
            }))
            return {
                ...state,
                cart: [...state.cart]
        }
        default:
            return state
    }
}
