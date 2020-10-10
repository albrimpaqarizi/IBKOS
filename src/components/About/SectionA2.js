import React from "react";
import { Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FaQuoteLeft } from "react-icons/fa";
import "./styles/index.css";
import "./styles/SectionA2.css";
import { useTranslation } from "react-i18next";
import ReadMore from "../UI/Button/ReadMore";

const useStyles = makeStyles({
  divider: {
    width: "80%",
    margin: "1.5rem auto",
    height: "2px",
  },
});

const SectionH2 = (props) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className="sectionA2 container my-5">
      <div className="row">
        <div className="col-12 col-lg-6 pr-4">
          <h2 className="font-r py-2">{t("TeamConsultants.title")}</h2>
          <p className="text-left font-r text-col1 my-3 py-3">
            {t("TeamConsultants.desc")}
          </p>
          <ReadMore
            classProps="btn-bg1 font-s-small "
            link="sectionA4"
            offset={-90}
          />

          <Divider className={classes.divider} />
          <div className="d-flex justify-content-start align-items-center">
            <i className="quote-col">
              <FaQuoteLeft />
            </i>
            <p className="font-r text-col2 text-left m-0">{t("teamMember")}</p>
          </div>
          <Divider className={classes.divider} />
          <div className="d-flex justify-content-start align-items-center profile-text">
            <span className="font-r text-col2 text-left mr-2">
              "Arturo Meier"
            </span>
            <div className="profile_member img_css"></div>
          </div>
        </div>
        <div className="col-12 col-lg-6 about-consult py-5">
          <div
            role="img"
            aria-label="Coffee and croissant."
            className="img_consult img_css"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SectionH2;
