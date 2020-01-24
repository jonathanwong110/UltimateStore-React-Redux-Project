import uuid from 'uuid'

export default function manageProducts (state = {
    products: []
}, action) {
    switch (action.type) {
        case 'LOADING_PRODUCTS':
            return {
                ...state,
                products: [...state.products],
                loading: true
        }
        case 'ADD_PRODUCT':
            action.product.id = uuid()
            return {...state, products: [...state.products, action.product]}
        default:
            return state
    }
}
