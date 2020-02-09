import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export default function CategoryNav(props) {

    return (
        <>
            <Navbar collapseOnSelect>
                <Nav className="mr-auto" onClick={() => props.filterBy('')}>
                    <Link to="/" exact> Apparel</Link>
                </Nav>
                <Nav className="mr-auto" onClick={() => props.filterBy('Apparel')}>
                    <Link to="/products/apparel" exact> Apparel</Link>
                </Nav>
                <Nav className="mr-auto" onClick={() => props.filterBy('Electronics')}>
                    <Link to="/products/electronics" exact> Electronics </Link>
                </Nav>
                <Nav className="mr-auto" onClick={() => props.filterBy('Miscellaneous')}>
                    <Link to="/products/miscellaneous" exact> Miscellaneous </Link>
                </Nav>
            </Navbar>
        </>
    )
}


