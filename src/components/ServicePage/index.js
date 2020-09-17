import React from "react";
import SectionOne from "./SectionS1";
import SectionTwo from "./SectionS2";
import SectionThree from "./SectionS3";
import SectionFour from "./SectionS4";
import SectionFive from "./SectionS5";
import SectionSix from "./SectionS6";
import SignUpFooter from "../Shared/SignUpFooter/SignUpFooter";

const index = () => {
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

export default index;
