import React from "react";
import "./styles/SectionH3.css";
import "./styles/index.css";
import about from "../../assets/images/home/Image1.jpg";
import { useTranslation } from "react-i18next";
import ReadMore from "../UI/Button/ReadMore";
import OurButton from "../UI/Button/OurButton";

const SectionH3 = () => {
  const { t } = useTranslation();

  return (
    <div className="background-2 fullBackground">
      <div className="sectionH3 container py-5">
        <div className="row">
          <div className="col-12 col-lg-6 about-img">
            <img className="img-thumbnail" src={about} alt="null" />
          </div>
          <div className="col-12 col-lg-6 div-2">
            <OurButton btn="ourAboutBtn" />
            <h1 className="text-white dt my-3 text-inherit">
              {t("ourAbout.title")}{" "}
            </h1>
            <h6 className="text-white my-3 w-75 ">{t("ourAbout.desc")}</h6>
            <ul className="text-white pl-3 my-3">
              {t("ourAbout.textList").map((item, index) => (
                <li key={index}>
                  <p className="text-white text-inherit dt d-inline-block">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
            <ReadMore />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionH3;
