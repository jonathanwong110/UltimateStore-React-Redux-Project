import React, {Component} from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

class MainNav extends Component {
    render() {
      return (
        <Navbar bg="dark" expand="lg">
          <Navbar.Brand href="#home">UltimateStore</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <NavDropdown title="Shop by Category" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Apparel</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Shoes</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Electronics</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Filler</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search for a Product</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      )
    }
  }
  
  export default MainNav;