import React, {Component} from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

class MainNav extends Component {
    render() {
      return (
        <Navbar bg="dark" expand="lg">
          <Navbar.Brand href="#home">UltimateStore</Navbar.Brand>
          <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search for a Product</Button>
            </Form>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="Shop by Category" id="basic-nav-dropdown">
                <NavDropdown.Item>All</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Apparel</NavDropdown.Item>
                <NavDropdown.Item>Shoes</NavDropdown.Item>
                <NavDropdown.Item>Electronics</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )
    }
  }
  
  export default MainNav;