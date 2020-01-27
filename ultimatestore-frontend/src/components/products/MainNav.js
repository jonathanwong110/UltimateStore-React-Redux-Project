import React, {Component} from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

class MainNav extends Component {
    render() {
      return (
        <>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">UltimateStore</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link>Shop By Category</Nav.Link>
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