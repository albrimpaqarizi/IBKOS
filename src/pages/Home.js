import React from "react";
import "./main.css";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  main: {
    marginTop: "65px",
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <div className="home fullHeader">
      <Container maxWidth="md" className={classes.main}>
        <h1>Home Pages</h1>
      </Container>
    </div>
  );
};

export default Home;
