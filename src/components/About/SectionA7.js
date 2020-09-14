import React from "react";
import "./styles/index.css";
import "./styles/SectionA7.css";
import Carousel2 from "./Carousel_2";
import { useTranslation } from "react-i18next";
import OurButton from "../UI/Button/OurButton";

const SectionA7 = () => {
  const { t } = useTranslation();

  return (
    <div className="sectionA7 fullBackground">
      <div className="container " id="sectionA7">
        <div className="d-flex justify-content-center flex-column align-items-center">
          <OurButton
            btn="testimonialsBtn"
            classProps="text-capitalize px-4 py-2 font-s-small"
          />
          <h1 className="font-r my-3 text-center text-white">
            {t("whatThink")}
          </h1>
        </div>
        <Carousel2 />
      </div>
    </div>
  );
};

export default SectionA7;
