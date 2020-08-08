import React from "react";
import { Link } from 'react-router-dom';

import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";

export default function NavigationBar() {
  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/" className="fa fa-home"></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/volunteering">VOLUNTEERING</Nav.Link>
          <NavDropdown title="HELP CENTER" id="collasible-nav-dropdown">
            <NavDropdown.Item href="physical">Physical assistance</NavDropdown.Item>
            <NavDropdown.Item href="psycological">Psycological assistance</NavDropdown.Item>
            <NavDropdown.Item href="financial">Financial support</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="humanitarian">Basic need request</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link style={{color:"white"}} eventKey={2} href="#todo">
            Arabic
          </Nav.Link>
          <Nav.Link style={{color:"white"}} eventKey={2} href="/helpus">
            HELP US !
          </Nav.Link>
          <Button variant="outline-success">LOGIN</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
