import React from "react";
import { Paper } from "@material-ui/core";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 992,
      lg: 1280,
      xl: 1920,
    },
  },
});

const useStyles = makeStyles({
  paper: {
    backgroundColor: "transparent",
    // padding: "0.6rem 1.5rem",
    // borderRadius: "25px",
    marginBottom: "8%",
    height: "190px",
    [theme.breakpoints.down("sm")]: {
      height: "auto",
      marginBottom: "6%",
    },
  },
});

const SolutionCard = (props) => {
  const classes = useStyles();
  return (
    <Paper elevation={0} className={classes.paper}>
      <div className={`img_css solutionCard_img${props.idx + 1}`}>
        <h2 className="text-white font-r font-weight-bold ">{props.title}</h2>
        <p className="text-white"> {props.desc}</p>
      </div>
    </Paper>
  );
};

export default SolutionCard;
