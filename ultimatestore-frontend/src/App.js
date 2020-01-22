import React from 'react';
import './App.css';
import ProductsContainer from './containers/ProductsContainer'

class App extends React.Component {

  render() {
    return (
      <div className="Products">
        <ProductsContainer products={this.props.products}/>
      </div>
    );
  }
}

export default App;
