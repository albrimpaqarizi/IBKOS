import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

const OurButton = (props) => {
  const { t } = useTranslation();
  const { btn } = props;
  return (
    <Fade bottom cascade>
      <Link
        to={`/${t(`${btn}.link`)}`}
        className={`my-2 btn-a btn-a2 btn-bg3 ${props.classProps}`}
      >
        {t(`${btn}.name`)}
      </Link>
    </Fade>
  );
};

export default OurButton;
