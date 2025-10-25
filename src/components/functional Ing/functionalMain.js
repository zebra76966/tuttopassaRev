import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import FunctionalHero from "./functionalHero";
import FunctionalCardSec from "./functionalCards";
import Ingredients from "./ingredients";
import ConnectToOurUniverse from "../contact";
import FunctionalIngredients from "../funtionalIngredients";

const FunctionalMain = () => {
  return (
    <div className="functional-main">
      <FunctionalHero />
      <FunctionalCardSec />

      <div className="d-none d-lg-block">
        <Ingredients />
      </div>
      <div className="d-block d-lg-none">
        <FunctionalIngredients />
      </div>

      <ConnectToOurUniverse />
    </div>
  );
};

export default FunctionalMain;
