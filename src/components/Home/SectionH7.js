import React from "react";
import { Link } from "react-router-dom";
import "./styles/SectionH7.css";
import "./styles/index.css";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "./Accordion";

const useStyles = makeStyles({
  paper: {
    margin: "1%",
    padding: "2%",
    display: "flex",
    justifyContent: "center",
    flexFlow: "column",
    alignItems: "center",
  },
});

const SectionH7 = () => {
  const classes = useStyles();
  return (
    <div className="sectionH7 container my-5">
      <div className="row">
        <div className="col-12 col-lg-6 questions">
          <div>
            <Link to="/#" className="my-3 btn-a btn-a2 btn-bg3 text-uppercase">
              POPULAR QUESTIONS
            </Link>
          </div>
          <h2 className=" my-3 text-uppercase">faq</h2>
          <ul className="list-unstyled pl-0 my-3">
            <li className="my-3">
              <p className="text-black m-1 text-capitalize dt d-inline-block">
                General
              </p>
              <div className="progress h-1px">
                <div className="progress-bar w-25"></div>
              </div>
            </li>
            <li className="my-3">
              <p className="light-bg m-1  text-capitalize dt d-inline-block">
                Our Solutions
              </p>
              <div className="progress h-1px">
                <div className="progress-bar "></div>
              </div>
            </li>
            <li className="my-3">
              <p className="light-bg m-1  text-capitalize dt d-inline-block">
                Our Experience
              </p>
              <div className="progress h-1px">
                <div className="progress-bar "></div>
              </div>
            </li>
            <li className="my-3">
              <p className="light-bg m-1  text-capitalize dt d-inline-block">
                Costumer Service
              </p>
              <div className="progress h-1px">
                <div className="progress-bar "></div>
              </div>
            </li>
          </ul>
        </div>

        <div className="col-12 col-lg-6 my-3 ">
          <Paper className={classes.paper}>
            <h4 className="font-r text-center my-3">
              What is unique / and non unique purchase ?
            </h4>
            <p>
              Non-exclusive purchase means that other people can buy the
              template you have chosen some time later. Exclusive or unique
              purchase guarantees that you are the last person to buy this
              template. After an exclusive purchase occurs the template is being
              permanently removed from the sales directory and will never be
              available to other customers again. Only you and people who bought
              the template before you will own it.
            </p>
          </Paper>
          <Accordion />
        </div>
      </div>
    </div>
  );
};

export default SectionH7;
