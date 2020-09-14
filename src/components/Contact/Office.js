import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import SmartphoneIcon from "@material-ui/icons/Smartphone";
import MailIcon from "@material-ui/icons/Mail";
import "./styles/SectionC2.css";
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
      <h3 className=" font-r">{props.name}</h3>
      <ul className="list-group ">
        <li className="list-group-item pl-0 border-0">
          <LocationOnIcon className={classes.icons} />
          <a href={props.linkMap} className="text-col1 text-decoration-none">
            {props.linkName}
          </a>
        </li>
        <li className="list-group-item pl-0 border-0">
          <SmartphoneIcon className={classes.icons} />
          <a href="tel:+38343560863" className="text-col1 text-decoration-none">
            +383 43 560 863
          </a>
        </li>
        <li className="list-group-item pl-0 border-0">
          <MailIcon className={classes.icons} />
          <a
            href="mailto:info@ibkos.com"
            className="text-col1 text-decoration-none"
          >
            info@ibkos.com
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Office;
