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
          <OurButton btn="whyUsBtn" />
          <h2 className=" my-4">
            {t("whyUs.title")[0]}
            <br /> <span className="blue-bg "> {t("whyUs.title")[1]}</span>
          </h2>
          <h6 className=" my-4 w-75">{t("whyUs.desc")}</h6>
          <ul className="pl-3 my-4 blue-bg ">
            {t("whyUs.textList").map((item, index) => (
              <li key={index}>
                <p className=" text-inherit d-inline-block">{item}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-12 col-lg-6 analysis-img text-center">
          <img className="img-thumbnail" src={analysis} alt="null" />
        </div>
      </div>
    </div>
  );
};

export default SectionH4;
