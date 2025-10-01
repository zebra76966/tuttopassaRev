import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./404.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <section className="funtionalhero d-flex align-items-center position-relative justify-content-center" style={{ overflowX: "hidden" }}>
      <div className={`funtionalColorBg `}></div>

      <Container className="text-center" style={{ zIndex: 10 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
          <h1 className="heroFont text-uppercase mb-3">404</h1>

          <p className="p-font fs-5 text-uppercase ">PAGE NOT FOUND</p>

          <Button className="rounded-circle px-5 fw-bold border-2 mt-5" variant="outline-dark" onClick={() => navigate("/")}>
            GO BACK
          </Button>
        </motion.div>
      </Container>
    </section>
  );
};

export default Error;
