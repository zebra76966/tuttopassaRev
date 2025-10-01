import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductViewHero from "./productViewHero";
import ProductSlider from "../../products";
import ConnectToOurUniverse from "../../contact";

const ProductViewMain = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <ProductViewHero />

      <ProductSlider heading={"OTHER PRODUCTS"} subhead={"NO"} />
      <ConnectToOurUniverse />
    </>
  );
};

export default ProductViewMain;
