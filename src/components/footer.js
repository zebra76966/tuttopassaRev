import React, { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Draggable from "react-draggable";
import "./footer.css";
import { useNavigate } from "react-router-dom";

// Import your badge images (kept inside src, so import is fine)
import badgePeaceOutThoughts from "./badges/tutto_passa_text.svg";
import badgeMushroom from "./badges/tutto_passa_universe.svg";
import badgeCreatureBlue from "./badges/creature_blue.svg";
import badgeCreaturePurple from "./badges/creature_purple.svg";
import badgeTuttoPassaText from "./badges/logo_tutto.svg";

const FooterComponent = () => {
  // refs for draggable elements
  const badge1Ref = useRef(null);
  const badge2Ref = useRef(null);
  const badge3Ref = useRef(null);
  const badge4Ref = useRef(null);
  const badge5Ref = useRef(null);

  const navigate = useNavigate();

  const isLargeScreen = window.innerWidth >= 992;

  const badge1Default = isLargeScreen ? { x: 165, y: -140 } : { x: 50, y: -140 };
  const badge2Default = isLargeScreen ? { x: 150, y: -132 } : { x: 40, y: -130 };

  return (
    <footer className="app-footer d-flex align-items-center px-xxl-5 px-2">
      <Container fluid className="px-xxl-5 px-3">
        <Row>
          <Col md={7} className="footer-left-content pt-md-0 pt-5">
            <h5 className="p-font mb-4 text-white fs-4">HELLO THERE</h5>
            <h2 className="p-font display-5 tFoFONT fw-bolder">
              WELCOME TO THE
              <br />
              TUTTO PASSA UNIVERSE
            </h2>
            <Row className="footer-links mt-4 py-md-5 py-3 ">
              <Col md={4}>
                <p className="fs-6 mb-3" onClick={() => navigate("/products")}>
                  OUR PRODUCTS
                </p>
                <p className="fs-6 mb-3">FIND US</p>
                <p className="fs-6 mb-3">CONTACT US</p>
              </Col>
              <Col md={4}>
                <p className="fs-6 mb-3" onClick={() => navigate("/faqs")}>
                  FAQ
                </p>
                <p className="fs-6 mb-3" onClick={() => navigate("/about")}>
                  ABOUT US
                </p>
                <p className="fs-6 mb-3" onClick={() => navigate("/blogs")}>
                  BLOG
                </p>
              </Col>
              <Col md={4}>
                <p className="fs-6 mb-3" onClick={() => navigate("/functional-ingredients")}>
                  FUNCTIONAL INGREDIENTS
                </p>
                <p className="fs-6 mb-3" onClick={() => navigate("/policy")}>
                  PRIVACY POLICY
                </p>
              </Col>
            </Row>
            <Row className="footer-bottom mt-5 pt-3 border-top">
              <Col xs={12} md={4} className="text-md-start text-start">
                <p className="fs-6 mb-3">&copy; 2025 NEWYORK</p>
              </Col>
              <Col xs={12} md={4} className="text-md-center text-start" onClick={() => navigate("/policy")} style={{ cursor: "pointer" }}>
                <p className="fs-6 mb-3">PRIVACY POLICY</p>
              </Col>
              <Col xs={12} md={4} className="text-md-end text-start">
                <p className="fs-6 mb-3">HELLO@TUTTOPASSA.COM</p>
              </Col>
            </Row>
          </Col>

          <Col md={5} className="footer-badges-area">
            <Draggable nodeRef={badge1Ref} bounds="parent" defaultPosition={badge1Default}>
              <div ref={badge1Ref}>
                <img src={badgePeaceOutThoughts} alt="Peace Out Thoughts" className="footer-badge badge-peace" />
              </div>
            </Draggable>

            <Draggable nodeRef={badge2Ref} bounds="parent" defaultPosition={badge2Default}>
              <div ref={badge2Ref}>
                <img src={badgeMushroom} alt="Tutto Passa Universe Mushroom" className="footer-badge badge-mushroom" />
              </div>
            </Draggable>

            <Draggable nodeRef={badge3Ref} bounds="parent" defaultPosition={{ x: -260, y: 48 }}>
              <div ref={badge3Ref}>
                <img src={badgeCreatureBlue} alt="Blue Creature" className="footer-badge badge-blue-creature" />
              </div>
            </Draggable>

            <Draggable nodeRef={badge4Ref} bounds="parent" defaultPosition={{ x: -300, y: 49 }}>
              <div ref={badge4Ref}>
                <img src={badgeCreaturePurple} alt="Purple Creature" className="footer-badge badge-purple-creature" />
              </div>
            </Draggable>

            <Draggable nodeRef={badge5Ref} bounds="parent" defaultPosition={{ x: -374, y: 53 }}>
              <div ref={badge5Ref}>
                <img src={badgeTuttoPassaText} alt="Tutto Passa Text" className="footer-badge badge-tutto-passa-text" />
              </div>
            </Draggable>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComponent;
