import React from "react";
import SectionOne from "./SectionA1";
import SectionTwo from "./SectionA2";
import SectionThree from "./SectionA3";
import SectionFour from "./SectionA4";
import SectionFive from "./SectionA5";
import SectionSix from "./SectionA6";
import SectionSeven from "./SectionA7";
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
      <SectionSeven />
      <SignUpFooter />
    </div>
  );
};

export default index;
