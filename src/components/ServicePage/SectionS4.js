import React from "react";
import img1 from "../../assets/images/outmethods_quantitative-3-3.svg";
import img2 from "../../assets/images/ourmethods_qualitative_.svg";
import "./styles/SectionS4.css";
import { makeStyles } from "@material-ui/core/styles";
import MethodCard from "./MethodCard";

const useStyles = makeStyles({
  avatar: {
    width: "70px",
    height: "70px",
    border: "1px solid black",
    "& > img": {
      padding: "10px",
    },
    borderColor: "rgb(40, 118, 221)",
    boxShadow:
      "3px 3px #2876dd66, 6px 6px #2876dd4d, 9px 9px #2876dd33, 12px 12px #2876dd1a, 15px 15px #2876dd0d",
  },
});

const SectionS3 = () => {
  const classes = useStyles();

  return (
    <div className="sectionS4 py-5">
      <div className="container ">
        <h1 className="font-r text-center mb-3">Our Methods</h1>
        <div className="sectionS4-cards">
          <MethodCard img={img1} avatar={classes.avatar} />
          <MethodCard img={img2} avatar={classes.avatar} />
        </div>
      </div>
    </div>
  );
};

export default SectionS3;
