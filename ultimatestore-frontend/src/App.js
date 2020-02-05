import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import ProductsContainer from './containers/ProductsContainer'
import CartContainer from './containers/CartContainer'
import MainNav from './components/navigation/MainNav'
import CategoryNav from './components/navigation/CategoryNav'

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <MainNav/>
            <Switch>
              <Route exact path="/" render={routerProps => <ProductsContainer {...routerProps} products={this.props.products}/>} />/>
              <Route exact path="/cart" render={routerProps => <CartContainer {...routerProps} cart={this.props.cart}/>} />/>
              <Route exact path="/products/" render={routerProps => <CategoryNav {...routerProps} products={this.props.products}/>} />/>
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;