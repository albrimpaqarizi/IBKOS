import React from "react";
import "./SectionOne.css";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  main: {
    marginTop: "65px",
  },
});

const SectionOne = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="md" className={classes.main}>
      <div className="section-one">
        <h1>contact us</h1>
        <h5>
          With powerful feedbacks, advanced solutions and powerful consultant
        </h5>
      </div>
    </Container>
  );
};

export default SectionOne;
