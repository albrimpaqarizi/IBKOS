import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const OurButton = (props) => {
  const { t } = useTranslation();
  const { btn } = props;
  return (
    <Link
      to={`/${t(`${btn}.link`)}`}
      className="my-2 btn-a btn-a2 btn-bg3 text-capitalize"
    >
      {t(`${btn}.name`)}
    </Link>
  );
};

export default OurButton;
