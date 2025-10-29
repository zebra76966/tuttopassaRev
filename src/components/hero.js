import React from "react";
import { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./hero.css";
import CustomNavbar from "./navbar";

const Hero = () => {
  const [isActive, setIsActive] = useState(0);
  const [isForward, setIsForward] = useState(true);
  useEffect(() => {
    const updateScrollbarWidth = () => {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.documentElement.style.setProperty("--scrollbar-width", `${scrollbarWidth}px`);
    };

    updateScrollbarWidth();
    window.addEventListener("resize", updateScrollbarWidth);

    return () => window.removeEventListener("resize", updateScrollbarWidth);
  }, []);

  const slidesRef = useRef([]);

  useEffect(() => {
    const slides = slidesRef.current;
    const windowHeight = window.innerHeight;
    const totalScroll = windowHeight * slides.length;

    const handleScroll = () => {
      const hero = document.querySelector(".heroSlides");
      if (!hero) return;

      const heroTop = hero.offsetTop;
      const scrollTop = window.scrollY;
      const relativeScroll = Math.min(Math.max(scrollTop - heroTop, 0), totalScroll);
      const progress = relativeScroll / totalScroll;

      slides.forEach((section, index) => {
        if (!section) return;
        const start = index / slides.length;
        const end = (index + 1) / slides.length;

        let localProgress = 0;
        if (progress >= start && progress <= end) {
          localProgress = (progress - start) / (end - start);
        } else if (progress < start) {
          localProgress = 0;
        } else {
          localProgress = 1;
        }

        const newWidth = 100 - localProgress * 100;
        section.style.width = `${newWidth}dvw`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="heroSlides">
      <div className="slidesContainer">
        {/* Prod1 */}
        <div className="mainSlide A" ref={(el) => (slidesRef.current[0] = el)}>
          <section className="hero d-flex align-items-center  innerContent" style={{ overflowX: "hidden" }}>
            <div className={`heroBg1 `}></div>
            <Container fluid className="contentContainer">
              <Row className="align-items-center ">
                {/* Left Side Content */}
                <Col lg={6} className="px-5 text-dark order-lg-1 order-2 pt-lg-0 pt-5">
                  <p className={`fs-4 fw-bold smFont `}>LAVENDER HAZE </p>

                  <h1 className="heroFont tFont">
                    FOR EVERY <br /> STATE OF MIND
                  </h1>
                  <p className="p-font fs-5 text-uppercase pFont">A gentle, dreamy blend designed to help you slow down and let go.</p>
                  <Button size="lg" className={`btn-primary rounded-pill text-dark fs-6 fw-bold px-lg-5 py-lg-3 px-3 py-2 mt-4 transDelay btnCta`}>
                    CALL TO ACTION
                  </Button>
                </Col>

                {/* Right Side Content */}
                <Col lg={6} className="d-flex justify-content-center align-items-center position-relative order-lg-2 order-1">
                  <div className="imgSlider">
                    <div className={`slide1`}>
                      <img src="/assets/products/heroLaven.png" alt="Tutto Passa Can" className="hero-img img1 mx-lg-0 mx-auto" />
                    </div>
                  </div>
                  <div className="patternBox ">
                    <div className={`inner set1  `}>
                      <div className="d-flex gap-4 innerBox1 justify-content-center">
                        <img src="/assets/pattern/lavPat.svg" alt="Pattern 1" className="pattern pattern1" />
                        <img src="/assets/pattern/lavPat.svg" alt="Pattern 1" className="pattern pattern1" />
                      </div>
                      <div className="d-flex gap-4 innerBox2 justify-content-center">
                        <img src="/assets/pattern/lavPat2.svg" alt="Pattern 1" className="pattern pattern2" />
                        <img src="/assets/pattern/lavPat2.svg" alt="Pattern 1" className="pattern pattern2" />
                      </div>
                      <div className="d-flex gap-4 innerBox3 justify-content-center">
                        <img src="/assets/pattern/lavPat.svg" alt="Pattern 1" className="pattern pattern3" />
                        <img src="/assets/pattern/lavPat.svg" alt="Pattern 1" className="pattern pattern3" />
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
                    className="bottomIcons"
                  >
                    <div>
                      <img src="/assets/icons/heart.svg" alt="Heart Icon" className="btmIco" style={{ height: "3.5rem", marginBottom: "0.3rem" }} />
                      <p className="fw-bold">
                        MIND & MOOD <br /> SUPPORT
                      </p>
                    </div>
                    <div>
                      <img src="/assets/icons/energy.svg" alt="Heart Icon" className="btmIco" style={{ height: "3.5rem", marginBottom: "0.3rem" }} />
                      <p className="fw-bold">
                        ENERGY & <br /> RECOVERY
                      </p>
                    </div>
                    <div>
                      <img src="/assets/icons/balance.svg" alt="Heart Icon" className="btmIco" style={{ height: "3.5rem", marginBottom: "0.3rem" }} />
                      <p className="fw-bold">
                        STRESS <br /> BALANCE
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </div>
        {/* Prod2 */}
        <div className="mainSlide B " ref={(el) => (slidesRef.current[1] = el)}>
          <section className="hero d-flex align-items-center  innerContent" style={{ overflowX: "hidden" }}>
            <div className={`heroBg2 `}></div>

            <Container fluid className="contentContainer">
              <Row className="align-items-center ">
                {/* Left Side Content */}
                <Col lg={6} className="px-5 text-dark order-lg-1 order-2 pt-lg-0 pt-5">
                  <p className={`fs-4 fw-bold smFont `}>PEACH SUNRISE</p>

                  <h1 className="heroFont tFont">
                    FOR EVERY <br /> STATE OF MIND
                  </h1>
                  <p className="p-font fs-5 text-uppercase pFont">A gentle, dreamy blend designed to help you slow down and let go.</p>
                  <Button size="lg" className={`btn-warning rounded-pill text-dark fs-6 fw-bold px-lg-5 py-lg-3 px-3 py-2 mt-4 transDelay btnCta`}>
                    CALL TO ACTION
                  </Button>
                </Col>

                {/* Right Side Content */}
                <Col lg={6} className="d-flex justify-content-center align-items-center position-relative order-lg-2 order-1">
                  <div className="imgSlider">
                    <div className={`slide1`}>
                      <img src="/assets/products/heroSun.png" alt="Tutto Passa Can" className="hero-img img2 mx-lg-0 mx-auto" />
                    </div>
                  </div>
                  <div className="patternBox ">
                    <div className={`inner set2 `}>
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
                    className="bottomIcons"
                  >
                    <div>
                      <img src="/assets/icons/heart.svg" alt="Heart Icon" className="btmIco" style={{ height: "3.5rem", marginBottom: "0.3rem" }} />
                      <p className="fw-bold">
                        MIND & MOOD <br /> SUPPORT
                      </p>
                    </div>
                    <div>
                      <img src="/assets/icons/energy.svg" alt="Heart Icon" className="btmIco" style={{ height: "3.5rem", marginBottom: "0.3rem" }} />
                      <p className="fw-bold">
                        ENERGY & <br /> RECOVERY
                      </p>
                    </div>
                    <div>
                      <img src="/assets/icons/balance.svg" alt="Heart Icon" className="btmIco" style={{ height: "3.5rem", marginBottom: "0.3rem" }} />
                      <p className="fw-bold">
                        STRESS <br /> BALANCE
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </div>

        {/* Prod3 */}
        <div className="mainSlide C ">
          <section className="hero d-flex align-items-center  innerContent" style={{ overflowX: "hidden" }}>
            <div className="heroBg3"></div> {/* Static background layer */}
            <Container fluid className="contentContainer">
              <Row className="align-items-center ">
                {/* Left Side Content */}
                <Col lg={6} className="px-5 text-dark order-lg-1 order-2 pt-lg-0 pt-5">
                  <p className={`fs-4 fw-bold smFont `}>TROPICAL WAVE </p>
                  <h1 className="heroFont tFont">
                    FOR EVERY <br /> STATE OF MIND
                  </h1>
                  <p className="p-font fs-5 text-uppercase pFont">A gentle, dreamy blend designed to help you slow down and let go.</p>
                  <Button size="lg" className={`  btn-info rounded-pill text-dark fs-6 fw-bold px-lg-5 py-lg-3 px-3 py-2 mt-4 transDelay btnCta`}>
                    CALL TO ACTION
                  </Button>
                </Col>

                {/* Right Side Content */}
                <Col lg={6} className="d-flex justify-content-center align-items-center position-relative order-lg-2 order-1">
                  <div className="imgSlider">
                    <div className={`slide1 `}>
                      <img src="/assets/products/heroWave.png" alt="Tutto Passa Can" className="hero-img img3 mx-lg-0 mx-auto" />
                    </div>
                  </div>
                  <div className="patternBox ">
                    <div className={`inner set3  `}>
                      <div className="d-flex gap-4 innerBox1 justify-content-center">
                        <img src="/assets/pattern/wavePat.svg" alt="Pattern 1" className="pattern pattern1" />
                        <img src="/assets/pattern/wavePat.svg" alt="Pattern 1" className="pattern pattern1" />
                      </div>
                      <div className="d-flex gap-4 innerBox2 justify-content-center">
                        <img src="/assets/pattern/wavePat.svg" alt="Pattern 1" className="pattern pattern2" />
                        <img src="/assets/pattern/wavePat.svg" alt="Pattern 1" className="pattern pattern2" />
                      </div>
                      <div className="d-flex gap-4 innerBox3 justify-content-center">
                        <img src="/assets/pattern/wavePat.svg" alt="Pattern 1" className="pattern pattern3" />
                        <img src="/assets/pattern/wavePat.svg" alt="Pattern 1" className="pattern pattern3" />
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
                    className="bottomIcons"
                  >
                    <div>
                      <img src="/assets/icons/heart.svg" alt="Heart Icon" className="btmIco" style={{ height: "3.5rem", marginBottom: "0.3rem" }} />
                      <p className="fw-bold">
                        MIND & MOOD <br /> SUPPORT
                      </p>
                    </div>
                    <div>
                      <img src="/assets/icons/energy.svg" alt="Heart Icon" className="btmIco" style={{ height: "3.5rem", marginBottom: "0.3rem" }} />
                      <p className="fw-bold">
                        ENERGY & <br /> RECOVERY
                      </p>
                    </div>
                    <div>
                      <img src="/assets/icons/balance.svg" alt="Heart Icon" className="btmIco" style={{ height: "3.5rem", marginBottom: "0.3rem" }} />
                      <p className="fw-bold">
                        STRESS <br /> BALANCE
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Hero;
