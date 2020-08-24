import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  main: {
    marginTop: "65px",
  },
});

const PageNotFound = () => {
  const classes = useStyles();

  return (
    <Container className={classes.main}>
      <h1 style={{ textAlign: "center" }}>Page Not Found 404</h1>
    </Container>
  );
};

export default PageNotFound;
