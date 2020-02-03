import React, {Component} from 'react';
import { Navbar, Table } from 'react-bootstrap';

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
                        <th>Image</th>
                        <th>Price</th>
                        <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.cart.map(product => {
                            return (
                                <tr key={product[0]}>
                                    <td>
                                        {product[1]}
                                    </td>
                                    <td>
                                        <img src={product[4]} height='100px' width='100px'>
                                        </img>
                                    </td>
                                    <td>
                                        {product[2]}
                                    </td>
                                    <td>
                                        {product[3]}
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