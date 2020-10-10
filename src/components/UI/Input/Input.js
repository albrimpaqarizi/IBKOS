import React from "react";
import { InputAdornment, FormControl, OutlinedInput } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  input: {
    margin: "10px 0px",
    color: "#555555",
  },
  inputOutline: {
    "&:focus, &.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#555555",
    },
  },
});

const Input = (props) => {
  const classes = useStyles();
  const { placeholder, icon, id, type } = props;
  return (
    <FormControl variant="outlined" className={classes.input}>
      <OutlinedInput
        className={classes.inputOutline}
        type={type}
        id={id}
        startAdornment={
          <InputAdornment position="start">{icon}</InputAdornment>
        }
        placeholder={placeholder}
      />
    </FormControl>
  );
};

export default Input;
