import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ReadMore = (props) => {
  const { t } = useTranslation();
  return (
    <Link
      to={`/${t("readMoreBtn.link")}`}
      className={`btn-a btn-a1 ${props.classProps}`}
    >
      {t("readMoreBtn.name")}
    </Link>
  );
};

export default ReadMore;
