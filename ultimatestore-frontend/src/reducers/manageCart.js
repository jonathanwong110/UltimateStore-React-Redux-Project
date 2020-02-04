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
            let removedProduct = action.payload
            localStorage.removeItem('removedProduct',  {
                cart: [...state.cart, removedProduct]
            })
            return {
                ...state, cart: state.cart.filter(product => product[0] !== action.payload)
            }
        default:
            return state
    }
}
