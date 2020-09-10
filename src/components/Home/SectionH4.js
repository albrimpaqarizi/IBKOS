import React from "react";
import "./styles/SectionH4.css";
import "./styles/index.css";
import analysis from "../../assets/images/home/home-01-610x432.jpg";
import OurButton from "../UI/Button/OurButton";
import { useTranslation } from "react-i18next";

const SectionH4 = () => {
  const { t } = useTranslation();
  return (
    <div className="sectionH4 container my-5">
      <div className="row">
        <div className="col-12 col-lg-6">
          <OurButton
            btn="whyUsBtn"
            classProps="text-uppercase px-4 py-1 font-s-medium"
          />
          <h1 className=" my-4 ">
            {t("whyUs.title")[0]}
            <br /> <span className="blue-bg "> {t("whyUs.title")[1]}</span>
          </h1>
          <h6 className=" my-4 w-75 font-s-medium font-500 text-col1">
            {t("whyUs.desc")}
          </h6>
          <ul className="pl-3 my-4 blue-bg font-s-medium ">
            {t("whyUs.textList").map((item, index) => (
              <li key={index}>
                <p className=" text-inherit  text-col1 font-500 d-inline-block">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-12 col-lg-6 analysis-img text-center">
          <img
            className="img-thumbnail"
            src={analysis}
            alt="Diagram with statistics"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionH4;
