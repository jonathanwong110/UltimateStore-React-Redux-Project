import React, {Component} from 'react';
import { Navbar } from 'react-bootstrap';

class Cart extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                <Navbar.Brand>Cart</Navbar.Brand>
                </Navbar>
            </div>
        )
    }
}

export default Cart