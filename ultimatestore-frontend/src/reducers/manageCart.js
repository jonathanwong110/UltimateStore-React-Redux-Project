export default function manageCart (state = {
    cart: []
}, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            console.log('testing ADD_TO_CART')
        case 'REMOVE_FROM_CART':
            console.log('testing REMOVE_FROM_CART')
        default:
            return state
    }
}
