import React from "react";
import { Paper } from "@material-ui/core";
import "./styles/ServiceCard.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  paper: {
    margin: "0.8%",
    padding: "1%",
    display: "flex",
    justifyContent: "center",
    flexFlow: "column",
    alignItems: "center",
    borderRadius: "15px",
    width: "300px",
    transform: "scale(0.95)",
    "&:hover": {
      cursor: "pointer",
      animation:
        "$slide-fwd-center 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
    },
  },
  "@keyframes slide-fwd-center": {
    "0%": {
      transform: "scale(0.95)",
    },
    "100%": {
      transform: "scale(1)",
    },
  },
});

const ServiceCard = (props) => {
  const classes = useStyles();
  return (
    <div className="m-md-3 serviceCard">
      <Paper elevation={2} className={classes.paper}>
        <div className="p-3 mb-4 serviceCard__img bg-light">
          <div className={`${props.icon}  img_css`}></div>
        </div>
        <h4 className="font-cart text-center text-capitalize service-h4 ">
          {props.title}
        </h4>
        <p className="text-center service-p px-2"> {props.desc} </p>
      </Paper>
    </div>
  );
};

export default ServiceCard;
