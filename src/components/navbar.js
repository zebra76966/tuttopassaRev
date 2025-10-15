import React, { useRef, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";

const CustomNavbar = () => {
  const navigate = useNavigate();
  const holdTimer = useRef(null);
  const progressTimer = useRef(null);
  const [progress, setProgress] = useState(0);
  const [holding, setHolding] = useState(false);

  const HOLD_DURATION = 1000; // 1 second

  const startHold = () => {
    setHolding(true);
    let startTime = Date.now();

    progressTimer.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min((elapsed / HOLD_DURATION) * 100, 100);
      setProgress(pct);
      if (pct >= 100) {
        clearInterval(progressTimer.current);
        navigate("/create-blog");
        setHolding(false);
        setProgress(0);
      }
    }, 10);
  };

  const endHold = (triggerNormal = true) => {
    clearInterval(progressTimer.current);
    if (holding) {
      setHolding(false);
      setTimeout(() => setProgress(0), 200); // smooth reset after fade
    }
    if (triggerNormal && progress < 100) {
      navigate("/blogs");
    }
  };

  // Mouse and touch handlers
  const handleMouseDown = () => startHold();
  const handleMouseUp = () => endHold(true);
  const handleMouseLeave = () => endHold(false);
  const handleTouchStart = handleMouseDown;
  const handleTouchEnd = handleMouseUp;

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
          <img src="/logo_tutto.svg" alt="Tutto Passa" style={{ height: "120px", cursor: "pointer" }} onClick={() => navigate("/")} />
        </div>

        {/* Right side link */}
        <Nav className="nav-right gap-5">
          <div
            className="position-relative d-inline-block"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            style={{ cursor: "pointer", userSelect: "none" }}
          >
            <span style={{ position: "relative", zIndex: 2, top: "20%" }}>BLOG</span>

            {/* Progress bar only visible while holding */}
            {holding && (
              <div
                style={{
                  position: "absolute",
                  bottom: "-2px",
                  left: 0,
                  height: "3px",
                  width: `${progress}%`,
                  backgroundColor: "#000",
                  borderRadius: "2px",
                  opacity: holding ? 1 : 0,
                  transition: holding ? "width 0s linear, opacity 0.2s ease" : "opacity 0.3s ease, width 0s ease 0.3s",
                }}
              />
            )}
          </div>

          <Nav.Link as={NavLink} to="/functional-ingredients">
            FUNCTIONAL INGREDIENTS
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
