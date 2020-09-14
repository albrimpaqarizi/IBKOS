import React from "react";
import { useTranslation } from "react-i18next";
import "./styles/index.css";

const SectionA1 = () => {
  const { t } = useTranslation();
  return (
    <div className="sectionA1 fullBackground">
      <div className="container">
        <h1 className=" text-center font-r text-white ">{t("aboutBanner")}</h1>
      </div>
    </div>
  );
};

export default SectionA1;
