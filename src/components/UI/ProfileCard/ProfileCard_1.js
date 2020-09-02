import React from "react";
import { Paper } from "@material-ui/core";
import SocialMedia from "./SocialMedia";
import "./ProfileCard1.css";

const ProfileCard1 = (props) => {
  return (
    <Paper elevation={2} className={props.paper}>
      <div className="p-2 profileCard ">
        <img src={props.icon} alt="profile" />
      </div>
      <h4 className="font-cart text-center text-capitalize profileCard-h4">
        {props.profileName}
      </h4>
      <p className="profileCard-p"> {props.jobTitle} </p>
      <SocialMedia />
    </Paper>
  );
};

export default ProfileCard1;
