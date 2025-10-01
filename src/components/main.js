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

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="fadeIn">
          <Hero />
          <ProductSlider />
          <FunctionalIngredients />
          <TuttoPassaMatch />
          <AboutSection />
          <ReviewSlider />
          <ConnectToOurUniverse />
        </div>
      )}
    </>
  );
};

export default Main;
