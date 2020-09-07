import React from "react";
import { Link } from "react-router-dom";
import "./styles/SectionH5.css";
import "./styles/index.css";
import OurButton from "../UI/Button/OurButton";
import { useTranslation } from "react-i18next";

const SectionH5 = () => {
  const { t } = useTranslation();
  return (
    <div className="background-3 fullBackground">
      <div className="sectionH5 container my-auto">
        <div className="row">
          <div className="col-12 col-lg-6 "></div>
          <div className="col-12 col-lg-6 my-5 gallery-div">
            <OurButton btn="whatWeWorkOnBtn" />
            <h2 className=" my-5 gallery-h">
              {t("whatWeWorkOn.title")[0]}
              <br />
              <span className="blue-bg text-capitalize ">
                {t("whatWeWorkOn.title")[1]}
              </span>
            </h2>
            <h6 className="my-5 light-bg gallery-p">
              {t("whatWeWorkOn.desc")}
            </h6>
            <Link
              to={`/${t("viewGalleryBtn.link")}`}
              className="btn-a btn-a1 btn-bg2 btn-light mt-4"
            >
              {t("viewGalleryBtn.name")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionH5;
