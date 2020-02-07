import React, {Component} from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom'

class CategoryNav extends Component {
    
    render() {

    return (
        <>
            <Navbar collapseOnSelect>
                <Nav className="mr-auto" >
                    <Link to="/"> All </Link>
                </Nav>
                <Nav className="mr-auto">
                    <Link to="/products/apparel"> Apparel </Link>
                </Nav>
                <Nav className="mr-auto">
                    <Link to="/products/electronics"> Electronics </Link>
                </Nav>
                <Nav className="mr-auto">
                    <Link to="/products/miscellaneous"> Miscellaneous </Link>
                </Nav>
            </Navbar>
        </>
        )
    }
}

export default CategoryNav