import React from "react";
import { Link } from "react-router-dom";
import "./SectionOne.css";

const SectionOne = () => {
  return (
    <div className="home-one">
      <h1>Professional Business Consulting</h1>
      <h6>
        Business Provide reliable business planning, management and advisory
        services backed by years of experience in the industry.
      </h6>
      <div>
        <Link to="/#" className="btn ">
          read more
        </Link>
        <Link to="/contact" className="btn">
          contact
        </Link>
      </div>
    </div>
  );
};

export default SectionOne;
