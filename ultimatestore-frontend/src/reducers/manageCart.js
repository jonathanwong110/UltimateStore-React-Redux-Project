export default function manageCart (state = {
    cart: []
}, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
        let addedProduct = Object.values(action.payload)
        console.log(addedProduct)
            return {
                ...state,
                cart: [...state.cart, addedProduct]
            }
        default:
            return state
    }
}
