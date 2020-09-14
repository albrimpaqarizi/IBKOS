import React from "react";
import { Paper } from "@material-ui/core";
import "./ProfileCard2.css";

const ProfileCard2 = (props) => {
  return (
    <Paper elevation={2} className={props.paper}>
      <div className="p-2 profileCard-2  ">
        <img src={props.icon} alt="Profile images" />
      </div>
      <p className=" profileCard-2-p ">{props.desc} </p>
      <h4 className="font-cart text-center my-1 text-capitalize profileCard-2-h4">
        {props.profileName}
      </h4>
      <h6 className=" profileCard-2-h6 text-center my-2"> {props.jobTitle} </h6>
    </Paper>
  );
};

export default ProfileCard2;
