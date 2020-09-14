import React from "react";
import "./Footer.css";
import Logo from "../../UI/Logo/Logo";
import { Divider, Typography } from "@material-ui/core";
import SocialMedia from "../../../components/UI/SocialMedia/SocialMedia";
import MenuListFooter from "./MenuList";
import LangOptions from "../../UI/LangOptions";
import { useTranslation } from "react-i18next";
import ScrollTop from "../../UI/ScrollTop";

const Footer = (props) => {
  const { t } = useTranslation();
  return (
    <div className="footer">
      <div className="container py-3">
        <div className="footer-logo ">
          <div className="mb-4">
            <Logo />
            <p className="mt-2">{t("companyAbout")} </p>
          </div>

          <div className="d-flex justify-content-center flex-row align-items-center mb-4">
            <h5 className="text-white text-capitalize ">{t("followUs")} </h5>
            <SocialMedia />
          </div>
        </div>
        <Divider />

        <div className="row">
          {t("footerMenu").map((item, index) => (
            <MenuListFooter key={index} title={item.title} list={item.items} />
          ))}
          <div className="col-sm-6 col-lg-3">
            <h2 className="text-inherit text-white"> {t("getInTouch")} </h2>
            <ul className="footer-list">
              <li>
                <a className="text-lowercase" href="mailto: info@ibkos.com">
                  info@ibkos.com
                </a>
              </li>
              <li>
                <a href="tel:+38343560863">+383 43 560 863</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <Typography variant="subtitle2" gutterBottom>
            © 2020 ImageSpread Group Inc. {t("alRight")}
          </Typography>
          <div>
            <LangOptions />
          </div>
        </div>
      </div>
      <ScrollTop {...props} />
    </div>
  );
};

export default Footer;
