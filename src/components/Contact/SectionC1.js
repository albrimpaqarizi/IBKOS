import React from "react";
import "./styles/SectionC1.css";
import { useTranslation } from "react-i18next";

const SectionC1 = () => {
  const { t } = useTranslation();
  return (
    <div className="fullBackground sectionC1 ">
      <div className="container main-top">
        <div>
          <h1 className="text-capitalize text-center  text-white">
            {t("contactBanner.title")}
          </h1>
          <h3 className="text-center font-r text-white">
            {t("contactBanner.desc")}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SectionC1;
