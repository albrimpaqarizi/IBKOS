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
import { useTranslation } from "react-i18next";

const useStyles = makeStyles({
  paper: {
    padding: "8%",
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
  const { t } = useTranslation();

  return (
    <Paper className={classes.paper} elevation={3}>
      <h3 className="text-center font-r form-name"> {t("loginForm.title")} </h3>
      <p className="font-r m-0 small text-center">
        {t("loginForm.textHeader")}
      </p>
      <Divider className={classes.divider} />
      <form className="d-flex px-1 justify-content-center flex-column">
        <Email
          label={t("loginForm.email.emailLabel")}
          placeholder={t("loginForm.email.emailPlaceholder")}
        />
        <Password
          label={t("loginForm.password.passwordLabel")}
          placeholder={t("loginForm.password.passwordPlaceholder")}
        />
        <Link to="#" className="text-decoration-none my-2 font-r ">
          {t("loginForm.forgot")}
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
            label={t("loginForm.remember")}
          />
        </Box>
        <button type="submit" className="btn btn-submit m-0">
          {t("loginForm.btn")}
        </button>
        <p className="font-r mt-3 small ">
          <span className="light "> {t("loginForm.textFooter")[0]} </span>
          <Link to="#" className="text-decoration-none my-2 font-r ">
            {t("loginForm.textFooter")[1]}
          </Link>
        </p>
      </form>
    </Paper>
  );
};

export default Form;
