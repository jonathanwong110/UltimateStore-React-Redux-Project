export default function (state = {
    products: [], reviews: []
}, action) {
    switch (action.type) {
        case 'LOADING_PRODUCTS':
            return {
                ...state,
                products: [...state.products],
                loading: true
        }
        default:
            return state
    }
}
