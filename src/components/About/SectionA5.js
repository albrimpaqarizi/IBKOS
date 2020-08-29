import React from "react";
import "./styles/index.css";
import Carousel1 from "./Carousel1";

const SectionA5 = () => {
  return (
    <div className="sectionA5 fullBackground">
      <div className="container ">
        <div className="d-flex justify-content-center flex-column align-items-center">
          <button className="btn-a btn-a2 btn-bg3 my-2">meet our team</button>
          <h1 className="font-r my-3">People Ready To Help You</h1>
        </div>
      </div>
      <Carousel1 />
    </div>
  );
};

export default SectionA5;
