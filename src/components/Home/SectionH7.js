import React from "react";
import "./styles/SectionH7.css";
import "./styles/index.css";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "./Accordion";
import FaqProgressBar from "./FaqProgressBar";
import { useTranslation } from "react-i18next";
import OurButton from "../UI/Button/OurButton";

const useStyles = makeStyles({
  paper: {
    margin: "1%",
    padding: "3%",
    display: "flex",
    justifyContent: "center",
    flexFlow: "column",
    alignItems: "center",
  },
});

const SectionH7 = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <div className="sectionH7 container my-5">
      <div className="row">
        <div className="col-12 col-lg-6 questions">
          <div>
            <OurButton
              btn="popularQuestionsBtn"
              classProps="text-uppercase px-3 py-2 font-s-small"
            />
          </div>
          <h2 className=" my-3 text-uppercase">faq</h2>
          <ul className="list-unstyled pl-0 my-3 list_progress">
            {t("faqList").map((item, index) => (
              <FaqProgressBar key={index} name={item} />
            ))}
          </ul>
        </div>

        <div className="col-12 col-lg-6 my-3 ">
          <Paper className={classes.paper}>
            <h4 className="font-r text-center text-col3 my-3 font-weight-bold">
              {t("faq.title")}
            </h4>
            <p className="font-600 text-col1">{t("faq.desc")}</p>
          </Paper>

          <div className="my-4 mx-1">
            {t("faqAccordion").map((item, index) => (
              <Accordion idx={index} title={item.question} desc={item.answer} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionH7;
