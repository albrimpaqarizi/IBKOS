import React from "react";
import "./styles/index.css";
import "./styles/SectionA7.css";
import Carousel2 from "./Carousel_2";

const SectionA7 = () => {
  return (
    <div className="sectionA7 fullBackground">
      <div className="container ">
        <div className="d-flex justify-content-center flex-column align-items-center">
          <button className="btn-a btn-a2 btn-bg3 my-2">Testimonials</button>
          <h1 className="font-r my-3 text-center text-white">
            What Users Thinks About IBKOS
          </h1>
        </div>
        <Carousel2 />
      </div>
    </div>
  );
};

export default SectionA7;
