import { createStore, applyMiddleware, compose } from 'redux'
import managerProducts from './reducers/manageProducts.js'
import thunk from 'redux-thunk'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(managerProducts, composeEnhancer(applyMiddleware(thunk)))

export default store