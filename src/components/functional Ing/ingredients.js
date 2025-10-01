import React, { useState, useRef, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import "./ingredients.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// 1. Add the 5th item (Chamomile/L-Theanine/etc. or a placeholder)
const originalFlowers = [
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
    name: "PANAX GINSENG",
    image: "/assets/pattern/ginseng.png",
    girl: "/assets/pattern/girl2.png",
    description: "Boosts energy and focus while supporting immune health. The classic adaptogen.",
    stats: [5, 5, 3, 4, 4],
  },
  {
    id: 3,
    name: "ASHWAGANDHA",
    image: "/assets/pattern/ASHWAGANDHA.png",
    girl: "/assets/pattern/girl3.png",
    description: "Helps reduce stress and anxiety, balancing mood and building resilience.",
    stats: [3, 4, 5, 3, 5],
  },
  {
    id: 4,
    name: "CHAMOMILE",
    image: "/assets/pattern/CHAMOMILE.png",
    girl: "/assets/pattern/girl4.png",
    description: "Supports physical recovery, stamina, and overall vitality.",
    stats: [4, 3, 4, 5, 4],
  },
  // 💡 NEW: 5th item added
  {
    id: 5,
    name: "L-THEANINE",
    image: "/assets/pattern/ltheanine.png",
    girl: "/assets/pattern/girl2.png",
    description: "Promotes relaxation and mental focus without drowsiness. Great for anxiety relief.",
    stats: [3, 5, 5, 2, 4],
  },
];

const labels = ["ENERGY BOOST", "FOCUS & CLARITY", "STRESS & MOOD BALANCE", "PHYSICAL RECOVERY", "LONGEVITY & RESILIENCE"];

// We duplicate the array content for the infinite loop illusion
const flowers = [...originalFlowers, ...originalFlowers, ...originalFlowers];
const ORIGIN_LENGTH = originalFlowers.length;
// Start the active index in the middle set of cards for smooth scrolling
const INITIAL_INDEX = ORIGIN_LENGTH;

