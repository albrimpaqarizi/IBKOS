import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import SmartphoneIcon from "@material-ui/icons/Smartphone";
import MailIcon from "@material-ui/icons/Mail";
import "./SectionC2.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  icons: {
    color: "#259BF9",
  },
});

const Office = (props) => {
  const classes = useStyles();
  return (
    <div className="box">
      <h3 className="text-capitalize font-r">{props.name}</h3>
      <ul className="list-group ">
        <li className="list-group-item pl-0 border-0">
          <LocationOnIcon className={classes.icons} />
          <a href="/#" className="text-col1 text-decoration-none">
            9863 - 9867 Mill Road, Cambridge, MG09 99HT
          </a>
        </li>
        <li className="list-group-item pl-0 border-0">
          <SmartphoneIcon className={classes.icons} />
          <a href="tel:+18006036035" className="text-col1 text-decoration-none">
            +1 800 603 6035
          </a>
        </li>
        <li className="list-group-item pl-0 border-0">
          <MailIcon className={classes.icons} />
          <a
            href="mailto: mail@ibkos.com"
            className="text-col1 text-decoration-none"
          >
            mail@ibkos.com
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Office;
