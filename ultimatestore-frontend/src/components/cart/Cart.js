import React, {Component} from 'react';
import { Navbar, Table } from 'react-bootstrap';
import CartProduct from './CartProduct'

class Cart extends Component {
    
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                <Navbar.Brand>Cart</Navbar.Brand>
                </Navbar>
                <Table>
                    <thead>
                        <tr>
                        <th>Product</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.cart.map(product => {
                            return (
                            <CartProduct key={product[0]} cartProduct={product} removeFromCart={this.props.removeFromCart}/>
                                    )
                                }
                            )
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Cart