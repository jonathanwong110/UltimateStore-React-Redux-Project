import React, {Component} from 'react';
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';

class MainNav extends Component {

  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">UltimateStore</Navbar.Brand>
          <Nav className="mr-auto">
          <NavDropdown title="Shop By Category" id="basic-nav-dropdown">
            <NavDropdown.Item>All</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>Apparel</NavDropdown.Item>
            <NavDropdown.Item>Shoes</NavDropdown.Item>
            <NavDropdown.Item>Miscellaneous</NavDropdown.Item>
          </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search for a Product" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
      </>
    )
  }
}

export default MainNav;