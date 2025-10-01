import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const AboutContent = () => {
  return (
    <Container fluid className="px-lg-5 px-2 my-5 py-5">
      <Row className="align-items-center px-lg-5 px-2 mb-5  text-uppercase">
        <Col lg={6}>
          <h5 className="fs-1 p-font " style={{ fontWeight: "1000" }}>
            WHY TUTTO PASSA?
          </h5>

          <p className="lead mt-5">
            We created Tutto Passa with one clear mission: To offer functional drinks that help you feel better in your mind, body, and soul - without sacrificing taste, energy, or truth. Because life
            moves fast. And in a world full of noise, pressure, and burnout, we believe your drink should do more than just hydrate - it should support you in every state of mind.
          </p>
        </Col>
        <Col lg={6}>
          <img src="/assets/aboutPeople.png" style={{ height: "70dvh", objectFit: "contain" }} className="w-100" />
        </Col>
      </Row>
      <Row className="align-items-center px-lg-5 px-2 mb-5  text-uppercase">
        <Col lg={6}>
          <img src="/assets/aboutPeople.png" style={{ height: "70dvh", objectFit: "contain" }} className="w-100" />
        </Col>
        <Col lg={6}>
          <h5 className="fs-1 p-font " style={{ fontWeight: "1000" }}>
            our misRooted in nature,made for real lifesion
          </h5>

          <p className="lead mt-5">
            Our formulas combine adaptogens, nootropics, and plant based ingredients to support clarity, calm, or clean energy - whatever the moment calls for. Each can is carefully crafted to meet
            you where you are and gently move you forward. No fake promises. No harsh crashes. Just functional drinks designed with intention.
          </p>
        </Col>
      </Row>
      <Row className="align-items-center px-lg-5 px-2 mb-5 text-uppercase">
        <Col lg={6}>
          <h5 className="fs-1 p-font " style={{ fontWeight: "1000" }}>
            Inspired by change. Built for presence.
          </h5>

          <p className="lead mt-5">
            The name Tutto Passa comes from an Italian phrase meaning everything passes. It’s a quiet but powerful reminder that nothing is permanent. That the highs and lows, stress and stillness -
            all of it flows. And the only moment that truly belongs to us is right now. We honor that philosophy in everything we make: drinks that don’t just taste good, but feel right - made to keep
            you grounded, present, and fully alive in the moment you’re in.
          </p>
        </Col>
        <Col lg={6}>
          <img src="/assets/aboutPeople.png" style={{ height: "70dvh", objectFit: "contain" }} className="w-100" />
        </Col>
      </Row>
    </Container>
  );
};

export default AboutContent;
