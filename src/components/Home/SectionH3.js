import React from "react";
import "./styles/SectionH3.css";
import "./styles/index.css";
import { useTranslation } from "react-i18next";
import ReadMore from "../UI/Button/ReadMore";
import OurButton from "../UI/Button/OurButton";
import { Fade } from "react-reveal";

const SectionH3 = () => {
  const { t } = useTranslation();

  return (
    <div className="background-2 fullBackground">
      <div className="sectionH3 container py-2">
        <div className="row">
          <Fade bottom cascade>
            <div className="col-12 col-lg-6 about_img_div py-4">
              <div className="about_img img_css"></div>
            </div>
          </Fade>
          <div className="col-12 col-lg-6 div-2 py-3 my-4">
            <OurButton
              btn="ourAboutBtn"
              classProps="text-uppercase px-3 py-1 font-s-medium"
            />
            <Fade right cascade>
              <h1 className="text-white dt my-3 text-inherit">
                {t("ourAbout.title")}
              </h1>
              <h6 className="text-white my-3 w-75 font-600 ">
                {t("ourAbout.desc")}
              </h6>
              <ul className="text-white pl-3 my-3">
                {t("ourAbout.textList").map((item, index) => (
                  <li key={index}>
                    <p className="text-white text-inherit font-600 d-inline-block">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </Fade>
            <ReadMore classProps="btn-light" link="sectionH4" offset={-190} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionH3;
