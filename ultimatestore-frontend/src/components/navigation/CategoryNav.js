import React, {Component} from 'react';
import { Nav, Navbar,Button } from 'react-bootstrap';

export default function CategoryNav(props) {

    return (
        <>
            <Navbar collapseOnSelect>
                <Nav className="mr-auto" onClick={() => props.filterBy('')}>
                    <Button variant="link">All</Button>
                </Nav>
                <Nav className="mr-auto" onClick={() => props.filterBy('Apparel')}>
                    <Button variant="link">Apparel</Button>
                </Nav>
                <Nav className="mr-auto" onClick={() => props.filterBy('Electronics')}>
                    <Button variant="link">Electronics</Button>
                </Nav>
                <Nav className="mr-auto" onClick={() => props.filterBy('Miscellaneous')}>
                    <Button variant="link">Miscellaneous</Button>
                </Nav>
            </Navbar>
        </>
    )
}


