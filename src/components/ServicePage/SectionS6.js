import React from "react";
import "./styles/index.css";
import Carousel1 from "../UI/Carousel/Carousel_1";
import OurButton from "../UI/Button/OurButton";
import { useTranslation } from "react-i18next";

const SectionS6 = () => {
  const { t } = useTranslation();

  return (
    <div className="sectionS6 fullBackground">
      <div className="container ">
        <div className="d-flex justify-content-center flex-column align-items-center">
          <OurButton
            btn="meetOurTeamBtn"
            classProps="text-capitalize px-4 py-2 font-s-small"
          />
          <h1 className="font-r my-3 text-center">{t("peopleHelpYou")} </h1>
        </div>
        <Carousel1 />
      </div>
    </div>
  );
};

export default SectionS6;
