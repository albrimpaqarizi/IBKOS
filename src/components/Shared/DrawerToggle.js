import React from "react";
import DehazeIcon from "@material-ui/icons/Dehaze";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  button: {
    "&:focus": {
      outline: "none",
    },
  },
  icon: {
    color: "white",
  },
});
const DrawerToggle = (props) => {
  const classes = useStyles();
  return (
    <IconButton className={classes.button} onClick={props.clicked}>
      <DehazeIcon fontSize="large" className={classes.icon} />
    </IconButton>
  );
};

export default DrawerToggle;
