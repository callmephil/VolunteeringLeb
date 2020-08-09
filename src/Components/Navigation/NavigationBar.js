import React from "react";
import { Link } from "react-router-dom";

import { Navbar, Nav, Button } from "react-bootstrap";

export default function NavigationBar() {
  return (
    <Navbar
      fixed="top"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      style={{ padding: "10px 15px" }}>
      <Navbar.Brand as={Link} to="/" className="fa fa-home"> Helb</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          {/* <Nav.Link as={Link} to="/media">
            MEDIA
          </Nav.Link>
          <NavDropdown title="HELP CENTER" id="collasible-nav-dropdown">
            <NavDropdown.Item href="physical">Physical assistance</NavDropdown.Item>
            <NavDropdown.Item href="psycological">Psycological assistance</NavDropdown.Item>
            <NavDropdown.Item href="financial">Financial support</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="humanitarian">Basic need request</NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
        <Nav>
          <Button variant="outline-info">AR</Button>
          <Nav.Link eventKey={2} href="/about">
            ABOUT US
          </Nav.Link>
          <Nav.Link style={{ color: "white" }}  as={Link} to="/login">
            LOGIN
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
