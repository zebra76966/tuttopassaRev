import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import ConnectToOurUniverse from "../contact";
import AboutHero from "./aboutHero";
import AboutContent from "./aboutContent";

const AboutMain = () => {
  return (
    <div className="functional-main">
      <AboutHero />
      <AboutContent />
      <ConnectToOurUniverse />
    </div>
  );
};
export default AboutMain;
