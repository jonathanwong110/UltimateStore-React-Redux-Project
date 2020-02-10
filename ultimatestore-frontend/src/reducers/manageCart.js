export default function manageCart (state = {
    cart: []
}, action) {
    switch (action.type) {
        case 'LOADING_CART':
            return {
                ...state,
                cart: [...state.cart]
        }
        case 'ADD_TO_CART':
            let addedProduct = Object.values(action.payload)
            return {
                ...state,
                cart: [...state.cart, addedProduct]
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state, cart: state.cart.filter(product => product[0] !== action.payload)
            }
        default:
            return state
    }
}
