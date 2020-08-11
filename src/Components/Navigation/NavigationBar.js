import React from "react";
import { Link } from "react-router-dom";

import { Navbar, Nav } from "react-bootstrap";

export default function NavigationBar() {
  return (
    <Navbar
      fixed="top"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      >
      <Navbar.Brand as={Link} to="/">
        <i className="fa fa-home mr-2"></i>
        Helb
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/feed">Feed</Nav.Link>
          <Nav.Link as={Link} to="/missing">Missing</Nav.Link>
          <Nav.Link as={Link} to="/ngo">NGO(s)</Nav.Link>
          <Nav.Link as={Link} to="/precautions">Precautions</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link style={{ color: "white" }} as={Link} to="/login">
            LOGIN / SIGNUP
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
