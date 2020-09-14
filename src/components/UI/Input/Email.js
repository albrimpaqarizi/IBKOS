import React from "react";
import {
  InputAdornment,
  InputLabel,
  FormControl,
  OutlinedInput,
} from "@material-ui/core";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  input: {
    margin: "10px 0px",
  },
  icon: {
    marginRight: "13px",
  },
  inputOutline: {
    "&:focus, &.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#555555",
    },
  },
  inputLabel: {
    "&.MuiFormLabel-root.Mui-focused": {
      color: "#555555",
    },
  },
});

const EmailInput = (props) => {
  const classes = useStyles();
  return (
    <FormControl variant="outlined" className={classes.input}>
      <InputLabel htmlFor="email-address" className={classes.inputLabel}>
        {props.label}
      </InputLabel>

      <OutlinedInput
        className={classes.inputOutline}
        type="email"
        id="email-address"
        startAdornment={
          <InputAdornment position="start">
            <MailOutlineIcon className={classes.icon} />
          </InputAdornment>
        }
        labelWidth={120}
        placeholder={props.placeholder}
      />
    </FormControl>
  );
};

export default EmailInput;
