import React from "react";
import { Navbar, Container, NavbarBrand } from "react-bootstrap";

export default function NavigationFooter() {
  return (
    // <div className="fixed-bottom">
      <Navbar sticky="bottom" expand="lg" bg="dark" variant="dark">
        <Container>
          <NavbarBrand>Footer</NavbarBrand>
        </Container>
      </Navbar>
    // </div>
  );
}
