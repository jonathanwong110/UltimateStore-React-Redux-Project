import React, {Component} from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {Link} from 'react-router-dom'

class MainNav extends Component {

  render() {
    
    return (
      <>
        <Navbar bg="dark" variant="dark">
        <Link to="/">UltimateStore</Link>
          <Nav className="mr-auto">
          {/* <NavDropdown title="Shop By Category" id="basic-nav-dropdown">
            <NavDropdown.Item>All</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>Apparel</NavDropdown.Item>
            <NavDropdown.Item>Shoes</NavDropdown.Item>
            <NavDropdown.Item>Miscellaneous</NavDropdown.Item>
          </NavDropdown> */}
          <Link to="/cart">Cart</Link>
          </Nav>
        </Navbar>
      </>
    )
  }
}

export default MainNav;