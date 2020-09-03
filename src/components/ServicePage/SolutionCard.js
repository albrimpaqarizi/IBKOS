import React from "react";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  paper: {
    backgroundColor: "rgb(77 78 80 / 43%)",
    padding: "1rem",
    borderRadius: "25px",
    margin: "8% 0",
    height: "170px",
  },
});

const SolutionCard = (props) => {
  const classes = useStyles();
  return (
    <Paper elevation={0} className={classes.paper}>
      <h3 className="text-white font-r font-weight-bold"> {props.title} </h3>
      <p className="text-white "> {props.desc}</p>
    </Paper>
  );
};

export default SolutionCard;
