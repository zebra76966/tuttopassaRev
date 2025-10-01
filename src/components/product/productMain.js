import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProductHero from "./productHero";

import ConnectToOurUniverse from "../contact";
import ProductSlider from "../products";

const ProductMain = () => {
  return (
    <div className="functional-main">
      <ProductHero />
      <ProductSlider heading={"COLLECTION #1"} subhead={"NO"} />
      <ProductSlider heading={"COLLECTION #2"} subhead={"NO"} />
      <ProductSlider heading={"MERCH"} subhead={"NO"} type={"merch"} />
      <ConnectToOurUniverse />
    </div>
  );
};

export default ProductMain;
