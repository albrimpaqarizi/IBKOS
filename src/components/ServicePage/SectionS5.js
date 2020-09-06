import React from "react";
import "./styles/index.css";
import "./styles/SectionS5.css";
import SolutionCard from "./SolutionCard";

const SectionS5 = () => {
  return (
    <div className="sectionS5 fullBackground">
      <div className="container my-3">
        <div className="row">
          <div className="col-md-6 order-md-2 mb-4">
            <h2 className="text-white font-r my-3">
              Why Choose Our Company <br />
              For Your Solutions?
            </h2>
            <h5 className="font-r text-white my-5">
              We are a team of professional and enthusiastic people, who like
              what they do and are always in the process of growing and
              improving their skills.
            </h5>
            <button className="btn-a btn-a3 btn-bg4 font-r my-3">
              Get a Quote
            </button>
          </div>
          <div className="col-md-6 order-md-1">
            <div className="row">
              <div className="col-lg-6 px-2 ">
                <SolutionCard
                  title="1880+"
                  desc="Projects completed by our team of consultant that they offered solutions for business."
                />
                <SolutionCard
                  title="1300"
                  desc=" Positive reviews sent by our first-time and regular customers."
                />
              </div>
              <div className="col-lg-6 px-2 my-auto">
                <SolutionCard
                  title="100%"
                  desc="Positive reviews sent by our first-time and regular customers."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionS5;