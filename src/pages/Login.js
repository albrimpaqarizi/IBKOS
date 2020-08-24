import React from "react";
import "./main.css";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  main: {
    marginTop: "65px",
  },
});

const Login = () => {
  const classes = useStyles();
  return (
    <div className="login fullHeader">
      <Container maxWidth="md" className={classes.main}>
        <h1>Login Pages</h1>
      </Container>
    </div>
  );
};

export default Login;
