import React from "react";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import "./styles/SectionH2.css";
import { serviceCardImg } from "../mapData";
import { useTranslation } from "react-i18next";

const SectionH2 = () => {
  const { t } = useTranslation();

  return (
    <div className="container py-4">
      <div className="sectionH2 home-center ">
        <Link
          to="/service"
          className="btn-a btn-a2 btn-bg3 my-2   home-center-a"
        >
          our service
        </Link>
        <h1 className="my-2 test">what we do</h1>
      </div>
      <div className="d-flex justify-content-center flex-wrap flex-row ">
        {t("whatWeDo", { returnObjects: true }).map((item, index) => (
          <ServiceCard
            key={index}
            icon={serviceCardImg[index]}
            title={item.title}
            desc={item.desc}
          />
        ))}
        ;
      </div>
    </div>
  );
};

export default SectionH2;
