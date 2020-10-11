import React from "react";
import { useTranslation } from "react-i18next";
import "./Subscribe.css";

const Subscribe = () => {
  const { t } = useTranslation();
  return (
    <div className="subscribe fullBackground">
      <div className="container subscribe_container" >
      <h3 className="col_white font-helvetica">{t("subscribe.text")} </h3>
        <form className="subscribe_form">
          <input type="email" placeholder={t("subscribe.placeholder")} required />
          <button type="submit">  {t("subscribe.btn")}</button>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