const Ingredients = () => {
  const [activeIndex, setActiveIndex] = useState(INITIAL_INDEX);
  const selected = originalFlowers[activeIndex % ORIGIN_LENGTH]; // Use modulo for logic
  const [triggerMotion, setTriggerMotion] = useState(false);
  const girlRef = useRef(null);
  const sliderRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);

  // --- Animation/Girl Logic (Kept for completeness) ---
  useEffect(() => {
    if (selected.girl && girlRef.current) {
      const el = girlRef.current;
      el.classList.remove("level-up");
      void el.offsetWidth; // reflow
      el.classList.add("level-up");

      setTriggerMotion(false);
      setTimeout(() => setTriggerMotion(true), 0);
    }
  }, [selected.girl]);

  // --- Core Scrolling/Centering Logic ---
  const scrollItemIntoView = (index, behavior = "smooth") => {
    if (sliderRef.current) {
      const activeCard = sliderRef.current.children[index];
      if (activeCard) {
        // Calculate the scroll position to center the card
        const sliderWidth = sliderRef.current.offsetWidth;
        const cardWidth = activeCard.offsetWidth;
        const scrollPosition = activeCard.offsetLeft - sliderWidth / 2 + cardWidth / 2;

        sliderRef.current.scrollTo({
          left: scrollPosition,
          behavior: behavior,
        });
      }
    }
  };

  useEffect(() => {
    // Scroll smoothly to the current active index whenever it changes
    if (!isScrolling) {
      scrollItemIntoView(activeIndex, "smooth");
    }
  }, [activeIndex, isScrolling]);

  // --- Infinite Loop Management ---
  const checkInfiniteLoop = () => {
    if (activeIndex >= 2 * ORIGIN_LENGTH) {
      // If we are on the third set (e.g., index 10-14 for a 5-item list)
      const newIndex = activeIndex - ORIGIN_LENGTH;
      setIsScrolling(true);
      setActiveIndex(newIndex);
      // Immediately reset scroll position without animation
      setTimeout(() => {
        scrollItemIntoView(newIndex, "auto");
        setIsScrolling(false);
      }, 50); // Small delay to ensure state update
    } else if (activeIndex < ORIGIN_LENGTH) {
      // If we are on the first set (e.g., index 0-4)
      const newIndex = activeIndex + ORIGIN_LENGTH;
      setIsScrolling(true);
      setActiveIndex(newIndex);
      // Immediately reset scroll position without animation
      setTimeout(() => {
        scrollItemIntoView(newIndex, "auto");
        setIsScrolling(false);
      }, 50);
    }
  };

  const handlePrev = () => {
    setActiveIndex((prev) => prev - 1);
    // Check for loop after the state update has triggered the scroll
    setTimeout(checkInfiniteLoop, 350); // Delay slightly more than scroll behavior duration
  };

  const handleNext = () => {
    setActiveIndex((prev) => prev + 1);
    // Check for loop after the state update has triggered the scroll
    setTimeout(checkInfiniteLoop, 350);
  };

  const handleSelect = (index) => {
    // Map the clicked flower's index (0-4) to the middle set's index (5-9)
    const middleIndex = index + ORIGIN_LENGTH;
    setActiveIndex(middleIndex);
  };

  // Optional: Add manual scroll handling for infinity loop check
  const handleScroll = () => {
    if (sliderRef.current) {
      const scrollLeft = sliderRef.current.scrollLeft;
      const cardWidth = sliderRef.current.children[0].offsetWidth; // Assume all cards have same width
      const totalOffset = cardWidth + 20; // Card width + gap (from CSS)

      // Calculate the index that is currently centered in the viewport
      const sliderCenter = sliderRef.current.offsetWidth / 2;
      const centeredIndex = Math.round((scrollLeft + sliderCenter) / totalOffset) - 1; // -1 to account for padding/start position

      // If the user scrolls manually close to the loop boundary, update activeIndex
      if (Math.abs(centeredIndex - activeIndex) > 1 && centeredIndex >= 0 && centeredIndex < flowers.length) {
        // This is a rough check to link manual scroll to activeIndex, you might need to fine-tune this
        setActiveIndex(centeredIndex);
      }
    }
  };

  return (
    <div className="functional-ingredients ch-100">
      <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="container-fluid mt-4 px-lg-5 px-2 pt-4">
        <Row>
          <Col md={7}>
            <div className="row align-items-center">
              <div className="col-lg-6 ">
                <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} key={selected.stats} className="stats w-100 h-100">
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
                </motion.div>
              </div>

              <div className="col-lg-6 ">
                <div ref={girlRef} className="girl text-center w-100 h-100">
                  {/* <div className="animationLevelUp">
                    <DotLottieReact key={selected.girl} src="https://lottie.host/0044346c-6ea4-4a63-ab1f-e1e31ea9a34c/BDKA204CX7.lottie" autoplay loop={false} />
                  </div> */}

                  <motion.img
                    key={selected.girl}
                    src={selected.girl}
                    alt="Pixel Girl"
                    className="level-up-img"
                    animate={triggerMotion ? { scale: [1, 1.1, 1], opacity: [1, 0.9, 1] } : {}}
                    transition={{ duration: 0.4 }}
                    style={{ overflowY: "hidden", height: "50dvh" }}
                  />
                </div>
              </div>
            </div>
          </Col>

          <Col md={5} className="text-center my-4">
            <motion.div key={selected.girl} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="description text-start">
              <img src={selected.image} alt={selected.name} className="mb-3" style={{ height: "auto", maxHeight: "20dvh" }} />

              <h3 className="p-font fw-bold display-6 mb-2">{selected.name}</h3>
              <h6 className="p-font fs-5 mb-4 fw-bold">THE RESILIENT FIGHTER</h6>

              <p style={{ minHeight: "100px" }}>{selected.description}</p>
            </motion.div>
          </Col>

          {/*  Slider */}
          <Col xs={12} style={{ overflowY: "hidden", height: "100%" }}>
            <div className="slider d-flex align-items-center justify-content-center">
              <button className="nav-btn" onClick={handlePrev}>
                <FaChevronLeft />
              </button>

              <div ref={sliderRef} className="slider-wrapper" onScroll={checkInfiniteLoop}>
                {flowers.map((f, index) => (
                  <Card
                    key={index} // Use index as key since IDs are repeated
                    className={`flower-card ${index === activeIndex ? "active" : ""}`}
                    // Use modulo to get the original index for the handler
                    onClick={() => handleSelect(index % ORIGIN_LENGTH)}
                  >
                    <Card.Img variant="top" src={f.image} alt={f.name} className="flower-img bg-grad" />
                    <Card.Body className="text-center ">
                      {/* Use modulo to display the name correctly for the middle set of cards */}
                      <p className="mt-2 fw-bold fs-5">{originalFlowers[index % ORIGIN_LENGTH].name}</p>
                    </Card.Body>
                  </Card>
                ))}
              </div>

              <button className="nav-btn" onClick={handleNext}>
                <FaChevronRight />
              </button>
            </div>
          </Col>
        </Row>
      </motion.div>
    </div>
  );
};

export default Ingredients;
