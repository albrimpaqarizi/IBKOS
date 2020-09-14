import React from "react";
import "./styles/SectionH3.css";
import "./styles/index.css";
import about from "../../assets/images/home/Image1.jpg";
import { useTranslation } from "react-i18next";
import ReadMore from "../UI/Button/ReadMore";
import OurButton from "../UI/Button/OurButton";
import Fade from "react-reveal/Fade";

const SectionH3 = () => {
  const { t } = useTranslation();

  return (
    <div className="background-2 fullBackground">
      <div className="sectionH3 container py-5">
        <div className="row">
          <div className="col-12 col-lg-6 about-img">
            <img
              className="img-thumbnail"
              src={about}
              alt="Working in office"
            />
          </div>
          <Fade right cascade>
            <div className="col-12 col-lg-6 div-2">
              <OurButton
                btn="ourAboutBtn"
                classProps="text-uppercase px-3 py-1 font-s-medium"
              />
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
              <ReadMore classProps="btn-light" link="sectionH4" offset={-190} />
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default SectionH3;
