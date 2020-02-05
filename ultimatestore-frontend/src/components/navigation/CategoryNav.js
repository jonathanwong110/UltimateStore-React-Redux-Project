import React from 'react'
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import ShowCategory from '../products/ShowCategory'

export default function CategoryNav(props) {

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
            <ShowCategory products={props.products}/>
        </Nav>
        </>
    )


}