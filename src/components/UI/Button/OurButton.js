import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const OurButton = (props) => {
  const { t } = useTranslation();
  const { btn } = props;
  return (
    <ScrollAnimation duration={2.5} animateIn="animate__fadeIn">
      <Link
        to={`/${t(`${btn}.link`)}`}
        className={`my-2 btn-a btn-a2 btn-bg3 ${props.classProps}`}
      >
        {t(`${btn}.name`)}
      </Link>
    </ScrollAnimation>
  );
};

export default OurButton;
