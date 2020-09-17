import React from "react";
import { useTranslation } from "react-i18next";
import * as Scroll from "react-scroll";
const ReadMore = (props) => {
  const { t } = useTranslation();
  let Link = Scroll.Link;
  return (
    <Link
      // to={`/${t("readMoreBtn.link")}`}
      // activeClass="active"
      to={props.link}
      spy={true}
      smooth={true}
      offset={props.offset}
      duration={500}
      // isDynamic={true}
      className={`btn-a btn-a1 ${props.classProps}`}
    >
      {t("readMoreBtn.name")}
    </Link>
  );
};

export default ReadMore;
