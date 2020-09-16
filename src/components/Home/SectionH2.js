import React from "react";
import ServiceCard from "./ServiceCard";
import "./styles/SectionH2.css";
import { useTranslation } from "react-i18next";
import OurButton from "../UI/Button/OurButton";

export const serviceCardImg = [
  "service_img_1",
  "service_img_2",
  "service_img_3",
  "service_img_4",
  "service_img_5",
  "service_img_6",
];

const SectionH2 = () => {
  const { t } = useTranslation();

  return (
    <div className="container py-4">
      <div className="sectionH2 home-center ">
        <OurButton
          btn="ourServicesBtn"
          classProps="text-capitalize px-4 py-1 font-s-medium"
        />
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
      </div>
    </div>
  );
};

export default SectionH2;
