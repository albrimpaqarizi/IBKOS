import React from "react";
import { Paper } from "@material-ui/core";
import SocialMedia from "./SocialMediaCard";
import "./ProfileCard1.css";

const ProfileCard1 = (props) => {
  return (
    <Paper elevation={2} className={props.paper}>
      <div className="p-2 profileCard ">
        <div className={`${props.icon} img_css`}></div>
      </div>
      <h4 className="font-cart text-center text-capitalize profileCard-h4">
        {props.profileName}
      </h4>
      <p className="profileCard-p text-capitalize"> {props.jobTitle} </p>
      <SocialMedia />
    </Paper>
  );
};

export default ProfileCard1;
