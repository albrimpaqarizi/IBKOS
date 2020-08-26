import React from "react";
import { Link } from "react-router-dom";
import "./styles/SectionH5.css";
import "./styles/index.css";

const SectionH5 = () => {
  return (
    <div className="background-3 fullBackground">
      <div className="sectionH5 container my-5">
        <div className="row">
          <div className="col-12 col-lg-6 "></div>
          <div className="col-12 col-lg-6 my-5 gallery-div">
            <Link
              to="/about"
              className="my-4 btn-a btn-a2 btn-bg3 text-uppercase"
            >
              WHAT WE WORK ON
            </Link>
            <h2 className=" my-5 gallery-h">
              Browse Our Latest
              <br />{" "}
              <span className="blue-bg text-capitalize ">
                Consulting Projects
              </span>
            </h2>
            <h6 className="my-5 light-bg gallery-p">
              Our team has worked on a wide variety of consulting and management
              projects since our establishment. Take a look at some of them in
              our project gallery.
            </h6>
            <Link to="/#" className="btn-a btn-a1 btn-bg2 btn-light">
              View Gallery
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionH5;
