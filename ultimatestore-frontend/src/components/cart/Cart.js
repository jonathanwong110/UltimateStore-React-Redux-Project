import React from 'react';
import { Navbar, Table } from 'react-bootstrap';
import CartProduct from './CartProduct'

export default function Cart(props) {

    const { cart } = props;
    
    return (
        <>
        <br></br>
        <Navbar>
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
                {cart.map(product => {
                    return (
                    <CartProduct key={product[0]} cartProduct={product} removeFromCart={props.removeFromCart}/>
                            )
                        }
                    )
                }
            </tbody>
        </Table>
        </>
    )
}


