import React from "react";
import CardGrid from "./CardGrid";
import { Link } from "react-router-dom";
import "./styles/SectionA4.css";
import img1 from "../../assets/images/about/innovation.jpg";
import img2 from "../../assets/images/about/cookie.jpg";
import img3 from "../../assets/images/about/goal.jpg";
import img4 from "../../assets/images/about/innovation.jpg";
import img5 from "../../assets/images/about/sport-team.jpg";

const SectionA4 = () => {
  return (
    <div className="container sectionA4">
      <div className="grid-container grid-container--fill">
        <CardGrid img={img1} title=" Creative Space" />
        <CardGrid img={img2} title="Cookies" />
        <div className="grid-box">
          <h3 className="text-capitalize font-r my-3 ">Join Our Team</h3>
          <Link
            to="/contact"
            className="btn-a btn-a1 my-3 btn-bg1 text-capitalize"
          >
            contact us
          </Link>
        </div>
        <CardGrid img={img3} title="Growing Career" />
        <CardGrid img={img4} title="Benifits" />
        <CardGrid img={img5} title="Collaboration" />
      </div>
    </div>
  );
};

export default SectionA4;
