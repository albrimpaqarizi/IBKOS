import React from "react";
import { Paper } from "@material-ui/core";
import "./styles/ServiceCard.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  paper: {
    margin: "0.8%",
    padding: "0.5%",
    display: "flex",
    justifyContent: "center",
    flexFlow: "column",
    alignItems: "center",
    borderRadius: "15px",
    width: "275px",
    transform: "scale(0.95)",
    "&:hover": {
      cursor: "pointer",
      animation:
        " $slide-fwd-center 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
    },
  },
  "@keyframes slide-fwd-center": {
    "0%": {
      // -webkit-transform: scale(0.95);
      transform: "scale(0.95)",
    },
    "100%": {
      // -webkit-transform: scale(1);
      transform: "scale(1)",
    },
  },
});

const ServiceCard = (props) => {
  const classes = useStyles();
  return (
    <Paper elevation={2} className={classes.paper}>
      <div className="p-3 serviceCard bg-light">
        <img src={props.icon} alt="stock-market.svg" />
      </div>
      <h4 className="font-cart text-center text-capitalize service-h4 ">
        {props.title}
      </h4>
      <p className="text-center service-p"> {props.desc} </p>
    </Paper>
  );
};

export default ServiceCard;
