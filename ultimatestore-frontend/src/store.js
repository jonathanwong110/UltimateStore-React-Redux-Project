import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import manageProducts from './reducers/manageProducts.js'
import manageCart from './reducers/manageCart.js'
import thunk from 'redux-thunk'

const reducer = combineReducers({
    products: manageProducts,
    cart: manageCart
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store