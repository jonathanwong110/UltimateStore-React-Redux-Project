import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import ProductsContainer from './containers/ProductsContainer'
import CartContainer from './containers/CartContainer'
import MainNav from './components/navigation/MainNav'
import ShowApparel from './components/categories/ShowApparel'
import ShowElectronics from './components/categories/ShowElectronics'
import ShowMiscellaneous from './components/categories/ShowMiscellaneous'
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'
import { fetchProducts, searchProducts, deleteProduct, addProduct } from './actions/productsActions'

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <MainNav/>
            <Switch>
              <Route exact path="/" render={routerProps => <ProductsContainer {...routerProps} {...{...this.props}} />} />
              <Route exact path="/cart" render={routerProps => <CartContainer {...routerProps} cart={this.props.cart}/>} />
              <Route exact path="/products/apparel" render={routerProps => <ShowApparel {...routerProps} {...{...this.props}}/>} />
              <Route exact path="/products/electronics" render={routerProps => <ShowElectronics {...routerProps} {...{...this.props}}/>} />
              <Route exact path="/products/miscellaneous" render={routerProps => <ShowMiscellaneous {...routerProps} {...{...this.props}}/>} />
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
    fetchProducts: () => dispatch(fetchProducts()),
    searchProducts: () => dispatch(searchProducts()),
    addProduct: (product) => dispatch(addProduct(product)),
    deleteProduct: (id) => dispatch(deleteProduct(id)),
    addToCart: (product) => dispatch(addToCart(product)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);