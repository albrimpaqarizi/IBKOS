import React from "react";
import { Paper, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Password from "../UI/Input/Password";
import Input from "../UI/Input/Input";
import { useTranslation } from "react-i18next";
import { MdMailOutline, MdPersonOutline } from "react-icons/md";
import SocialLink from "./SocialLink";

const useStyles = makeStyles({
  paper: {
    padding: "8%",
    display: "flex",
    justifyContent: "center",
    flexFlow: "column",
    borderRadius: "0 ",
  },
  divider: {
    backgroundColor: " #2699fb",
    height: "2px",
    margin: "2rem 1rem",
  },
  icon: {
    fontSize: "24px",
    marginRight: "13px",
    color: "#555555",
  },
});

const LoginForm = (props) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Paper className={classes.paper} elevation={3}>
      <h3 className="text-center font-r form-name">{t("signUpForm.title")}</h3>
      <SocialLink />
      <Divider className={classes.divider} />
      <form className="d-flex px-1 justify-content-center flex-column">
        <Input
          id="fullName"
          placeholder={t("signUpForm.fullNamePlaceholder")}
          type="text"
          icon={<MdPersonOutline className={classes.icon} />}
        />
        <Input
          id="email"
          placeholder={t("signUpForm.emailPlaceholder")}
          type="email"
          icon={<MdMailOutline className={classes.icon} />}
        />
        <Password
          id="password"
          placeholder={t("signUpForm.passwordPlaceholder")}
        />
        <Password
          id="confirm-password"
          placeholder={t("signUpForm.configPswPlaceholder")}
        />

        <button type="submit" className="btn btn-submit mx-0 mt-4 mb-2 ">
          {t("signUpForm.btn")}
        </button>
        <p className="font-r mx-auto">
          <span className="light "> {t("signUpForm.textFooter")[0]} </span>
          <Link to="/login" className="text-decoration-none my-2 font-r ">
            {t("signUpForm.textFooter")[1]}
          </Link>
        </p>
      </form>
    </Paper>
  );
};

export default LoginForm;
