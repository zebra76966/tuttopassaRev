import React, { useState, useEffect } from "react";
import Hero from "./hero";
import "./master.css";
import Loader from "./laoder";
import CustomNavbar from "./navbar";
import ProductSlider from "./products";
import FunctionalIngredients from "./funtionalIngredients";
const Main = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(interval); // cleanup on unmount
  }, []);
  return (
    <>
      {/* {isLoading ? (
        <Loader />
      ) : ( */}
      <div className="fadeIn">
        <CustomNavbar />
        <Hero />
        <ProductSlider />
        <FunctionalIngredients />
      </div>
      {/* )} */}
    </>
  );
};

export default Main;
