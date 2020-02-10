export default function manageProducts (state = {
    products: []
}, action) {
    switch (action.type) {
        case 'LOADING_PRODUCTS':
            return {
                ...state,
                products: [...state.products]
        }
        case 'PRODUCTS_LOADED':
            return {
                ...state,
                products: action.products
        }
        case 'ADD_PRODUCT':
            return {
                ...state, products: [...state.products, action.product]
        }
        case 'DELETE_PRODUCT':
            return {
                ...state, products: state.products.filter(product => product.id !== action.id)
        }
        default:
            return state
    }
}
