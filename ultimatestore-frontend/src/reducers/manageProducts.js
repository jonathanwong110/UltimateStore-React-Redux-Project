import uuid from 'uuid'

export default function manageProducts (state = {
    products: []
}, action) {
    switch (action.type) {
        case 'LOADING_PRODUCTS':
            return {
                ...state,
                products: [...state.products]
        }
        case 'PRODUCTS_FETCHED':
            return {
                ...state,
                products: action.products
        }
        case 'ADD_PRODUCT':
            const product = {
                id: uuid(),
                product: action.product
            }
            return {
                ...state, products: [...state.products, product]
        }
        case 'DELETE_PRODUCT':
            return {
                ...state, products: state.products.filter(product => product.id !== action.id)
        }
        default:
            return state
    }
}
