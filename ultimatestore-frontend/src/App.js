import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import ProductsContainer from './containers/ProductsContainer'
import CartContainer from './containers/CartContainer'
import MainNav from './components/MainNav'
import SideNav from './components/products/SideNav'

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <MainNav/>
          <SideNav/>
            <Switch>
              <Route exact path="/" render={routerProps => <ProductsContainer {...routerProps} products={this.props.products}/>} />/>
              <CartContainer cart={this.props.cart}/>
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;