import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
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
        <Typography className={classes.heading}>{props.title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography className={classes.p}>{props.desc}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionCard;
