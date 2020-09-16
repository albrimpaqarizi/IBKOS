import React from "react";
import "./styles/SectionA3.css";
import "./styles/index.css";

const SectionA3 = () => {
  return (
    <div className="sectionA3 py-md-5">
      <div className="container " id="sectionA3">
        <div className="row">
          <div className="col-lg-4  box-1">
            <div className="box-img">
              <h3>12700+</h3>
              <h6 className="text-col1  text-center w-50">
                Businessmen Choose us
              </h6>
            </div>
            <div className="img_css img2" />
          </div>
          <div className="col-lg-8  box-2 my-2">
            <div className="d-flex flex-wrap flex-row ">
              <div className="img_css img1" />
              <div className="img_css img3" />
              <div className="img_css img4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionA3;
