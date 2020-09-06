import React from "react";
import { Link } from "react-router-dom";
import ProfileCard from "../UI/ProfileCard/ProfileCard_1";
import { listProfile, profileCardImg } from "../mapData";
import "./styles/SectionH6.css";
import { makeStyles } from "@material-ui/core/styles";

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
  return (
    <div className="background-4 fullBackground">
      <div className="container py-4">
        <div className=" home-center ">
          <Link to="/service" className="btn-a btn-a2 btn-bg3 my-2">
            Meet Our Team
          </Link>
          <h1 className="my-1">Our Professional Team</h1>
        </div>
        <div className="d-flex justify-content-center flex-wrap flex-row ">
          {listProfile.map((item, index) => {
            return (
              <ProfileCard
                key={index}
                icon={item.icon}
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
