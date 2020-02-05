import React from 'react'
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export default function CategoryNav(props) {

    console.log('props', props)

    return (
        <>
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
        </>
    )


}