import React from "react";
import { Link } from "react-router-dom";
import "./styles/SectionH1.css";
import "./styles/index.css";
import { useTranslation } from "react-i18next";
import ReadMore from "../UI/Button/ReadMore";

const SectionH1 = () => {
  const { t } = useTranslation();

  return (
    <div className="background-1 fullBackground">
      <div className="container main-top">
        <div className="sectionH1">
          <h1>{t("homeBanner.title")}</h1>
          <h6>{t("homeBanner.desc")}</h6>
          <div>
            <ReadMore />
            <Link
              to={`/${t("contactBtn.link")}`}
              className="btn-a btn-a1 btn-bg2"
            >
              {t("contactBtn.name")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionH1;
