import { createStore, applyMiddleware, compose } from 'redux'
import productsReducer from './reducers/manageProducts.js'
import thunk from 'redux-thunk'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(productsReducer, composeEnhancer(applyMiddleware(thunk)))

export default store