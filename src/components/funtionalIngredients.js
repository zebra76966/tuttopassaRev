import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./functionalIngredients.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion";

const flowers = [
  {
    id: 1,
    name: "RHODIOLA ROSEA",
    image: "/assets/pattern/flower.png",
    girl: "/assets/pattern/girl.png",
    description: "A master of endurance and stress defense. Rhodiola powers you through chaos with calm strength and mental clarity.",
    stats: [4, 4, 5, 3, 5],
  },
  {
    id: 2,
    name: "GINSENG ROOT",
    image: "/assets/pattern/flower.png",
    girl: "/assets/pattern/girl2.png",
    description: "Boosts energy and focus while supporting immune health. The classic adaptogen.",
    stats: [5, 5, 3, 4, 4],
  },
  {
    id: 3,
    name: "ASHWAGANDHA",
    image: "/assets/pattern/flower.png",
    girl: "/assets/pattern/girl3.png",
    description: "Helps reduce stress and anxiety, balancing mood and building resilience.",
    stats: [3, 4, 5, 3, 5],
  },
  {
    id: 4,
    name: "MACA ROOT",
    image: "/assets/pattern/flower.png",
    girl: "/assets/pattern/girl4.png",
    description: "Supports physical recovery, stamina, and overall vitality.",
    stats: [4, 3, 4, 5, 4],
  },
];

const labels = ["ENERGY BOOST", "FOCUS & CLARITY", "STRESS & MOOD BALANCE", "PHYSICAL RECOVERY", "LONGEVITY & RESILIENCE"];

const FunctionalIngredients = () => {
  const [selected, setSelected] = useState(flowers[0]);
  const [triggerMotion, setTriggerMotion] = useState(false);
  const girlRef = useRef(null);

  useEffect(() => {
    if (selected.girl && girlRef.current) {
      const el = girlRef.current;

      // Reset CSS shake
      el.classList.remove("level-up");
      void el.offsetWidth; // reflow
      el.classList.add("level-up");

      // Trigger framer-motion
      setTriggerMotion(false);
      setTimeout(() => setTriggerMotion(true), 0);
    }
  }, [selected.girl]);

  return (
    <div className="functional-ingredients ch-100">
      {/* Top marquee */}
      <div className="marquee">
        <div className="track  py-3">
          <span className="fs-1 p-font">FUNCTIONAL INGREDIENTS • FUNCTIONAL INGREDIENTS • FUNCTIONAL INGREDIENTS • FUNCTIONAL INGREDIENTS •</span>
          <span className="fs-1 p-font">FUNCTIONAL INGREDIENTS • FUNCTIONAL INGREDIENTS • FUNCTIONAL INGREDIENTS • FUNCTIONAL INGREDIENTS •</span>
        </div>
      </div>

      <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="container-fluid mt-4 px-lg-5 px-2 pt-4">
        <Row className="mx-0">
          {/* Left column */}
          <Col lg={7}>
            <div className="row align-items-center mb-lg-0 mb-4 mx-0">
              {/* Stats */}
              <div className="col-lg-6 col-7 order-lg-1 order-2 pe-lg-0 pe-3">
                <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} key={selected.stats} className="stats w-100 h-100">
                  {labels.map((label, i) => (
                    <div key={i} className="stat-row mb-lg-4 mb-1 pb-3">
                      <p className="p-font fs-6 smFFont">{label}</p>
                      <div className="bar-blocks">
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <span key={idx} className={`block ${idx < selected.stats[i] ? "filled" : ""}`} />
                        ))}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Pixel Girl */}
              <div className="col-lg-6 col-5 order-lg-2 order-1">
                <div ref={girlRef} className={`girl text-center w-100 h-100 `}>
                  <div className="animationLevelUp">
                    <DotLottieReact key={selected.girl} src="https://lottie.host/0044346c-6ea4-4a63-ab1f-e1e31ea9a34c/BDKA204CX7.lottie" autoplay loop={false} />
                  </div>

                  <motion.img
                    key={selected.girl}
                    src={selected.girl}
                    alt="Pixel Girl"
                    className="level-up-img"
                    animate={triggerMotion ? { scale: [1, 1.1, 1], opacity: [1, 0.9, 1] } : {}}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </div>
            </div>

            {/* Description */}
            <motion.div key={selected.girl} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="description">
              <h3 className="p-font fw-bold display-6 mb-2 tFFont">{selected.name}</h3>
              <h6 className="p-font fs-5 mb-4 fw-bold sFFont">THE RESILIENT FIGHTER</h6>
              <p className="dFFont">{selected.description}</p>
            </motion.div>
          </Col>

          {/* Right column */}
          <Col lg={5}>
            <Row className="px-md-0 px-3">
              {flowers.map((f) => (
                <Col lg={6} xs={3} key={f.id} className="mb-3 px-0 px-md-2">
                  <Card className={`flower-card ${selected.id === f.id ? "active" : ""}`} onClick={() => setSelected(f)}>
                    <Card.Img variant="top" src={f.image} alt={f.name} className="flower-img bg-grad" />
                    <Card.Body className="text-center ">
                      <p className="mt-2 fw-bold fs-5">{f.name}</p>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </motion.div>
    </div>
  );
};

export default FunctionalIngredients;
