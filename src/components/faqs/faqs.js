import React, { useState } from "react";
import { Accordion, Container, Row, Col } from "react-bootstrap";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { motion } from "framer-motion";
import "./faqs.css";

const faqData = [
  {
    question: "What is Tutto Passa?",
    answer: `Tutto Passa is a functional beverage brand offering drinks infused with adaptogens and nootropics to support your body, mind, and mood—no crash, no compromise.`,
  },
  {
    question: "What does “Tutto Passa” mean?",
    answer: `“Tutto Passa” is Italian for “everything passes.” It’s a reminder that no matter what you’re going through, balance and calm can always return.`,
  },
  {
    question: "What is a functional beverage?",
    answer: `A functional beverage is a drink formulated with ingredients that provide specific health benefits beyond basic nutrition—such as boosting focus, reducing stress, or supporting energy levels.`,
  },
  {
    question: "What are adaptogens and nootropics?",
    answer: `Adaptogens are natural substances that help your body adapt to stress and restore balance. Nootropics are ingredients that support cognitive function, focus, and mental clarity.`,
  },
  {
    question: "How are your drinks different from other energy or wellness drinks?",
    answer: `Unlike typical energy drinks that rely on sugar and stimulants, Tutto Passa drinks are crafted with clean, functional ingredients designed to support sustained energy, focus, and mood—without jitters or crashes.`,
  },
  {
    question: "When should I drink each one?",
    answer: `You can enjoy Tutto Passa drinks anytime you need support—whether it’s a morning boost, an afternoon focus session, or a moment to unwind. Each formula is designed for a different functional purpose.`,
  },
  {
    question: "Do your drinks contain caffeine?",
    answer: `Some blends may contain naturally occurring caffeine depending on the formulation, but all are designed to avoid overstimulation or energy crashes.`,
  },
  { question: "Are your drinks vegan or gluten-free?", answer: `Yes! All Tutto Passa drinks are both vegan and gluten-free, making them suitable for a wide range of lifestyles and diets.` },
  { question: "Do your drinks contain common allergens?", answer: `No. Our drinks are carefully crafted to be free from common allergens, so they’re safe and enjoyable for most people.` },
  {
    question: "Can I drink more than one per day?",
    answer: `Yes, you can enjoy more than one depending on your needs and tolerance. However, we recommend starting with one per day to see how your body responds.`,
  },
  {
    question: "Are there any side effects?",
    answer: `Our drinks are made with safe, functional ingredients. However, as with any supplement or new dietary addition, it’s best to check with your healthcare provider if you have specific concerns.`,
  },
  {
    question: "Where can I buy Tutto Passa?",
    answer: `Tutto Passa drinks are available through our official website and select retail partners. Visit our website for the latest stockist information.`,
  },
];

const FAQSection = () => {
  const [activeKey, setActiveKey] = useState(null);
  const handleToggle = (key) => setActiveKey(activeKey === key ? null : key);

  // parent variants so children inherit the "rest"/"hover" labels
  const containerVariants = { rest: {}, hover: {} };

  const textVariants = {
    rest: { y: 0 },
    hover: { y: -6, transition: { type: "spring", stiffness: 450, damping: 22 } },
  };

  // Animate the SVG path 'd' to create a wide U sag and a quick snap
  const underlineVariants = {
    rest: { d: "M0,5 Q50,5 100,5" },
    hover: {
      d: [
        "M0,5 Q50,5 100,5", // flat -> start
        "M0,5 Q50,20 100,5", // deep sag (center down a lot)
        "M0,5 Q50,-4 100,5", // sharp snap up
        "M0,5 Q50,5 100,5", // settle back
      ],
      transition: {
        duration: 0.6, // quicker overall
        ease: "easeInOut",
        times: [0, 0.25, 0.45, 1], // snap happens earlier
      },
    },
  };

  return (
    <div className="faq-section text-light py-5 px-lg-5 px-2 ch-100 p-font pb-5">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
        <Container fluid className="px-lg-5 px-2 pt-5 pb-5">
          <Accordion activeKey={activeKey} className="mt-5 pt-5 px-lg-5 px-2">
            {faqData.map((item, index) => (
              <motion.div key={index} className="faq-item py-4 text-uppercase" variants={containerVariants} initial="rest" whileHover="hover" animate="rest">
                <Row className="align-items-center text-dark" onClick={() => handleToggle(index.toString())} style={{ cursor: "pointer" }}>
                  <Col xs={10} className="fs-5 fw-bold">
                    <motion.span className="faq-question" variants={textVariants}>
                      {item.question}
                    </motion.span>
                  </Col>

                  <Col xs={1} className="text-end">
                    {activeKey === index.toString() ? <FaMinus className="ico fs-1" /> : <FaPlus className="ico fs-1" />}
                  </Col>
                </Row>

                <Row className="align-items-center justify-content-start">
                  <Col xs={10}>
                    <Accordion.Collapse eventKey={index.toString()}>
                      <div className="pt-3 pe-3 text-dark small">{item.answer}</div>
                    </Accordion.Collapse>
                  </Col>
                </Row>

                {/* SVG underline — child will pick up parent's "hover" label */}
                <motion.svg className="faq-underline" width="100%" height="14" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <motion.path
                    variants={underlineVariants}
                    d="M0,5 Q50,5 100,5"
                    stroke="rgba(0,0,0,0.6)"
                    strokeWidth="2"
                    fill="transparent"
                    style={{ pointerEvents: "none" }} // prevent it capturing pointer events
                  />
                </motion.svg>
              </motion.div>
            ))}
          </Accordion>
        </Container>
      </motion.div>
    </div>
  );
};

export default FAQSection;
