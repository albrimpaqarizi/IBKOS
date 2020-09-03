import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import "./SocialMediaCard.css";

const SocalMediaCard = () => {
  return (
    <div className="SocalMediaCard w-100">
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.instagram.com"
      >
        <InstagramIcon />
      </a>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.twitter.com"
      >
        <TwitterIcon />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.facebook.com"
      >
        <FacebookIcon />
      </a>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.linkedin.com"
      >
        <LinkedInIcon />
      </a>
    </div>
  );
};

export default SocalMediaCard;
