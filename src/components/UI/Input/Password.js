import React from "react";
import {
  InputAdornment,
  InputLabel,
  FormControl,
  OutlinedInput,
  IconButton,
} from "@material-ui/core";
// import Visibility from "@material-ui/icons/Visibility";
// import VisibilityOff from "@material-ui/icons/VisibilityOff";
import LockIcon from "@material-ui/icons/Lock";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import { useToggle } from "../../../Hooks/useToggle";
import { useInput } from "../../../Hooks/useInput";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  formControl: {
    margin: "10px 0px",
  },
  inputOutline: {
    "&:focus, &.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#555555",
    },
  },
  customHoverFocus: {
    "&:focus, &.Mui-focusVisible": {
      outline: "none ",
    },
  },
  inputLabel: {
    "&.MuiFormLabel-root.Mui-focused": {
      color: "#555555",
    },
  },
});

const PasswordInput = (props) => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useToggle(false);
  const [password, setPassword] = useInput("");

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel htmlFor="password" className={classes.inputLabel}>
        {props.label}
      </InputLabel>
      <OutlinedInput
        className={classes.inputOutline}
        autoComplete="current-password"
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={setPassword}
        startAdornment={
          <InputAdornment position="start">
            <IconButton
              className={classes.customHoverFocus}
              aria-label="toggle password visibility"
              onClick={setShowPassword}
              onMouseDown={setPassword}
              edge="start"
            >
              {showPassword ? <LockOpenIcon /> : <LockIcon />}
            </IconButton>
          </InputAdornment>
        }
        placeholder={props.placeholder}
        labelWidth={80}
      />
    </FormControl>
  );
};

export default PasswordInput;
