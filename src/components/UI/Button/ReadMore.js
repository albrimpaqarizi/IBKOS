import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ReadMore = () => {
  const { t } = useTranslation();
  return (
    <Link to={`/${t("readMoreBtn.link")}`} className="btn-a btn-a1 btn-bg1 ">
      {t("readMoreBtn.name")}
    </Link>
  );
};

export default ReadMore;
