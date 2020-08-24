import React from "react";
import "./main.css";
import Header from "../components/Navigation/Header";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  main: {
    marginTop: "65px",
  },
});

const About = () => {
  const classes = useStyles();

  return (
    <div className="about fullHeader">
      <Header />
      <Container maxWidth="md" className={classes.main}>
        <h1>About Pages</h1>
      </Container>
    </div>
  );
};

export default About;
