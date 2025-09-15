import React, { useState, useEffect } from "react";
import Lenis from "@studio-freight/lenis"; // ✅ import Lenis
import Hero from "./hero";
import "./master.css";
import Loader from "./laoder";
import CustomNavbar from "./navbar";
import ProductSlider from "./products";
import FunctionalIngredients from "./funtionalIngredients";
import TuttoPassaMatch from "./tuttoPassaMatch";
import AboutSection from "./about";
import ReviewSlider from "./reviews";
import ConnectToOurUniverse from "./contact";
import FooterComponent from "./footer";

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(interval);
  }, []);

  useEffect(() => {
    // ✅ Initialize Lenis when content is ready
    const lenis = new Lenis({
      duration: 1.2, // smoothness (higher = slower)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // default easing
      smoothWheel: true,
      smoothTouch: false, // set true if you want touch devices smooth too
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // cleanup when unmounted
    };
  }, [isLoading]); // run once when loader finishes

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="fadeIn">
          <CustomNavbar />
          <Hero />
          <ProductSlider />
          <FunctionalIngredients />
          <TuttoPassaMatch />
          <AboutSection />
          <ReviewSlider />
          <ConnectToOurUniverse />
          <FooterComponent />
        </div>
      )}
    </>
  );
};

export default Main;
