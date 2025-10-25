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
    <section className={`hero d-flex align-items-center position-relative pt-lg-0 pt-5 ${id == 0 ? "heroBg1Color" : id == 1 ? "heroBg2Color" : "heroBg3Color"} `} style={{ overflow: "hidden" }}>
      <Container fluid className="contentContainer py-5">
        <Row className="align-items-center py-5">
          {/* Left Side Content */}
          <Col lg={6} className="px-lg-5 px-0 text-dark order-lg-1 order-2 mt-lg-0 mt-4">
            <div className="px-md-5 px-4">
              <h1 className="heroFont tVFont">{prods[id]?.name}</h1>
              <p className="p-font fs-5 text-uppercase fw-bold dVFont">{prods[id]?.desc}.</p>

              <div className="my-5 py-3">
                {prods[id].features.map((ini, i) => {
                  return (
                    <p key={i} className="lead fw-bold lVFont">
                      <FaCheck className="me-2" /> {ini}{" "}
                    </p>
                  );
                })}
              </div>

              <div className="d-md-flex gap-3 align-items-center mt-5">
                <Button
                  size="lg"
                  className={` ${id == 0 ? "btn-primary" : id == 1 ? "btn-warning" : "btn-info"} p-font pCta rounded-pill text-center text-dark fs-6 fw-bold px-5 py-2  transDelay`}
                  style={{ width: "250px" }}
                >
                  FUNCTIONAL <br /> INGREDIENTS
                </Button>

                <Button className="border-0 bg-transparent text-dark fw-bold  fs-5 d-flex gap-3 align-items-center mt-3 mt-md-0">
                  WHERE TO FIND US <HiArrowLongRight className="fs-1 fw-bold" />
                </Button>
              </div>
            </div>

            <div className="  p-4 d-block d-lg-none w-100 my-5 py-5" style={{ backgroundColor: prods[id]?.color }}>
              <p className="lead smdVFont fw-bold text-uppercase ">
                “I’ve ditched my usual coffee jitters for Peach Sunrise. It keeps me sharp without feeling edgy, and honestly, the flavor is incredible. It just makes me feel good.”
              </p>
            </div>
          </Col>

          {/* Right Side Content */}
          <Col lg={6} className="d-flex justify-content-start align-items-center position-relative order-lg-2 order-1">
            <div className="imgSlider">
              <div className={`prodImg  `}>
                <img src={prods[id]?.img} alt="Tutto Passa Can" className="hero-img img1" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="reviewBox position-absolute pb-5 bottom-0 end-0  me-5 p-4 d-none d-lg-inline" style={{ backgroundColor: prods[id]?.color, zIndex: "999", maxWidth: "30dvw", minHeight: "30dvh" }}>
        <p className="lead smdVFont">
          “I’ve ditched my usual coffee jitters for Peach Sunrise. It keeps me sharp without feeling edgy, and honestly, the flavor is incredible. It just makes me feel good.”
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: -20 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="position-absolute btmPattern"
        style={{ bottom: "-6%", left: "50%", transform: "translateX(-50%)", zIndex: "999" }}
      >
        {id == 0 ? (
          <img src="/assets/pattern/lavPat.svg" alt="Pattern 1" className="pattern pattern1" />
        ) : id == 1 ? (
          <img src="/assets/pattern/sunPat.svg" alt="Pattern 1" className="pattern pattern1" />
        ) : (
          <img src="/assets/pattern/wavepPat.svg" alt="Pattern 1" className="pattern pattern1" />
        )}
      </motion.div>
    </section>
  );
};

export default ProductViewHero;
