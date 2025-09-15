import React, { useRef, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./products.css";
import { motion } from "framer-motion";

const products = [
  {
    name: "TROPICAL WAVE",
    color: "#09b3ad",
    img: "assets/products/wave.png ", // replace with your actual can image
    imgAlt: "assets/products/heroWave.png ",
  },
  {
    name: "PEACH SUNRISE",
    color: "#e26932",
    img: "assets/products/dsunrise_.png ",
    imgAlt: "assets/products/heroSun.png ",
  },
  {
    name: "LAVENDER HAZE",
    color: "#8984b9",
    img: "assets/products/levander.png",
    imgAlt: "assets/products/heroLaven.png ",
  },
  {
    name: "TROPICAL WAVE",
    color: "#09b3ad",
    img: "assets/products/wave.png ", // replace with your actual can image
    imgAlt: "assets/products/heroWave.png ",
  },
  {
    name: "PEACH SUNRISE",
    color: "#e26932",
    img: "assets/products/dsunrise_.png ",
    imgAlt: "assets/products/heroSun.png ",
  },
  {
    name: "LAVENDER HAZE",
    color: "#8984b9",
    img: "assets/products/levander.png",
    imgAlt: "assets/products/heroLaven.png ",
  },
  {
    name: "TROPICAL WAVE",
    color: "#09b3ad",
    img: "assets/products/wave.png ", // replace with your actual can image
    imgAlt: "assets/products/heroWave.png ",
  },
  {
    name: "PEACH SUNRISE",
    color: "#e26932",
    img: "assets/products/dsunrise_.png ",
    imgAlt: "assets/products/heroSun.png ",
  },
  {
    name: "LAVENDER HAZE",
    color: "#8984b9",
    img: "assets/products/levander.png",
    imgAlt: "assets/products/heroLaven.png ",
  },
  {
    name: "TROPICAL WAVE",
    color: "#09b3ad",
    img: "assets/products/wave.png ", // replace with your actual can image
    imgAlt: "assets/products/heroWave.png ",
  },
  {
    name: "PEACH SUNRISE",
    color: "#e26932",
    img: "assets/products/dsunrise_.png ",
    imgAlt: "assets/products/heroSun.png ",
  },
  {
    name: "LAVENDER HAZE",
    color: "#8984b9",
    img: "assets/products/levander.png",
    imgAlt: "assets/products/heroLaven.png ",
  },
];

const ProductSlider = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 600; // pixels to move per click
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const [altimg, setAltImg] = useState(-1);

  return (
    <Container fluid className=" text-white py-5 bg-black ch-100  d-flex align-items-center justify-content-center" style={{ overflowX: "hidden" }}>
      {/* Header row */}
      <div className="product-slider w-100">
        <Row className="justify-content-between align-items-center mb-4 px-5">
          <Col xs="auto">
            <h6 className="fw-bold fs-3 p-font">OUR PRODUCTS</h6>
          </Col>
          <Col xs="auto">
            <h6 className="fw-bold fs-3 p-font">WHERE TO BUY?</h6>
          </Col>
        </Row>

        {/* Slider row */}
        <div className="slider-wrapper">
          <Button variant="link" className="arrow-btn left" onClick={() => scroll("left")}>
            <FaArrowLeft size={28} className="lnk-primary" />
          </Button>

          <div className="slider-scroll" ref={scrollRef}>
            {products.map((product, index) => (
              <div className="card-wrap" onMouseOver={() => setAltImg(index)}>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index / 8 }}
                  key={index}
                  className={`slider-card ${index == altimg ? "rot" : ""}`}
                  style={{ backgroundColor: product.color }}
                >
                  <img src={index == altimg ? product.imgAlt : product.img} alt={product.name} />
                  <h5 className="text-black fs-1">{product.name}</h5>
                </motion.div>
              </div>
            ))}
          </div>

          <Button variant="link" className="arrow-btn right " onClick={() => scroll("right")}>
            <FaArrowRight size={28} className="lnk-primary" />
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default ProductSlider;
