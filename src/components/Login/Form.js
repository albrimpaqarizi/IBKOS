import React from "react";
import {
  Paper,
  Divider,
  Box,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Password from "../UI/Input/Password";
import Email from "../UI/Input/Email";

const useStyles = makeStyles({
  paper: {
    padding: "2.5rem",
    display: "flex",
    justifyContent: "center",
    flexFlow: "column",
    borderRadius: "0 ",
  },
  input: {
    margin: "10px 0px",
  },
  divider: {
    backgroundColor: " #2699fb",
    height: "2px",
    margin: "2rem 1rem",
  },
  checkbox: {
    "&.MuiCheckbox-colorPrimary.Mui-checked": {
      color: "black",
    },
  },
});

const Form = (props) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper} elevation={3}>
      <h3 className="text-center font-r form-name"> Sign up free</h3>
      <p className="font-r m-0 small">
        You already have a Ibkos solution account ? Login here
      </p>

      <Divider className={classes.divider} />
      <Box
        paddingX={1}
        display="flex"
        justifyContent="center"
        flexDirection="column"
      >
        <Email />
        <Password />
        <Link to="#" className="text-decoration-none my-2 font-r ">
          Forget password
        </Link>
        <Box>
          <FormControlLabel
            control={
              <Checkbox
                defaultChecked={false}
                color="primary"
                className={classes.checkbox}
              />
            }
            label="Remember me"
          />
        </Box>
        <button type="submit" className="btn btn-submit m-0">
          Log in
        </button>
        <p className="font-r mt-3 small ">
          <span className="light "> Need a IBKOS account? </span>
          <Link to="#" className="text-decoration-none my-2 font-r ">
            Create an account
          </Link>
        </p>
      </Box>
    </Paper>
  );
};

export default Form;
