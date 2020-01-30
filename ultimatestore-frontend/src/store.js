import { createStore, applyMiddleware, compose } from 'redux'
import manageProducts from './reducers/manageProducts.js'
import thunk from 'redux-thunk'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(manageProducts, composeEnhancer(applyMiddleware(thunk)))

export default store