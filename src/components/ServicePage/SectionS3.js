import React from "react";
import "./styles/index.css";
import "./styles/SectionS3.css";
import MediaCard from "./MediaCard";
import img1 from "../../assets/images/lycs-architecture-U2BI3GMnSSE-unsplash.jpg";
import img2 from "../../assets/images/balazs-ketyi-LPWl2pEVGKc-unsplash.jpg";
import img3 from "../../assets/images/scott-graham-5fNmWej4tAA-unsplash.jpg";

const SectionS3 = () => {
  return (
    <div className="sectionS3 fullBackground">
      <div className="container ">
        <div className="d-flex justify-content-center flex-column align-items-center">
          <button className="btn-a btn-a2 btn-bg3 my-2">focuses</button>
          <h1 className="font-r my-3 text-center text-white">Our Focus</h1>
          <div className="d-flex media-card">
            <MediaCard img={img1} title="Companies" />
            <MediaCard img={img2} title="Brands" />
            <MediaCard img={img3} title="Solutions" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionS3;
