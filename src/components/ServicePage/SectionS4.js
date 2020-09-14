import React from "react";
import "./styles/SectionS4.css";
import { makeStyles } from "@material-ui/core/styles";
import MethodCard from "./MethodCard";
import { useTranslation } from "react-i18next";
import { methodCardImg } from "../Shared/mapData";

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
  const { t } = useTranslation();

  return (
    <div className="sectionS4 py-5">
      <div className="container ">
        <h1 className="font-r text-capitalize text-center mb-3">
          {t("ourMethodsText")}{" "}
        </h1>
        <div className="sectionS4-cards">
          {t("ourMethods").map((item, index) => (
            <MethodCard
              key={index}
              img={methodCardImg[index]}
              avatar={classes.avatar}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionS3;
