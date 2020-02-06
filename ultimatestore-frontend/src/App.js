import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import ProductsContainer from './containers/ProductsContainer'
import CartContainer from './containers/CartContainer'
import MainNav from './components/navigation/MainNav'
import ShowApparel from './components/products/ShowApparel'
import ShowElectronics from './components/products/ShowElectronics'
import { connect } from 'react-redux'

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <MainNav/>
            <Switch>
              <Route exact path="/" render={routerProps => <ProductsContainer {...routerProps} products={this.props.products}/>} />/>
              <Route exact path="/cart" render={routerProps => <CartContainer {...routerProps} cart={this.props.cart}/>} />/>
              <Route exact path="/products/apparel" render={routerProps => <ShowApparel {...routerProps} products={this.props.products}/>} />/>
              <Route exact path="/products/electronics" render={routerProps => <ShowElectronics {...routerProps} products={this.props.products}/>} />/>
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

export default connect(mapStateToProps)(App);