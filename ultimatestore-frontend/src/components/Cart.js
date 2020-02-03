import React, {Component} from 'react';
import { Navbar, ListGroup } from 'react-bootstrap';

class Cart extends Component {
    
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                <Navbar.Brand>Cart</Navbar.Brand>
                </Navbar>
                <ListGroup>
                    <ListGroup.Item>{this.props.cart}</ListGroup.Item>
                </ListGroup>
            </div>
        )
    }
}

export default Cart