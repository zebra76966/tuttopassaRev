import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./tuttoPassaMatch.css"; // custom styles
import { motion } from "framer-motion";

const TuttoPassaMatch = () => {
  return (
    <div className="match-section">
      {/* Background Elements */}

      <div className="patterns-wrapper">
        <motion.div initial={{ opacity: 0, y: -300 }} whileInView={{ opacity: 1, y: 0 }} transition={{ type: "spring", stiffness: 1000, damping: 100, delay: 0.5 }} className="sun-wrapper">
          <div className="bg-sun sun-top"></div>
          <div className="bg-sun sun-left"></div>
          <div className="bg-sun sun-right"></div>
          <div className="bg-cloud cloud-left"></div>
          <div className="bg-cloud cloud-right"></div>

          <div className="bg-cloud cloud-left big"></div>
          <div className="bg-cloud cloud-right big"></div>
        </motion.div>

        {/* <div className="cloud-wrapper-left">
          <div className="bg-cloud cloud-top"></div>
        </div> */}

        {/* <div className="cloud-wrapper-right">
        <div className="bg-cloud cloud-top"></div>
        <div className="bg-cloud cloud-right"></div>
      </div> */}
      </div>

      <Container fluid className="text-center pb-5 pt-4 ">
        <p className="subtitle">LET’S FIND YOUR FLOW</p>
        <h1 className="display-1-c1">
          ANSWER & DISCOVER YOUR <br /> TUTTO PASSA MATCH.
        </h1>
        <Button variant="warning" size="lg" className="rounded-pill  px-5 py-3 fw-bold fs-6 my-4">
          <span className="p-font py-5 px-5 "> LET’S GO! </span>
        </Button>

        {/* Cans Row */}
        <motion.div
          initial={{ opacity: 0, y: 300 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 1000, damping: 100, delay: 0.2, duration: 0.5 }}
          className="position-relative w-100"
        >
          <div className="container">
            <Row className="justify-content-center mt-5 can-row">
              <Col xs={12} md={4} className="d-flex justify-content-center">
                <img src="/assets/products/heroLaven.png" alt="Lavender Mask" className="can-img left" />
              </Col>
              <Col xs={12} md={4} className="d-flex justify-content-center">
                <img src="/assets/products/wave.png" alt="Tropical Wave" className="can-img middle" />
              </Col>
              <Col xs={12} md={4} className="d-flex justify-content-center">
                <img src="/assets/products/heroSun.png" alt="Peach Breeze" className="can-img right" />
              </Col>
            </Row>
          </div>

          <div className="lavendar-pattern ">
            <div className="lav-pat-wrapper left">
              <img src="assets/pattern/wavePat.svg" className="lav left" />
              <img src="assets/pattern/waves-merge.svg" className="lav " />
              <img src="assets/pattern/wavePat.svg" className="lav right" />
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default TuttoPassaMatch;
