import React from "react";
import "./styles/SectionA3.css";
import "./styles/index.css";
import img1 from "../../assets/images/about/sebastian-herrmann-O2o1hzDA7iE-unsplash.jpg";
import img2 from "../../assets/images/about/MaskGroup4.jpg";
import img3 from "../../assets/images/about/MaskGroup5.jpg";
import img4 from "../../assets/images/about/MaskGroup6.jpg";

const SectionA3 = () => {
  return (
    <div className="sectionA3 py-5">
      <div className="container " id="sectionA3">
        <div className="row">
          <div className="col-lg-4 px-0 box-1">
            <div className="box-img">
              <h3 className="font-r">12700+</h3>
              <h6 className="text-col1 font-r text-center w-75">
                Businessmen Choose us
              </h6>
            </div>
            <img
              src={img2}
              className="img-fluid w-100 p-2"
              alt="Member on the street"
            />
          </div>
          <div className="col-lg-8 px-0 my-2">
            <div className="d-flex flex-wrap flex-row ">
              <img
                src={img1}
                className="img-fluid w-100 p-2"
                alt="Team on the office"
              />
              <img
                src={img3}
                className="img-fluid w-50 p-2"
                alt="Team on the office"
              />
              <img
                src={img4}
                className="img-fluid w-50 p-2"
                alt="Team on the office"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionA3;
