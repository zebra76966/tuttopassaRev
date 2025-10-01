import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const CustomNavbar = () => {
  const navigate = useNavigate();

  return (
    <Navbar expand="lg" className="custom-navbar position-absolute top-0 start-0 w-100 px-4 p-font fw-bold" style={{ zIndex: 1000 }}>
      <Container fluid className="d-flex justify-content-between align-items-center">
        {/* Left side links */}
        <Nav className="nav-left gap-5">
          <Nav.Link as={NavLink} to="/products">
            PRODUCT
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about">
            ABOUT
          </Nav.Link>
          <Nav.Link as={NavLink} to="/faqs">
            FAQ
          </Nav.Link>
        </Nav>

        {/* Center logo */}
        <div className="nav-logo">
          <img src="/logo_tutto.svg" alt="Tutto Passa" style={{ height: "120px" }} onClick={() => navigate("/")} />
        </div>

        {/* Right side link */}
        <Nav className="nav-right gap-5">
          <Nav.Link>BLOG</Nav.Link>
          <Nav.Link as={NavLink} to="/functional-ingredients">
            FUNCTIONAL INGREDIENTS
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
