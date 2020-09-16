import React from "react";
import "./styles/index.css";
import "./styles/SectionS5.css";
import SolutionCard from "./SolutionCard";
import { useTranslation } from "react-i18next";

const SectionS5 = () => {
  const { t } = useTranslation();

  return (
    <div className="sectionS5 fullBackground">
      <div className="container my-3" id="sectionS5">
        <div className="row">
          <div className="col-md-6 order-md-2 mb-4">
            <h2 className="text-white font-r my-3">
              {t("solutions.title")[0]} <br />
              {t("solutions.title")[1]}
            </h2>
            <h5 className="font-r text-white my-5">{t("solutions.desc")}</h5>
            <button className="btn-a btn-a3 btn-bg4 font-r my-3">
              {t("quoteBtn")}
            </button>
          </div>
          <div className="col-md-6 order-md-1 ">
            <div className="row">
              <div className="col-lg-6 px-2  ">
                <SolutionCard title="1880+" desc={t("solutionsCard")[0]} />
                <SolutionCard title="950+" desc={t("solutionsCard")[1]} />
              </div>
              <div className="col-lg-6 px-2 my-auto">
                <SolutionCard title="100%" desc={t("solutionsCard")[2]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionS5;
