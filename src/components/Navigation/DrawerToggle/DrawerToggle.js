import React from "react";
import DehazeIcon from "@material-ui/icons/Dehaze";
import IconButton from "@material-ui/core/IconButton";
import "./DrawerToggle.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  icon: {
    color: "white",
  },
});
const DrawerToggle = (props) => {
  const classes = useStyles();
  return (
    <div>
      <IconButton onClick={props.clicked}>
        <DehazeIcon fontSize="large" className={classes.icon} />
      </IconButton>
    </div>
  );
};

export default DrawerToggle;
