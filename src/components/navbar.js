import React, { useRef, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { LiaGripLinesSolid } from "react-icons/lia";

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

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Navbar expand="lg" className="d-lg-inline d-none custom-navbar position-absolute top-0 start-0 w-100 px-4 p-font fw-bold" style={{ zIndex: 1000 }}>
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

      <div className="d-lg-none d-inline">
        <Navbar
          expand="lg"
          className="custom-navbar position-absolute top-0 start-0 w-100 px-4 py-3 d-flex justify-content-between align-items-center"
          style={{
            background: "transparent",
            zIndex: 1000,
          }}
        >
          {/* Logo */}
          <div className="logo" style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
            <img src="/logo_tutto.svg" alt="Tutto Passa" style={{ height: "60px" }} />
          </div>

          {/* Hamburger / Close icon */}
          <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)} style={{ cursor: "pointer", zIndex: 1100 }}>
            {menuOpen ? <LiaGripLinesSolid size={28} color="#000" /> : <LiaGripLinesSolid size={40} color="#000" />}
          </div>
        </Navbar>

        {/* Slide-out overlay menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.5 }}
              className="menu-overlay"
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                width: "100%",
                height: "100vh",
                backgroundColor: "#000",
                color: "#fff",
                zIndex: 1050,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              {/* Mobile header (logo + close icon) */}
              <div
                className="mobileHeader d-flex align-items-center justify-content-between w-100 px-4 py-3"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                }}
              >
                <motion.img
                  src="/logo_tutto.svg"
                  alt="Logo"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  style={{
                    filter: "invert(1)",
                    height: "80px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setMenuOpen(false);
                    navigate("/");
                  }}
                />
                <motion.div
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ delay: 0.5 }}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <FiX size={60} color="#fff" />
                </motion.div>
              </div>

              {/* Menu items */}
              <div
                className="menu-items d-flex flex-column align-items-center justify-content-center flex-grow-1"
                style={{
                  marginTop: "120px",
                }}
              >
                {["PRODUCT", "ABOUT", "FAQ", "BLOG", "FUNCTIONAL INGREDIENTS"].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="menu-item p-font text-center fw-bolder"
                    onClick={() => {
                      setMenuOpen(false);
                      navigate(item === "PRODUCT" ? "/products" : item === "ABOUT" ? "/about" : item === "FAQ" ? "/faqs" : item === "BLOG" ? "/blogs" : "/functional-ingredients");
                    }}
                    style={{
                      fontSize: "3dvh",

                      margin: "1rem 0",
                      cursor: "pointer",
                      letterSpacing: "1px",
                    }}
                  >
                    {item}
                  </motion.div>
                ))}
              </div>

              {/* Footer graphic */}
              <motion.img
                src="/assets/icons/badge (3).svg"
                alt="Universe"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                style={{ height: "20dvh", marginBottom: "2rem" }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default CustomNavbar;
