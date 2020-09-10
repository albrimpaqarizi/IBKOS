import React from "react";
import { useInput } from "../../../Hooks/useInput";
import {
  InputAdornment,
  InputLabel,
  FormControl,
  OutlinedInput,
} from "@material-ui/core";

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

const InputContact = (props) => {
  const classes = useStyles();
  const [value, setvalue] = useInput("");
  return (
    <FormControl variant="outlined" className={classes.input}>
      <InputLabel htmlFor={props.id} className={classes.inputLabel}>
        {props.label}
      </InputLabel>

      <OutlinedInput
        value={value}
        onChange={setvalue}
        className={classes.inputOutline}
        inputProps={props.input}
        startAdornment={
          <InputAdornment position="start">{props.icon}</InputAdornment>
        }
        labelWidth={props.labelWidth}
      />
    </FormControl>
  );
};

export default InputContact;
