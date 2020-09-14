import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./SignUpFooter.css";

const SignUpFooter = () => {
  const { t } = useTranslation();
  return (
    <div className="signUpFooter fullBackground">
      <h2 className="my-4 text-center">{t("signUpFooterText")} </h2>
      <Link to="/signup" className="btn-a btn-a1 btn-bg2 btn-light">
        {t("signUpBtn")}
      </Link>
    </div>
  );
};

export default SignUpFooter;
