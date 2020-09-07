import React from "react";
import ServiceCard from "./ServiceCard";
import "./styles/SectionH2.css";
import { serviceCardImg } from "../mapData";
import { useTranslation } from "react-i18next";
import OurButton from "../UI/Button/OurButton";

const SectionH2 = () => {
  const { t } = useTranslation();

  return (
    <div className="container py-4">
      <div className="sectionH2 home-center ">
        <OurButton btn="ourServicesBtn" />
        <h1 className="my-3 test">{t("whatWeDo")} </h1>
      </div>
      <div className="d-flex justify-content-center flex-wrap flex-row ">
        {t("whatWeDoList").map((item, index) => (
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
