import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(16),
    fontWeight: "600",
    color: "#606a74",
  },
  accordion: {
    margin: " 3% 0%",
    borderRadius: "0.7rem !important",
    border: "1px solid transparent !important",
    "&::before": {
      height: "0px",
    },
  },
  p: {
    fontWeight: "600",
    color: "#606a74",
    textAlign: "left",
  },
}));

const AccordionCard = (props) => {
  const classes = useStyles();
  return (
    <Accordion className={classes.accordion}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`content-${props.idx}`}
        id={`header-${props.idx}`}
      >
        <h6 className={classes.heading}>{props.title}</h6>
      </AccordionSummary>
      <AccordionDetails>
        <p className={classes.p}>{props.desc}</p>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionCard;
