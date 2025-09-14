import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className="custom-navbar position-absolute top-0 start-0 w-100 px-4 p-font fw-bold" style={{ zIndex: 1000 }}>
      <Container fluid className="d-flex justify-content-between align-items-center">
        {/* Left side links */}
        <Nav className="nav-left gap-5">
          <Nav.Link href="#product">PRODUCT</Nav.Link>
          <Nav.Link href="#about">ABOUT</Nav.Link>
          <Nav.Link href="#faq">FAQ</Nav.Link>
        </Nav>

        {/* Center logo */}
        <div className="nav-logo">
          <img src="/logo_tutto.svg" alt="Tutto Passa" style={{ height: "120px" }} />
        </div>

        {/* Right side link */}
        <Nav className="nav-right gap-5">
          <Nav.Link href="#blog">BLOG</Nav.Link>
          <Nav.Link href="#blog">FUNCTIONAL INGREDIENTS</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
