import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { makeStyles } from "@material-ui/core/styles";
import "./SocialMedia.css";

const useStyles = makeStyles({
  icon: {
    fontSize: "2rem",
  },
});

const SocialMedia = () => {
  const classes = useStyles();
  return (
    <div className="SocalMedia">
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.instagram.com"
      >
        <InstagramIcon className={classes.icon} />
      </a>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.twitter.com"
      >
        <TwitterIcon className={classes.icon} />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.facebook.com"
      >
        <FacebookIcon className={classes.icon} />
      </a>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.linkedin.com"
      >
        <LinkedInIcon className={classes.icon} />
      </a>
    </div>
  );
};

export default SocialMedia;
