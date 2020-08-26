import React from "react";
import { Link } from "react-router-dom";
import "./styles/SectionH1.css";
import "./styles/index.css";

const SectionH1 = () => {
  return (
    <div className="background-1 fullBackground">
      <div className="container main-top">
        <div className="sectionH1">
          <h1>Professional Business Consulting</h1>
          <h6>
            Business Provide reliable business planning, management and advisory
            services backed by years of experience in the industry.
          </h6>
          <div>
            <Link to="/#" className="btn-a btn-a1 btn-bg1 ">
              read more
            </Link>
            <Link to="/contact" className="btn-a btn-a1 btn-bg2">
              contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionH1;
