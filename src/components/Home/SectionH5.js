import React from "react";
import { Link } from "react-router-dom";
import "./styles/SectionH5.css";
import "./styles/index.css";
import OurButton from "../UI/Button/OurButton";
import { useTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";

const SectionH5 = () => {
  const { t } = useTranslation();
  return (
    <div className="background-3 fullBackground">
      <div className="sectionH5 container my-auto">
        <div className="row">
          <div className="col-12 col-lg-6 "></div>
          <div className="col-12 col-lg-6 my-5 gallery-div">
            <Fade right cascade>
              <OurButton
                btn="whatWeWorkOnBtn"
                classProps="text-uppercase px-4 py-3 font-s-small"
              />
              <h1 className=" mt-5 mb-4 gallery-h ">
                {t("whatWeWorkOn.title")[0]}
                <br />
                <span className="blue-bg text-capitalize ">
                  {t("whatWeWorkOn.title")[1]}
                </span>
              </h1>
              <h6 className="mb-5 mt-4 light-bg gallery-p">
                {t("whatWeWorkOn.desc")}
              </h6>
              <Link to="/service" className="btn-a btn-a1  btn-light mt-4">
                {t("viewGalleryBtn")}
              </Link>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionH5;
