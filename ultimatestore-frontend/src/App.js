import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import ProductsContainer from './containers/ProductsContainer'
import CartContainer from './containers/CartContainer'
import MainNav from './components/navigation/MainNav'

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <MainNav/>
            <Switch>
              <Route exact path="/"> <ProductsContainer/> </Route>
              <Route exact path="/cart"> <CartContainer/> </Route>
              <Route exact path="/products/apparel"> <ProductsContainer/> </Route>
              <Route exact path="/products/electronics"> <ProductsContainer/> </Route>
              <Route exact path="/products/miscellaneous"> <ProductsContainer/> </Route>
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;