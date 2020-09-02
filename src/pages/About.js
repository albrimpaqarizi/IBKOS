import React from "react";
import "./main.css";
import SectionOne from "../components/About/SectionA1";
import SectionTwo from "../components/About/SectionA2";
import SectionThree from "../components/About/SectionA3";
import SectionFour from "../components/About/SectionA4";
import SectionFive from "../components/About/SectionA5";
import SectionSix from "../components/About/SectionA6";
import SectionSeven from "../components/About/SectionA7";

const About = () => {
  return (
    <div>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
    </div>
  );
};

export default About;
