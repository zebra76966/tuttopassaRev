import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { FaStar } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./reviews.css";

const reviews = [
  {
    text: "I’VE TRIED EVERYTHING FOR BETTER SLEEP. LAVENDER HAZE ACTUALLY HELPS ME UNWIND WITHOUT KNOCKING ME OUT. IT’S GENTLE, TASTES AMAZING, AND FEELS LIKE SELF-CARE IN A CAN.",
    author: "RACHEL, BROOKLYN",
    bg: "#63E5E7", // teal
    color: "#008B8B",
  },
  {
    text: "I’VE TRIED EVERYTHING FOR BETTER SLEEP. LAVENDER HAZE ACTUALLY HELPS ME UNWIND WITHOUT KNOCKING ME OUT. IT’S GENTLE, TASTES AMAZING, AND FEELS LIKE SELF-CARE IN A CAN.",
    author: "RACHEL, BROOKLYN",
    bg: "#E6D0EE", // lavender-like
    color: "#6C5B9A",
  },
  {
    text: "I’VE TRIED EVERYTHING FOR BETTER SLEEP. LAVENDER HAZE ACTUALLY HELPS ME UNWIND WITHOUT KNOCKING ME OUT. IT’S GENTLE, TASTES AMAZING, AND FEELS LIKE SELF-CARE IN A CAN.",
    author: "RACHEL, BROOKLYN",
    bg: "#FFB47B", // orange-ish
    color: "#D35A1D",
  },
];

export default function ReviewSlider({ autoPlayInterval = 3000 }) {
  const [index, setIndex] = useState(0);

  // Auto-advance when controlled
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % reviews.length);
    }, autoPlayInterval);

    return () => clearInterval(id);
  }, [autoPlayInterval]);

  const handleSelect = (selectedIndex) => setIndex(selectedIndex);

  return (
    // set color on root so children can use "currentColor"
    <div className="review-carousel" style={{ color: reviews[index].color }} role="region" aria-label="Customer reviews carousel">
      <Carousel activeIndex={index} onSelect={handleSelect} controls={false} indicators={true} fade={true} touch={true} interval={null} /* we manage autoplay in useEffect */ className="h-100">
        {reviews.map((r, i) => (
          <Carousel.Item key={i} className="review-slide d-flex align-items-center" style={{ backgroundColor: r.bg }}>
            <div className="review-inner">
              <div className="stars" aria-hidden>
                {Array.from({ length: 5 }).map((_, k) => (
                  <FaStar key={k} style={{ color: "currentColor" }} size={50} />
                ))}
              </div>

              <p className="review-text fs-3 py-5">“{r.text}”</p>

              <p className="review-author fs-5">– {r.author}</p>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
