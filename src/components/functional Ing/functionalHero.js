import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./functionalHero.css";
import { motion } from "framer-motion";

const FunctionalHero = () => {
  return (
    <section className="funtionalhero d-flex align-items-center position-relative justify-content-center" style={{ overflowX: "hidden" }}>
      <div className={`funtionalColorBg `}></div>

      <Container className="text-center" style={{ zIndex: 10 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
          <h1 className="heroFont text-uppercase mb-3 tFMFont">
            Functional Ingredients <br />
            That Work With You
          </h1>

          <p className="p-font fs-5 text-uppercase dFMFont">
            At Tutto Passa, we infuse every can with carefully <span className="d-md-block d-none"></span> selected nootropics and adaptogens - natural <span className="d-md-block d-none"></span>{" "}
            compounds known for their ability to support the <span className="d-md-block d-none"></span> body and mind through life’s changing rhythms.
          </p>
        </motion.div>
      </Container>
    </section>
  );
};

export default FunctionalHero;
