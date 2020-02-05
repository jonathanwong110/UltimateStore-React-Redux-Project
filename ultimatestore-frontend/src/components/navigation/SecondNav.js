import React from 'react'
import { Nav } from 'react-bootstrap';


export default function SecondNav(props) {

    return (
        <>
        <Nav className="justify-content-center" activeKey="/home">
            <Nav.Item>
            <Nav.Link href="/apparel">Apparel</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link href="/electronics">Electronics</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link href="/miscellaneous">Miscellaneous</Nav.Link>
            </Nav.Item>
        </Nav>
        </>
    )


}