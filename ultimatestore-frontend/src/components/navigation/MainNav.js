import React, {Component} from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'

class MainNav extends Component {

  render() {
    
    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Link to="/" className="white-logo">UltimateStore</Link>
            <Nav className="mr-auto">
            </Nav>
            <Nav>
            <Link to="/cart" className="white-logo">Cart</Link>
            </Nav>
        </Navbar>
      </>
    )
  }
}

export default MainNav;