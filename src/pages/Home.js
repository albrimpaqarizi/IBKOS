import React from "react";
import "./main.css";
import SectionOne from "../components/Home/SectionH1";
import SectionTwo from "../components/Home/SectionH2";
import SectionThree from "../components/Home/SectionH3";
import SectionFour from "../components/Home/SectionH4";
import SectionFive from "../components/Home/SectionH5";
import SectionSix from "../components/Home/SectionH6";
import SectionSeven from "../components/Home/SectionH7";

const Home = () => {
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

export default Home;
