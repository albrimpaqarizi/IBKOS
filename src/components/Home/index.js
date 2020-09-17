import React from "react";
import SectionOne from "./SectionH1";
import SectionTwo from "./SectionH2";
import SectionThree from "./SectionH3";
import SectionFour from "./SectionH4";
import SectionFive from "./SectionH5";
import SectionSix from "./SectionH6";
import SectionSeven from "./SectionH7";
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
