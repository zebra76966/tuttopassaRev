import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./productViewHero.css";
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";

import { useParams } from "react-router-dom";
import { HiArrowLongRight } from "react-icons/hi2";

const ProductViewHero = () => {
  const [isForward, setIsForward] = useState(true);
  const params = useParams();

  const id = params.id;

  const prods = [
    {
      name: "LAVENDER HAZE",
      img: "/assets/products/heroLaven.png",
      color: "#8984b9",
      desc: "A bright, peach-powered boost for your body and mind. With adaptogens, nootropics, and clean caffeine, Peach Sunshine helps you start your day energized, focused, and calm - without the jitters.",
      features: ["Crash-Free Energy", "Mood & Stress Support", "Juicy, Uplifting Peachy Flavor"],
    },
    {
      name: "PEACH SUNRISE",
      img: "/assets/products/heroSun.png",
      color: "#e26932",
      desc: "A bright, peach-powered boost for your body and mind. With adaptogens, nootropics, and clean caffeine, Peach Sunshine helps you start your day energized, focused, and calm - without the jitters.",
      features: ["Crash-Free Energy", "Mood & Stress Support", "Juicy, Uplifting Peachy Flavor"],
    },
    {
      name: "TROPICAL WAVE",
      img: "/assets/products/heroWave.png",
      color: "#09b3ad",
      desc: "A bright, peach-powered boost for your body and mind. With adaptogens, nootropics, and clean caffeine, Peach Sunshine helps you start your day energized, focused, and calm - without the jitters.",
      features: ["Crash-Free Energy", "Mood & Stress Support", "Juicy, Uplifting Peachy Flavor"],
    },
  ];

  return (
    <section className="hero d-flex align-items-center position-relative" style={{ overflow: "hidden" }}>
      {/* <div className={`heroBg1 ${isActive > 0 ? "revealAnim" : "revertAnim"}`}></div>
      <div className={`heroBg2 ${isActive > 1 ? "revealAnim" : "revertAnim"}`}></div> */}
      <div className={`${id == 0 ? "heroBg1" : id == 1 ? "heroBg2" : "heroBg3"} `}></div> {/* Static background layer */}
      <Container fluid className="contentContainer">
        <Row className="align-items-center">
          {/* Left Side Content */}
          <Col md={6} className="px-5 text-dark">
            <h1 className="heroFont ">{prods[id]?.name}</h1>
            <p className="p-font fs-5 text-uppercase fw-bold">{prods[id]?.desc}.</p>

            <div className="my-5 py-3">
              {prods[id].features.map((ini, i) => {
                return (
                  <p key={i} className="lead fw-bold">
                    <FaCheck className="me-2" /> {ini}{" "}
                  </p>
                );
              })}
            </div>

            <div className="d-flex gap-3 align-items-center mt-5">
              <Button
                size="lg"
                className={` ${id == 0 ? "btn-primary" : id == 1 ? "btn-warning" : "btn-info"} p-font rounded-pill text-center text-dark fs-6 fw-bold px-5 py-2  transDelay`}
                style={{ width: "250px" }}
              >
                FUNCTIONAL <br /> INGREDIENTS
              </Button>

              <Button className="border-0 bg-transparent text-dark fw-bold  fs-5 d-flex gap-3 align-items-center">
                WHERE TO FIND US <HiArrowLongRight className="fs-1 fw-bold" />
              </Button>
            </div>
          </Col>

          {/* Right Side Content */}
          <Col md={6} className="d-flex justify-content-start align-items-center position-relative ">
            <div className="imgSlider">
              <div className={`prodImg  `}>
                <img src={prods[id]?.img} alt="Tutto Passa Can" className="hero-img img1" />
              </div>
              {/* <div className={`slide2  ${isActive > 1 ? "revealAnim del1" : "revertAnim del2"}`}>
                <img src="/assets/products/heroSun.png" alt="Tutto Passa Can" className="hero-img img2" />
              </div>
              <div className={`slide3 `}>
                <img src="/assets/products/heroWave.png" alt="Tutto Passa Can" className="hero-img img3" />
              </div> */}
            </div>
            {/* <div className="patternBox ">
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
            </div> */}
          </Col>
        </Row>
      </Container>
      <div className="reviewBox position-absolute pb-5 bottom-0 end-0  me-5 p-4" style={{ backgroundColor: prods[id]?.color, zIndex: "999", maxWidth: "30dvw", minHeight: "30dvh" }}>
        <p className="lead ">“I’ve ditched my usual coffee jitters for Peach Sunrise. It keeps me sharp without feeling edgy, and honestly, the flavor is incredible. It just makes me feel good.”</p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="position-absolute "
        style={{ bottom: "-8%", left: "50%", transform: "translateX(-50%)", zIndex: "999" }}
      >
        {id == 0 ? (
          <img src="/assets/pattern/lavpat.svg" alt="Pattern 1" className="pattern pattern1" />
        ) : id == 1 ? (
          <img src="/assets/pattern/sunPat.svg" alt="Pattern 1" className="pattern pattern1" />
        ) : (
          <img src="/assets/pattern/wavepat.svg" alt="Pattern 1" className="pattern pattern1" />
        )}
      </motion.div>
    </section>
  );
};

export default ProductViewHero;
