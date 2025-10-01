import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./aboutHero.css";
import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <section className="abouthero d-flex align-items-center position-relative justify-content-center" style={{ overflowX: "hidden" }}>
      <div className={`aboutColorBg `}></div>

      <Container className="text-center" style={{ zIndex: 10 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
          <h1 className="heroFont text-uppercase mb-3">
            welcome to the <br />
            tutto passa universe
          </h1>

          <p className="p-font fs-5 text-uppercase ">
            At Tutto Passa, we infuse every can with carefully <br /> selected nootropics and adaptogens - natural <br /> compounds known for their ability to support the <br /> body and mind through
            life’s changing rhythms.
          </p>
        </motion.div>
      </Container>
    </section>
  );
};

export default AboutHero;
