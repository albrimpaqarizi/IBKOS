import React from "react";
import { Link } from "react-router-dom";
import "./styles/SectionH4.css";
import "./styles/index.css";
import analysis from "../../assets/images/home/home-01-610x432.jpg";

const SectionH4 = () => {
  return (
    <div className="sectionH4 container my-5">
      <div className="row">
        <div className="col-12 col-lg-6">
          <Link
            to="/about"
            className="my-3 btn-a btn-a2 btn-bg3 text-uppercase"
          >
            why us
          </Link>
          <h2 className=" my-4">
            Reasons People <br /> <span className="blue-bg ">Choose IBKOS</span>
          </h2>
          <h6 className=" my-4 w-75">
            We believe there are many good reasons for you to choose us for your
            business consoulting here are some of them:
          </h6>
          <ul className="pl-3 my-4 blue-bg ">
            <li>
              <p className=" text-capitalize d-inline-block">Qualified team</p>
            </li>
            <li>
              <p className=" text-capitalize d-inline-block">
                15 years experience
              </p>
            </li>
            <li>
              <p className=" text-capitalize  d-inline-block">Flexibility</p>
            </li>
          </ul>
        </div>
        <div className="col-12 col-lg-6 analysis-img text-center">
          <img className="img-thumbnail" src={analysis} alt="null" />
        </div>
      </div>
    </div>
  );
};

export default SectionH4;
