import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import FunctionalHero from "./functionalHero";
import FunctionalCardSec from "./functionalCards";
import Ingredients from "./ingredients";
import ConnectToOurUniverse from "../contact";

const FunctionalMain = () => {
  return (
    <div className="functional-main">
      <FunctionalHero />
      <FunctionalCardSec />
      <Ingredients />
      <ConnectToOurUniverse />
    </div>
  );
};

export default FunctionalMain;
