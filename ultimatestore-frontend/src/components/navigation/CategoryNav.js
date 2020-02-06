import React, {Component} from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'

class CategoryNav extends Component {
    
    render() {

    return (
            <Nav className="justify-content-center">
                <Nav.Item>
                    <Link to="/products/apparel">Apparel</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/products/electronics">Electronics</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/products/miscellaneous">Miscellaneous</Link>
                </Nav.Item>
            </Nav>
        )
    }
}

export default CategoryNav


    

