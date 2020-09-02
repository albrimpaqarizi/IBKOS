import React from "react";
import "./styles/index.css";
import Carousel1 from "../UI/Carousel/Carousel_1";

const SectionS6 = () => {
  return (
    <div className="sectionS6 fullBackground">
      <div className="container ">
        <div className="d-flex justify-content-center flex-column align-items-center">
          <button className="btn-a btn-a2 btn-bg3 my-2">meet our team</button>
          <h1 className="font-r my-3 text-center">People Ready To Help You</h1>
        </div>
        <Carousel1 />
      </div>
    </div>
  );
};

export default SectionS6;
