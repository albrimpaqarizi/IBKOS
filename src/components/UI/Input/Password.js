import React from "react";
import {
  InputAdornment,
  FormControl,
  OutlinedInput,
  IconButton,
} from "@material-ui/core";
import { MdLockOpen, MdLockOutline } from "react-icons/md";
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
  icon: {
    color: "#555555",
  },
});

const PasswordInput = (props) => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useToggle(false);
  const [password, setPassword] = useInput("");

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <OutlinedInput
        className={classes.inputOutline}
        autoComplete="current-password"
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={setPassword}
        id={props.id}
        startAdornment={
          <InputAdornment position="start">
            <IconButton
              className={classes.customHoverFocus}
              aria-label="toggle password visibility"
              onClick={setShowPassword}
              onMouseDown={setPassword}
              edge="start"
            >
              {showPassword ? (
                <MdLockOpen className={classes.icon} />
              ) : (
                <MdLockOutline className={classes.icon} />
              )}
            </IconButton>
          </InputAdornment>
        }
        placeholder={props.placeholder}
      />
    </FormControl>
  );
};

export default PasswordInput;
