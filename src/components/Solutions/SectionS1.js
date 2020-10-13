import React from "react";
import "./styles/index.css";
import "./styles/SectionS1.css";
import { useTranslation } from "react-i18next";

const SectionS1 = () => {
  const { t } = useTranslation();

  return (
    <div className="sectionS1 fullBackground">
      <div className="container main-top">
        <div>
          <h1 className="text-capitalize text-center font-r">
            {t("serviceBanner.title")}
          </h1>
          <h4 className="font-r my-md-3">{t("serviceBanner.desc")}</h4>
        </div>
      </div>
    </div>
  );
};

export default SectionS1;
