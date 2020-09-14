import React from "react";
import { Paper } from "@material-ui/core";
import SocialMedia from "./SocialMediaCard";
import "./ProfileCard1.css";
import { Fade } from "react-reveal";

const ProfileCard1 = (props) => {
  return (
    <Fade bottom cascade>
      <Paper elevation={2} className={props.paper}>
        <div className="p-2 profileCard ">
          <img src={props.icon} alt="Profile images" />
        </div>
        <h4 className="font-cart text-center text-capitalize profileCard-h4">
          {props.profileName}
        </h4>
        <p className="profileCard-p text-capitalize"> {props.jobTitle} </p>
        <SocialMedia />
      </Paper>
    </Fade>
  );
};

export default ProfileCard1;
