import React from "react";
import ProfileCard from "../UI/ProfileCard/ProfileCard_1";
import { profileCardImg } from "../Shared/mapData";
import "./styles/SectionH6.css";
import { makeStyles } from "@material-ui/core/styles";
import OurButton from "../UI/Button/OurButton";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles({
  paper: {
    margin: "2rem 0.8rem",
    padding: "0.5%",
    display: "flex",
    justifyContent: "center",
    flexFlow: "column",
    alignItems: "center",
    borderRadius: "15px",
    width: "275px",
    boxShadow: "none",
    height: "270px",
    "&:hover": {
      animation: "$slide 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
    },
  },
  "@keyframes slide": {
    "0%": {
      transform: "scale(1)",
    },
    "100%": {
      transform: "scale(0.9)",
      boxShadow: "0 10px 6px -6px #777",
    },
  },
});

const SectionH6 = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <div className="background-4 fullBackground">
      <div className="container py-4">
        <div className=" home-center ">
          <OurButton
            btn="meetOurTeamBtn"
            classProps="text-capitalize px-4 py-2 font-s-small"
          />
          <h1 className="my-1 text-initial">{t("ourProfessionalTeam")} </h1>
        </div>
        <div className="d-flex justify-content-center flex-wrap flex-row ">
          {t("ourTeam").map((item, index) => {
            return (
              <ProfileCard
                key={index}
                icon={profileCardImg[index]}
                profileName={item.profileName}
                jobTitle={item.jobTitle}
                paper={classes.paper}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SectionH6;
