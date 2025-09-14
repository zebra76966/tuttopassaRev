import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./hero.css";

const Hero = () => {
  const [isActive, setIsActive] = useState(0);
  const [isForward, setIsForward] = useState(true);

  useEffect(() => {
    let direction = 1; // 1 = forward, -1 = backward

    const interval = setInterval(() => {
      setIsActive((prev) => {
        if (prev === 2) {
          direction = -1;

          setIsForward(false);
        } // reverse at max
        if (prev === 0) {
          direction = 1;

          setIsForward(true);
        } // forward at min
        return prev + direction;
      });
    }, 5000); // change every second

    return () => clearInterval(interval); // cleanup on unmount
  }, []);
  return (
    <section className="hero d-flex align-items-center position-relative" style={{ overflowX: "hidden" }}>
      <div className={`heroBg1 ${isActive > 0 ? "revealAnim" : "revertAnim"}`}></div>
      <div className={`heroBg2 ${isActive > 1 ? "revealAnim" : "revertAnim"}`}></div>
      <div className="heroBg3"></div> {/* Static background layer */}
      <Container fluid className="contentContainer">
        <Row className="align-items-center">
          {/* Left Side Content */}
          <Col md={6} className="px-5 text-dark">
            <p className={`fs-4 fw-bold ${isActive == "0" ? "revealTxt" : "d-none"}`}>LAVENDER HAZE {isActive}</p>
            <p className={`fs-4 fw-bold ${isActive == "1" ? "revealTxt" : "d-none"}`}>PEACH SUNRISE {isActive}</p>
            <p className={`fs-4 fw-bold ${isActive == "2" ? "revealTxt" : "d-none"}`}>TROPICAL WAVE {isActive}</p>
            <h1 className="heroFont ">
              FOR EVERY <br /> STATE OF MIND
            </h1>
            <p className="p-font fs-5 text-uppercase">A gentle, dreamy blend designed to help you slow down and let go.</p>
            <Button size="lg" className={` ${isActive == 0 ? "btn-primary" : isActive == 1 ? "btn-warning" : "btn-info"} rounded-pill text-dark fs-6 fw-bold px-5 py-3 mt-4 transDelay`}>
              CALL TO ACTION
            </Button>
          </Col>

          {/* Right Side Content */}
          <Col md={6} className="d-flex justify-content-center align-items-center position-relative ">
            <div className="imgSlider">
              <div className={`slide1  ${isActive > 0 ? "revealAnim del1" : "revertAnim del2"}`}>
                <img src="/assets/products/heroLaven.png" alt="Tutto Passa Can" className="hero-img img1" />
              </div>
              <div className={`slide2  ${isActive > 1 ? "revealAnim del1" : "revertAnim del2"}`}>
                <img src="/assets/products/heroSun.png" alt="Tutto Passa Can" className="hero-img img2" />
              </div>
              <div className={`slide3 `}>
                <img src="/assets/products/heroWave.png" alt="Tutto Passa Can" className="hero-img img3" />
              </div>
            </div>
            <div className="patternBox ">
              <div className={`inner set1 ${isActive == 0 ? "activePat" : "inactivePat"}  ${isActive == 1 && "dropAnim1"} ${isActive == 2 && "dropAnim2"} ${isForward ? "forw" : "rev"}  `}>
                <div className="d-flex gap-4 innerBox1 justify-content-center">
                  <img src="/assets/pattern/lavpat.svg" alt="Pattern 1" className="pattern pattern1" />
                  <img src="/assets/pattern/lavpat.svg" alt="Pattern 1" className="pattern pattern1" />
                </div>
                <div className="d-flex gap-4 innerBox2 justify-content-center">
                  <img src="/assets/pattern/lavpat2.svg" alt="Pattern 1" className="pattern pattern2" />
                  <img src="/assets/pattern/lavpat2.svg" alt="Pattern 1" className="pattern pattern2" />
                </div>
                <div className="d-flex gap-4 innerBox3 justify-content-center">
                  <img src="/assets/pattern/lavpat.svg" alt="Pattern 1" className="pattern pattern3" />
                  <img src="/assets/pattern/lavpat.svg" alt="Pattern 1" className="pattern pattern3" />
                </div>
              </div>

              <div className={`inner set2 ${isActive == 1 ? "activePat" : "inactivePat"}  ${isActive == 1 && "dropAnim1"} ${isActive == 2 && "dropAnim2"} ${isForward ? "forw" : "rev"} `}>
                <div className="d-flex gap-4 innerBox1 justify-content-center">
                  <img src="/assets/pattern/sunPat.svg" alt="Pattern 1" className="pattern pattern1" />
                  <img src="/assets/pattern/sunPat.svg" alt="Pattern 1" className="pattern pattern1" />
                </div>
                <div className="d-flex gap-4 innerBox2 justify-content-center">
                  <img src="/assets/pattern/sunPat.svg" alt="Pattern 1" className="pattern pattern2" />
                  <img src="/assets/pattern/sunPat.svg" alt="Pattern 1" className="pattern pattern2" />
                </div>
                <div className="d-flex gap-4 innerBox3 justify-content-center">
                  <img src="/assets/pattern/sunPat.svg" alt="Pattern 1" className="pattern pattern3" />
                  <img src="/assets/pattern/sunPat.svg" alt="Pattern 1" className="pattern pattern3" />
                </div>
              </div>

              <div className={`inner set3 ${isActive == 2 ? "activePat" : "inactivePat"}  ${isActive == 1 && "dropAnim1"} ${isActive == 2 && "dropAnim2"} ${isForward ? "forw" : "rev"} `}>
                <div className="d-flex gap-4 innerBox1 justify-content-center">
                  <img src="/assets/pattern/wavepat.svg" alt="Pattern 1" className="pattern pattern1" />
                  <img src="/assets/pattern/wavepat.svg" alt="Pattern 1" className="pattern pattern1" />
                </div>
                <div className="d-flex gap-4 innerBox2 justify-content-center">
                  <img src="/assets/pattern/wavepat.svg" alt="Pattern 1" className="pattern pattern2" />
                  <img src="/assets/pattern/wavepat.svg" alt="Pattern 1" className="pattern pattern2" />
                </div>
                <div className="d-flex gap-4 innerBox3 justify-content-center">
                  <img src="/assets/pattern/wavepat.svg" alt="Pattern 1" className="pattern pattern3" />
                  <img src="/assets/pattern/wavepat.svg" alt="Pattern 1" className="pattern pattern3" />
                </div>
              </div>
            </div>

            {/* Bottom Icons */}
            <div
              style={{
                position: "absolute",
                zIndex: 999,
                bottom: "-1.8em",
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                gap: "3rem",
                textAlign: "center",
              }}
            >
              <div>
                <img src="/assets/icons/heart.svg" alt="Heart Icon" style={{ height: "3.5rem", marginBottom: "0.3rem" }} />
                <p className="fw-bold">
                  MIND & MOOD <br /> SUPPORT
                </p>
              </div>
              <div>
                <img src="/assets/icons/energy.svg" alt="Heart Icon" style={{ height: "3.5rem", marginBottom: "0.3rem" }} />
                <p className="fw-bold">
                  ENERGY & <br /> RECOVERY
                </p>
              </div>
              <div>
                <img src="/assets/icons/balance.svg" alt="Heart Icon" style={{ height: "3.5rem", marginBottom: "0.3rem" }} />
                <p className="fw-bold">
                  STRESS <br /> BALANCE
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
