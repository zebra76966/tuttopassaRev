import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./functionalCard.css";

const FunctionalCardSec = () => {
  return (
    <section className="ch-100 d-flex align-items-center position-relative justify-content-center" style={{ overflowX: "hidden" }}>
      <Container className="text-center" style={{ zIndex: 10 }}>
        <Row className="justify-content-center">
          <Col md={5} className="mb-4 px-md-5 px-3">
            <div className="flip-card ">
              <div className="flip-card-inner ">
                {/* Front */}
                <div className="flip-card-front d-flex align-items-center justify-content-center p-2 ">
                  <div className="pattern-card position-relative ">
                    <img src="/assets/pattern/cardNootropics.svg" alt="Card Nootropic" className="cardImg" />
                    <img src="/assets/pattern/cardNootropics.svg" alt="Card Nootropic" className="cardImg del2" />
                    <h3 className="card-title fs-2 py-3 p-font fw-bold">NOOTROPICS</h3>
                  </div>
                </div>
                {/* Back */}
                <div className="flip-card-back d-flex  justify-content-center">
                  <div className="info-text p-3">
                    <h6 className="p-font fs-4 mb-4 fw-bold">For Balance, Energy & Stress Resilience</h6>
                    <p className="lead fs-5 ">
                      A master of endurance and stress defense. Rhodiadaptogens help your body adapt to stress, regulate energy levels, and restore internal balance. <br /> Think of them as gentle
                      allies that support you through highs, lows, and everything in between. They power you through chaos with calm strength and mental clarity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={5} className="mb-4 px-md-5 px-3">
            <div className="flip-card ">
              <div className="flip-card-inner ">
                {/* Front */}
                <div className="flip-card-front d-flex align-items-center justify-content-center p-2 ">
                  <div className="pattern-card position-relative ">
                    <img src="/assets/pattern/cardAdaptogen.svg" alt="Card Adaptogens" className="cardImg" />
                    <img src="/assets/pattern/cardAdaptogen.svg" alt="Card Adaptogens" className="cardImg del2" />
                    <h3 className="card-title fs-2 py-3 p-font fw-bold">ADAPTOGENS</h3>
                  </div>
                </div>
                {/* Back */}
                <div className="flip-card-back d-flex  justify-content-center">
                  <div className="info-text p-3">
                    <h6 className="p-font fs-4 mb-4 fw-bold">For Balance, Energy & Stress Resilience</h6>
                    <p className="lead fs-5 ">
                      A master of endurance and stress defense. Rhodiadaptogens help your body adapt to stress, regulate energy levels, and restore internal balance. <br /> Think of them as gentle
                      allies that support you through highs, lows, and everything in between. They power you through chaos with calm strength and mental clarity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FunctionalCardSec;
