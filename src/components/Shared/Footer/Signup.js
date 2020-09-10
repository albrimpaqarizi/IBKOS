import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Signup.css";

const Signup = () => {
  const { t } = useTranslation();
  return (
    <div className="signup-footer fullBackground">
      <h2 className="my-4 tect-center">{t("signUpText")} </h2>
      <Link
        to={`/${t("signUpBtn.link")}`}
        className="btn-a btn-a1 btn-bg2 btn-light"
      >
        {t("signUpBtn.name")}
      </Link>
    </div>
  );
};

export default Signup;
