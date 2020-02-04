import React, {Component} from 'react';
import { Navbar, Table, Button } from 'react-bootstrap';

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
                                <tr key={product[0]}>
                                    <td>
                                        <strong>{product[1]}</strong>
                                        <br></br>
                                        <img src={product[4]} alt={product[1]}height='100px' width='100px'>
                                        </img>
                                    </td>
                                    <td>
                                        {product[3]}
                                    </td>
                                    <td>
                                        {product[2]}
                                    </td>
                                    <td>
                                        <Button variant="danger" onClick={() => this.props.removeFromCart(product[0])}>Remove from Cart</Button>
                                    </td>
                                </tr>
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