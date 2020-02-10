import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import ProductsContainer from './containers/ProductsContainer'
import CartContainer from './containers/CartContainer'
import MainNav from './components/navigation/MainNav'
import { connect } from 'react-redux'
import { loadCart } from './actions/cartActions'
import { addToCart } from './actions/cartProductsActions'
import { loadProducts, deleteProduct, addProduct } from './actions/productsActions'

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <MainNav/>
            <Switch>
              <Route exact path="/" render={routerProps => <ProductsContainer {...routerProps} {...{...this.props}} />} />
              <Route exact path="/cart" render={routerProps => <CartContainer {...routerProps} {...{...this.props}}/>} />
              <Route exact path="/products/apparel" render={routerProps => <ProductsContainer {...routerProps} {...{...this.props}} />} />
              <Route exact path="/products/electronics" render={routerProps => <ProductsContainer {...routerProps} {...{...this.props}} />} />
              <Route exact path="/products/miscellaneous" render={routerProps => <ProductsContainer {...routerProps} {...{...this.props}} />} />
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products.products,
    cart: state.cart.cart
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadProducts: () => dispatch(loadProducts()),
    loadCart: (id) => dispatch(loadCart(id)),
    addProduct: (product) => dispatch(addProduct(product)),
    deleteProduct: (id) => dispatch(deleteProduct(id)),
    addToCart: (product) => dispatch(addToCart(product)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);