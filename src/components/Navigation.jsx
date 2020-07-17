import React from "react";
import { Navbar, Nav } from "react-bootstrap";

import { Link } from "react-scroll";

function Navigation() {
  return (
    <Navbar expand="lg" className="nav" fixed="top">
      {/* Link tag is used for the smooth scroll on the page */}
      <Link activeClass="active" to="home" smooth={true} duration={700}>
        <Navbar.Brand className="logo" href="#home">
          ISHWAR
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link activeClass="active" to="home" smooth={true} duration={700}>
            {/* href is used as well so that the line below the selected nav link could change accordingly */}
            <Nav.Link href="#home">HOME</Nav.Link>
          </Link>
          <Link activeClass="active" to="about" smooth={true} duration={700}>
            <Nav.Link href="#about">ABOUT US</Nav.Link>
          </Link>
          <Link activeClass="active" to="products" smooth={true} duration={700}>
            <Nav.Link href="#products">PRODUCTS</Nav.Link>
          </Link>
          <Link activeClass="active" to="contact" smooth={true} duration={700}>
            <Nav.Link href="#contact">CONTACT</Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
