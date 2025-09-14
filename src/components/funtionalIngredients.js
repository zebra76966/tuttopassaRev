import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./functionalIngredients.css";

const flowers = [
  {
    id: 1,
    name: "RHODIOLA ROSEA",
    image: "assets/pattern/flower.png",
    girl: "assets/pattern/girl.png",
    description: "A master of endurance and stress defense. Rhodiola powers you through chaos with calm strength and mental clarity.",
    stats: [4, 4, 5, 3, 5], // each number = bar blocks filled
  },
  {
    id: 2,
    name: "GINSENG ROOT",
    image: "assets/pattern/flower.png",
    girl: "assets/pattern/girl.png",
    description: "Boosts energy and focus while supporting immune health. The classic adaptogen.",
    stats: [5, 5, 3, 4, 4],
  },
  {
    id: 3,
    name: "ASHWAGANDHA",
    image: "assets/pattern/flower.png",
    girl: "assets/pattern/girl.png",
    description: "Helps reduce stress and anxiety, balancing mood and building resilience.",
    stats: [3, 4, 5, 3, 5],
  },
  {
    id: 4,
    name: "MACA ROOT",
    image: "assets/pattern/flower.png",
    girl: "assets/pattern/girl.png",
    description: "Supports physical recovery, stamina, and overall vitality.",
    stats: [4, 3, 4, 5, 4],
  },
];

const labels = ["ENERGY BOOST", "FOCUS & CLARITY", "STRESS & MOOD BALANCE", "PHYSICAL RECOVERY", "LONGEVITY & RESILIENCE"];

const FunctionalIngredients = () => {
  const [selected, setSelected] = useState(flowers[0]);

  return (
    <div className="functional-ingredients ch-100">
      {/* Top marquee */}
      <div className="marquee">
        <div className="track  py-3">
          <span className="fs-1 p-font">FUNCTIONAL INGREDIENTS • FUNCTIONAL INGREDIENTS • FUNCTIONAL INGREDIENTS • FUNCTIONAL INGREDIENTS •</span>
          <span className="fs-1 p-font">FUNCTIONAL INGREDIENTS • FUNCTIONAL INGREDIENTS • FUNCTIONAL INGREDIENTS • FUNCTIONAL INGREDIENTS •</span>
        </div>
      </div>

      <Container fluid className="mt-4 px-lg-5 px-2 pt-4">
        <Row>
          {/* Left column */}
          <Col md={7}>
            {/* Stats */}
            <div className="row align-items-center">
              <div className="col-lg-6 ">
                <div className="stats w-100 h-100">
                  {labels.map((label, i) => (
                    <div key={i} className="stat-row mb-4 pb-3">
                      <p className="p-font fs-6">{label}</p>
                      <div className="bar-blocks">
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <span key={idx} className={`block ${idx < selected.stats[i] ? "filled" : ""}`} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pixel Girl */}
              <div className="col-lg-6 ">
                <div className="girl text-center w-100 h-100">
                  <img src={selected.girl} alt="Pixel Girl" />
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="description">
              <h3 className="p-font fw-bold display-6 mb-2">{selected.name}</h3>
              <h6 className="p-font fs-5 mb-4 fw-bold">THE RESILIENT FIGHTER</h6>
              <p>{selected.description}</p>
            </div>
          </Col>

          {/* Right column */}
          <Col md={5}>
            <Row>
              {flowers.map((f) => (
                <Col xs={6} key={f.id} className="mb-3 ">
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
      </Container>
    </div>
  );
};

export default FunctionalIngredients;
