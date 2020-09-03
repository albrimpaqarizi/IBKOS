import React from "react";
import { Box, Paper, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  form: {
    padding: "2rem",
    margin: "2rem",
  },
  input: {
    margin: "5px 0px",
  },
});

const LoginForm = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.form} elevation={3}>
      <h4 className="text-center form-cart text-col3"> Send as a message</h4>
      <form>
        <Box
          paddingX={1}
          display="flex"
          justifyContent="center"
          flexDirection="column"
        >
          <TextField id="name" label="Name" className={classes.input} />
          <TextField
            id="email-address"
            label="Email address"
            className={classes.input}
          />
          <TextField
            id="comments"
            label="Tell us about it"
            className={classes.input}
          />
          <button type="submit" className="btn-submit btn">
            send
          </button>
        </Box>
      </form>
    </Paper>
  );
};

export default LoginForm;
