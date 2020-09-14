import React from "react";
import "./main.css";
import SectionOne from "../components/ServicePage/SectionS1";
import SectionTwo from "../components/ServicePage/SectionS2";
import SectionThree from "../components/ServicePage/SectionS3";
import SectionFour from "../components/ServicePage/SectionS4";
import SectionFive from "../components/ServicePage/SectionS5";
import SectionSix from "../components/ServicePage/SectionS6";
import SignUpFooter from "../components/Shared/SignUpFooter/SignUpFooter";

const Service = () => {
  return (
    <div>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SignUpFooter />
    </div>
  );
};

export default Service;
