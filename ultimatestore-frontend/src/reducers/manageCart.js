export default function manageCart (state = {
    cart: []
}, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            let addedProduct = Object.values(action.payload)
                localStorage.setItem('state',  {
                    ...state,
                    cart: [...state.cart, addedProduct]
                })
            return {
                ...state,
                cart: [...state.cart, addedProduct]
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state, cart: state.cart.filter(product => product.id !== action.id)
            }
        default:
            return state
    }
}
