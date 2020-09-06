import React from "react";
import "./Footer.css";
import Logo from "../../UI/Logo/Logo";
import { Divider, Typography } from "@material-ui/core";
import SocialMedia from "../../../components/UI/SocialMedia/SocialMedia";
import Signup from "./Signup";
import MenuListFooter from "./MenuList";
import LangOptions from "../../UI/LangOptions";

const Footer = () => {
  return (
    <div>
      <Signup />
      <div className="footer">
        <div className="container py-3">
          <div className="footer-logo ">
            <div className="mb-4">
              <Logo />
              <p>Since 1999, we have been helping American business thrive</p>
            </div>

            <div className="d-flex justify-content-center flex-row align-items-center mb-4">
              <h5 className="text-white">Follow us</h5>
              <SocialMedia />
            </div>
          </div>
          <Divider />

          <div className="row">
            <MenuListFooter
              title="Who We Are"
              items={["about us", "careers", "out team"]}
            />
            <MenuListFooter
              title="Quick Links"
              items={["sign up", "new", "privacy policy"]}
            />
            <MenuListFooter
              title="Quick Links"
              items={["contact us", "faq", "features"]}
            />

            <div className="col-sm-6 col-lg-3">
              <h2>Get in Touch</h2>
              <ul className="footer-list">
                <li>
                  <a className="text-lowercase" href="mailto: info@ibkos.com">
                    info@ibkos.com
                  </a>
                </li>
                <li>
                  <a href="tel:+185223456">+1-852-234-56</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <Typography variant="subtitle2" gutterBottom>
              © 2020 ImageSpread Group Inc. All Rights Reserved
            </Typography>
            <div>
              <LangOptions />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
