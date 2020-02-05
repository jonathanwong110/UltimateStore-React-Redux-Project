import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import ShowApparel from '../products/ShowApparel'
import ShowElectronics from '../products/ShowElectronics'

export default function CategoryNav(props) {

    return (
        <>
            <Nav className="justify-content-center">
                <Nav.Item>
                    <Link to="/products/apparel">Apparel</Link>
                    <ShowApparel products={props.products}/>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/products/electronics">Electronics</Link>
                    <ShowElectronics products={props.products}/>
                </Nav.Item>
            </Nav>
        </>
        )
    }

    

