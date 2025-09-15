import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./about.css"; // for custom fonts + styles
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <div className="about-section bg-black text-white  ch-100">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="container-fluid">
        <div className="d-flex align-items-center justify-content-between mb-4">
          <h6 className="p-font fs-3">ABOUT US</h6> <h6 className="p-font fs-3"> MORE →</h6>
        </div>
        <Row className="align-items-start">
          {/* Left funky heading */}

          <Col md={4} className="mb-4 mb-md-0">
            <h2 className="funky-text">
              FROM THE <br />
              <span className="txt-info">WISDOM</span> OF <br />
              <span className="txt-warning">NATURE</span> <br />
              TO THE <br />
              <span className="txt-primary">RHYTHM</span> OF <br />
              NOW
            </h2>
          </Col>

          {/* Middle paragraph */}
          <Col md={4} className="mb-4 mb-md-0">
            <p className="fs-4">
              FROM THE WISDOM OF NATURE WE CREATED TUTTO PASSA WITH ONE CLEAR MISSION: TO OFFER FUNCTIONAL DRINKS THAT HELP YOU FEEL BETTER IN YOUR MIND, BODY, AND SOUL – WITHOUT SACRIFICING TASTE,
              ENERGY, OR TRUTH.
            </p>
            <p className="fs-4">
              BECAUSE LIFE MOVES FAST. AND IN A WORLD FULL OF NOISE, PRESSURE, AND BURNOUT, WE BELIEVE YOUR DRINK SHOULD DO MORE THAN JUST HYDRATE – IT SHOULD SUPPORT YOU IN EVERY STATE OF MIND.
            </p>
          </Col>

          {/* Right image */}
          <Col md={4} className="text-center position-relative">
            <div className="image-container">
              <img
                src="/assets/about.gif" // replace with your image
                alt="Sunflower field"
                className="img-fluid"
              />
              <div className="overlay-text">
                <img src="/logo_tutto.svg" style={{ filter: "invert(1)" }} />
              </div>
            </div>
          </Col>
        </Row>
      </motion.div>
    </div>
  );
};

export default AboutSection;
