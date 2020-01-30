import React from 'react';
import './App.css';
import ProductsContainer from './containers/ProductsContainer'
import CartContainer from './containers/CartContainer'

class App extends React.Component {

  render() {
    return (
      <div className="Products">
        <ProductsContainer products={this.props.products}/>
        <CartContainer/>
      </div>
    );
  }
}

export default App;
