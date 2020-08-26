import React from "react";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import "./styles/SectionH2.css";
import { listServices } from "./mapData";

const SectionH2 = () => {
  return (
    <div className="container py-4">
      <div className="sectionH2 home-center ">
        <Link to="/service" className="btn-a btn-a2 btn-bg3 my-2">
          our service
        </Link>
        <h1 className="my-2">what we do</h1>
      </div>
      <div className="d-flex justify-content-center flex-wrap flex-row ">
        {listServices.map((item, index) => {
          return (
            <ServiceCard
              key={index}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SectionH2;
