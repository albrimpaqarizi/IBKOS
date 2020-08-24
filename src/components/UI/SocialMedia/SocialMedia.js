import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import "./SocialMedia.css";

const SocialMedia = () => {
  return (
    <div className="SocalMedia">
      <InstagramIcon />
      <TwitterIcon />
      <FacebookIcon />
      <LinkedInIcon />
    </div>
  );
};

export default SocialMedia;
