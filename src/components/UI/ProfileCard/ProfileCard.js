import React from "react";
import { Paper } from "@material-ui/core";
import SocialMedia from "./SocialMedia";
import "./ProfileCard.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  paper: {
    margin: "1%",
    padding: "0.5%",
    display: "flex",
    justifyContent: "center",
    flexFlow: "column",
    alignItems: "center",
    borderRadius: "15px",
    width: "275px",
    boxShadow: "none",
    height: "270px",
  },
});

const ProfileCard = (props) => {
  const classes = useStyles();
  return (
    <Paper elevation={2} className={classes.paper}>
      <div className="p-2 card-icon ">
        <img src={props.icon} className="img-responsive" alt="profile" />
      </div>
      <h5 className="font text-capitalize "> {props.profileName} </h5>
      <p> {props.jobTitle} </p>
      <SocialMedia />
    </Paper>
  );
};

export default ProfileCard;
