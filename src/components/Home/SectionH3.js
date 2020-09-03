import React from "react";
import { Link } from "react-router-dom";
import "./styles/SectionH3.css";
import "./styles/index.css";
import about from "../../assets/images/home/Image1.jpg";

const SectionH3 = () => {
  return (
    <div className="background-2 fullBackground">
      <div className="sectionH3 container my-5">
        <div className="row">
          <div className="col-12 col-lg-6 about-img">
            <img className="img-thumbnail" src={about} alt="null" />
          </div>
          <div className="col-12 col-lg-6 div-2">
            <Link
              to="/about"
              className="my-2 btn-a btn-a2 btn-bg3 text-uppercase"
            >
              our about
            </Link>
            <h1 className="text-white dt my-3">A Few Words About Us</h1>
            <h6 className="text-white my-3 w-75">
              Our Consulting company is a leading firm of business managers and
              advisors with offices across the USA. We aim to provide you:
            </h6>
            <ul className="text-white pl-3 my-3">
              <li>
                <p className="text-white text-capitalize dt d-inline-block">
                  Quality reasrch & analysis{" "}
                </p>
              </li>
              <li>
                <p className="text-white text-capitalize dt d-inline-block">
                  Business advisory experience
                </p>
              </li>
            </ul>
            <Link to="/#" className="btn-a btn-a1 btn-bg2 ">
              read more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionH3;
