import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./contact.css"; // This is for custom styling
import { motion } from "framer-motion";

const ConnectToOurUniverse = () => {
  return (
    <div className="connect-section ch-100 d-flex align-items-center">
      <img src="/assets/pattern/sea-weed1.svg" className="patern-top left patAnim" />
      <img src="/assets/pattern/sea-weed1.svg" className="patern-top right patAnim" />
      <img src="/assets/pattern/sea-weed2.svg" className="patern-bottom left patAnim" />
      <img src="/assets/pattern/sea-weed2.svg" className="patern-bottom right patAnim" />

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 1000, damping: 100, delay: 0.2, duration: 0.5 }}
        className="text-center container-fluid"
      >
        <h1 className="display-1-c my-3 text-black">CONNECT TO OUR UNIVERSE</h1>
        <p className="fs-4 text-black dCFont">
          FROM THE WISDOM OF NATURE
          <br />
          WE CREATED TUTTO PASSA WITH ONE CLEAR MISSION:
          <br />
          TO OFFER FUNCTIONAL DRINKS THAT HELP
        </p>
        <Form className="connect-form pt-lg-5 pt-3">
          <Row className="justify-content-center">
            <Col xs={12} md={5} lg={4} xl={3} className="mb-3">
              <Form.Control type="text" placeholder="NAME" className="form-input fw-bold" />
            </Col>
            <Col xs={12} md={5} lg={4} xl={3} className="mb-3">
              <Form.Control type="email" placeholder="E-MAIL" className="form-input fw-bold" />
            </Col>
          </Row>
          <Form.Group className="mb-3 text-center d-flex justify-content-md-center justify-content-start  gap-5 my-4">
            <Form.Check
              type="checkbox"
              id="newsletter-checkbox"
              label="I AGREE TO RECEIVE NEWSLETTERS ABOUT TUTTO PASSA NEWS"
              className="checkbox-label fs-5 dCFont text-md-center text-start fw-bold p-font text-black"
            />
          </Form.Group>
          <Button variant="info" type="submit" size="lg" className="subscribe-btn mt-lg-4 mt-1 px-lg-5 px-3 py-lg-4 py-2  rounded-pill border-0">
            <span className="p-font fw-bold text-black fs-6 px-lg-5 px-3"> SUBSCRIBE</span>
          </Button>
        </Form>
      </motion.div>
    </div>
  );
};

export default ConnectToOurUniverse;
